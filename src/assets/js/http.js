import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {
	Text,
	Button,
	View,
	TouchableHighlight,
	SafeAreaView,
	StyleSheet,
	Image,
	TextInput,
	Alert,
} from 'react-native';
import {AuthContext} from '../../assets/js/Context';

const ajax = axios.create({
	baseURL: 'http://www.baidu.com/', // 请求地址
	timeout: 30000, // 请求超时
});
ajax.defaults.headers.post['Content-Type'] =
	'application/x-www-form-urlencoded;charset=UTF-8'; // post 的 请求头设置
// 请求拦截
ajax.interceptors.request.use(
	(config) => {
		// 每次请求之前判断vuex中的token是否存在（也可以存在stroge里面）
		// 如果存在，则统一在请求的header中加上token，后台判断是否登录
		// 即使存在token，也有可能过期，所以在响应拦截中也要判断状态
		const token = AsyncStorage.getItem('userToken');
		token && (config.headers.Authorization = 'Bearer' + token); // jwt验证
		return config;
	},
	(error) => {
		return Promise.error(error);
	},
);
// 响应拦截
ajax.interceptors.response.use(
	(response) => {
		return response;
	},
	// 状态码提示
	(error) => {
		console.log(error);
		if (error.response.status) {
			// 401: 未登录
			Alert.alert('提示', '未登录，请登录！', [
				{
					text: '取消',
					onPress: () => console.log('Cancel Pressed'),
					style: 'cancel',
				},
				{text: '去登陆', onPress: () => console.log('OK Pressed')},
			]);
			if (error.response.status === 401) {
				// 到登录页面
			} else if (error.response.status === 403) {
				// token过期
				const {signOut} = AuthContext;
				// 删除token
				Alert.alert('提示', '登录过期，请重新登录！', [
					{
						text: '取消',
						onPress: () => console.log('Cancel Pressed'),
						style: 'cancel',
					},
					{text: '去登陆', onPress: () => console.log('OK Pressed')},
				]);
				// 跳转到登录页面可以吧当前浏览的页面传过去，登录成功后返回当前页面
			} else if (error.response.status === 404) {
				// 接口找不到
			} else {
				// 直接抛出错误
			}
		}
		return Promise.reject(error.response);
	},
);

export default ajax;
