/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';

import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar,
	Linking,
	Alert,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {
	Header,
	LearnMoreLinks,
	Colors,
	DebugInstructions,
	ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';


import Home from './src/pages/home/home.js';
import Mine from './src/pages/mine/mine.js';
import Goods from './src/pages/goods/goods';
import Rebate from './src/pages/rebate/rebate';

import TabNav from './src/navigator/MainTabNavigator';

import RootStack from './src/navigator/AppNavigator';

import {AuthContext} from './src/assets/js/Context'; // 权限认证context

import {navigationRef} from './src/navigator/RootNavigation';

import appReducer,{initialState} from './src/assets/reducers/reducer';
import http from './src/assets/js/http'; // 封装的axios




// 侧边抽屉导航
const Drawer = createDrawerNavigator();
const DrawerNav = (props) => {
	return (
		<Drawer.Navigator
			drawerContent={props => <DrawerContent {...props} />}
		>
			{/* <Drawer.Screen name='TabNav' component={TabNav} options={{ title: 'home' }} /> */}
			<Drawer.Screen name="Mine" component={Mine} options={{ title: 'mine' }} />
		</Drawer.Navigator>
	);
};

const DrawerContent = (props) => {
	return (
		<>
			<DrawerContentScrollView {...props}>
				<DrawerItemList activeBackgroundColor={'transparent'} {...props} />
				<DrawerItem label="about" onPress={() => Linking.openURL('https:')} />
			</DrawerContentScrollView>
		</>
	);
};




// export default class App extends React.Component {
// 	render() {
// 		return (
// 			<NavigationContainer>
// 				<RootStack />
// 			</NavigationContainer>
// 		);
// 	}
// }


export default function App(){
	// const [userToken, setUserToken] = React.useState(null);
	// const [state, dispatch] = React.useReducer(
	// 	(prevState, action) => {
	// 		switch (action.type) {
	// 			case 'RESTORE_TOKEN':
	// 				return {
	// 					...prevState,
	// 					userToken: action.token,
	// 					isLoading: false,
	// 				};
	// 			case 'SIGN_IN':
	// 				console.log(prevState);
	// 				return {
	// 					...prevState,
	// 					isSignout: false,
	// 					userToken: action.token,
	// 				};
	// 			case 'SIGN_OUT':
	// 				return {
	// 					...prevState,
	// 					isSignout: true,
	// 					userToken: null,
	// 				};
	// 		}
	// 	},
	// 	{
	// 		isLoading: true,
	// 		isSignout: false,
	// 		userToken: null,
	// 	}
	// );
	const [state, dispatch] = React.useReducer(appReducer, initialState);
	React.useEffect(() => {
		// 从本地存储中获取userToken
		const bootstrapAsync = async () => {
			let userToken;

			try {
				userToken = await AsyncStorage.getItem('userToken');
			} catch (e) {
				// Restoring token failed
			}

			// 对从本地存储中获取的userToken可以进行验证操作，操作成功后存储
			dispatch({ type: 'RESTORE_TOKEN', token: userToken });
		};

		bootstrapAsync();
	}, []);
	// axios返回结果拦截器
	http.interceptors.response.use(
		(response) => {
			if (response.data.code === 0) {
				console.log(response);
				Alert.alert('提示', response.data.msg, [
					{
						text: '确定',
					},
				]);
			} else if (response.data.code === -1){
				Alert.alert('提示', response.data.msg, [
					{
						text: '去登陆',
						onPress: () => {
							AsyncStorage.removeItem('userToken');
							AsyncStorage.removeItem('userInfo');
							dispatch({ type: 'SIGN_OUT' });
						},
					},
				]);
			}
			return response;
		},
		// 状态码提示
		(err) => {
			console.log(err,err.response);
			if (err && err.response) {
				console.log(err);
				switch (err.response.status) {
					case 400:
						err.message = '请求错误(400)';
						break;
					case 401:
						Alert.alert('提示', '未登录，请登录！', [
							{
								text: '去登陆',
								onPress: () => {
									dispatch({ type: 'SIGN_OUT' });
								},
							},
						]);
						err.message = '未授权，请重新登录(401)';
						break;
					case 403:
					// token过期
					// 删除token，回到登录页面
						Alert.alert('提示', '登录过期，请重新登录！', [
							{
								text: '去登陆',
								onPress: () => {
									AsyncStorage.removeItem('userToken');
									dispatch({ type: 'SIGN_OUT' });
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
	const authContext = React.useMemo(
		() => ({
			signIn: async data => {
				//在生产应用中，这里获取从登录页面传过来的数据，向服务器发送一些数据（通常是用户名，密码）并获得令牌userToken
				//如果登录失败，我们还将需要处理错误
				//获得令牌后，我们需要使用`AsyncStorage`来保留令牌
				//在示例中，我们将使用虚拟令牌
				console.log(data);
				http({
					method:'get',
					url:'login?telePhone=' + data.userName + '&loginPassWord=' + data.password,
				}).then(res => {
					console.log(res);
					if (res.data.token){
						AsyncStorage.setItem('userToken',res.data.token);
						AsyncStorage.setItem('userInfo',JSON.stringify(res.data.user));
						dispatch({ type: 'SIGN_IN', token: res.data.token});
					}
				});
			},
			signOut: () => {
				// 移除userToken
				AsyncStorage.removeItem('userToken');
				dispatch({ type: 'SIGN_OUT' });
			},
			signUp: async data => {
				//在生产应用中，我们需要将用户数据发送到服务器并获得令牌
				//如果注册失败，我们还将需要处理错误
				//获得令牌后，我们需要使用`AsyncStorage`来保留令牌
				//在示例中，我们将使用虚拟令牌

				dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
			},
		}),
		[]
	);
	return (
		<AuthContext.Provider value={authContext}>
			<NavigationContainer ref={navigationRef}>
				<RootStack  userToken={state.userToken}/>
			</NavigationContainer>
		</AuthContext.Provider>
	);
}
