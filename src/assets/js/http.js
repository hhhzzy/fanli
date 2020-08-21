import axios from 'axios';

import {Alert} from 'react-native';
import {useContext} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import * as RootNavigation from '../../navigator/RootNavigation';
import url from './url';
import reducer from '../reducers/reducer';
import {Toast, Portal} from '@ant-design/react-native';
const ajax = axios.create({
	baseURL: url, // 请求地址
	timeout: 30000, // 请求超时
});
let requestNum = 0; // 请求的数量
let taostKey = null;
ajax.defaults.headers.post['Content-Type'] =
	'application/x-www-form-urlencoded;charset=UTF-8'; // post 的 请求头设置
// 请求拦截
ajax.interceptors.request.use(
	async (config) => {
		// 每次请求之前判断vuex中的token是否存在（也可以存在stroge里面）
		// 如果存在，则统一在请求的header中加上token，后台判断是否登录
		// 即使存在token，也有可能过期，所以在响应拦截中也要判断状态
		console.log(1111111);
		const token = await AsyncStorage.getItem('userToken');
		token && (config.headers.token = token); // jwt验证
		// 全局loading
		if (requestNum == 0) {
			console.log('展示loading');
			taostKey = Toast.loading('loading', 0, () => {
				console.log('Load complete !!!');
			});
		}
		requestNum++;
		return config;
	},
	(error) => {
		return Promise.error(error);
	},
);
// 响应拦截
ajax.interceptors.response.use(
	(response) => {
		// 隐藏loading
		requestNum--;
		if (requestNum == 0) {
			console.log('隐藏loading');
			Portal.remove(taostKey);
		}
		if (typeof response.data === 'string') {
			if (response.data.indexOf('code=-1') >= 0) {
				Alert.alert('提示', '登录过期，请重新登录', [
					{
						text: '去登陆',
						onPress: () => {
							RootNavigation.navigate('Middle');
						},
					},
				]);
			}
		} else {
			if (response.data.code === 0) {
				Alert.alert('提示', response.data.msg, [
					{
						text: '确定',
					},
				]);
			} else if (response.data.code == -1) {
				Alert.alert('提示', response.data.msg, [
					{
						text: '去登陆',
						onPress: () => {
							RootNavigation.navigate('Login');
						},
					},
				]);
			}
			return response;
		}
	},
	// 状态码提示
	(err) => {
		console.log(err);
		if (err && err.response) {
			switch (err.response.status) {
				case 400:
					err.message = '请求错误(400)';
					break;
				case 401:
					Alert.alert('提示', '未登录，请登录！', [
						{
							text: '去登陆',
							onPress: () => {
								AsyncStorage.removeItem('userToken');
								AsyncStorage.removeItem('userInfo');
								RootNavigation.navigate('Middle');
							},
						},
					]);
					err.message = '未授权，请重新登录(401)';
					break;
				case 403:
					Alert.alert('提示', '未登录，请登录！', [
						{
							text: '去登陆',
							onPress: () => {
								AsyncStorage.removeItem('userToken');
								AsyncStorage.removeItem('userInfo');
								RootNavigation.navigate('Middle');
							},
						},
					]);
					err.message = '拒绝访问(403)';
					break;
				case 404:
					err.message = '请求出错(404)';
					break;
				case 408:
					err.message = '请求超时(408)';
					break;
				case 500:
					err.message = '服务器错误(500)';
					break;
				case 501:
					err.message = '服务未实现(501)';
					break;
				case 502:
					err.message = '网络错误(502)';
					break;
				case 503:
					err.message = '服务不可用(503)';
					break;
				case 504:
					err.message = '网络超时(504)';
					break;
				case 505:
					err.message = 'HTTP版本不受支持(505)';
					break;
				default:
					err.message = `连接出错(${err.response.status})!`;
			}
		} else {
			err.message = '连接服务器失败!';
		}
		return Promise.reject(err.message);
	},
);

export default ajax;
