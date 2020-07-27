import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import * as React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

import TabNav from './MainTabNavigator';
import Login from '../pages/login/login';
import GoodsDetailScreen from '../pages/goods/goodsDetail'; // 商品详情
import OrderListScreen from '../pages/mine/orderList'; // 订单列表
import OrderDetailScreen from '../pages/mine/orderInfo'; // 订单列表
import MoneyListScreen from '../pages/mine/moneyList'; // 银行流水
import RechargeScreen from '../pages/mine/recharge'; // 在线充值
import RechargeInfoScreen from '../pages/mine/rechargeInfo'; // 在线充值付款页
import AddressScreen from '../pages/mine/address'; // 地址页
import MessageScreen from '../pages/mine/message'; // 消息中心
const Stack = createStackNavigator();

export default class RootStack extends React.Component {
	render() {
		return (
			<Stack.Navigator initialRouteName="Home" mode="modal">
				<Stack.Screen
					name="Home"
					options={{headerShown: false}}
					component={TabNav}
				/>
				<Stack.Screen
					name="GoodsDetailScreen"
					options={{
						headerTitle: '详情',
						headerTintColor: '#fff',
						headerTitleAlign: 'center',
						headerTransparent: true,

						headerBackImage: () => (
							<Icon name="chevron-back" size={40} color="white" />
						),
					}}
					component={GoodsDetailScreen}
				/>
				<Stack.Screen
					name="OrderListScreen"
					options={{
						headerTitle: '订单列表',
						headerTintColor: '#fff',
						headerTitleAlign: 'center',
						headerBackground: () => {
							return (
								<LinearGradient
									start={{x: 0, y: 0}}
									end={{x: 0, y: 1}}
									style={{flex: 1}}
									colors={['#9BD6D2', '#4CDBC5']}
								/>
							);
						},
						headerBackImage: () => (
							<Icon name="chevron-back" size={40} color="white" />
						),
					}}
					component={OrderListScreen}
				/>
				<Stack.Screen
					name="OrderDetailScreen"
					options={{
						headerTitle: '订单详情',
						headerTintColor: '#fff',
						headerTitleAlign: 'center',
						headerBackground: () => {
							return (
								<LinearGradient
									start={{x: 0, y: 0}}
									end={{x: 0, y: 1}}
									style={{flex: 1}}
									colors={['#9BD6D2', '#4CDBC5']}
								/>
							);
						},
						headerBackImage: () => (
							<Icon name="chevron-back" size={40} color="white" />
						),
					}}
					component={OrderDetailScreen}
				/>
				<Stack.Screen
					name="MoneyListScreen"
					options={{
						headerTitle: '银行流水',
						headerTintColor: '#fff',
						headerTitleAlign: 'center',
						headerBackground: () => {
							return (
								<LinearGradient
									start={{x: 0, y: 0}}
									end={{x: 0, y: 1}}
									style={{flex: 1}}
									colors={['#9BD6D2', '#4CDBC5']}
								/>
							);
						},
						headerBackImage: () => (
							<Icon name="chevron-back" size={40} color="white" />
						),
					}}
					component={MoneyListScreen}
				/>
				<Stack.Screen
					name="RechargeScreen"
					options={{
						headerTitle: '在线充值',
						headerTintColor: '#fff',
						headerTitleAlign: 'center',
						headerBackground: () => {
							return (
								<LinearGradient
									start={{x: 0, y: 0}}
									end={{x: 0, y: 1}}
									style={{flex: 1}}
									colors={['#9BD6D2', '#4CDBC5']}
								/>
							);
						},
						headerBackImage: () => (
							<Icon name="chevron-back" size={40} color="white" />
						),
					}}
					component={RechargeScreen}
				/>
				<Stack.Screen
					name="RechargeInfoScreen"
					options={{
						headerTitle: '在线充值',
						headerTintColor: '#fff',
						headerTitleAlign: 'center',
						headerBackground: () => {
							return (
								<LinearGradient
									start={{x: 0, y: 0}}
									end={{x: 0, y: 1}}
									style={{flex: 1}}
									colors={['#9BD6D2', '#4CDBC5']}
								/>
							);
						},
						headerBackImage: () => (
							<Icon name="chevron-back" size={40} color="white" />
						),
					}}
					component={RechargeInfoScreen}
				/>
				<Stack.Screen
					name="AddressScreen"
					options={{
						headerTitle: '地址',
						headerTintColor: '#fff',
						headerTitleAlign: 'center',
						headerBackground: () => {
							return (
								<LinearGradient
									start={{x: 0, y: 0}}
									end={{x: 0, y: 1}}
									style={{flex: 1}}
									colors={['#9BD6D2', '#4CDBC5']}
								/>
							);
						},
						headerBackImage: () => (
							<Icon name="chevron-back" size={40} color="white" />
						),
					}}
					component={AddressScreen}
				/>
				<Stack.Screen
					name="MessageScreen"
					options={{
						headerTitle: '消息中心',
						headerTintColor: '#fff',
						headerTitleAlign: 'center',
						headerBackground: () => {
							return (
								<LinearGradient
									start={{x: 0, y: 0}}
									end={{x: 0, y: 1}}
									style={{flex: 1}}
									colors={['#9BD6D2', '#4CDBC5']}
								/>
							);
						},
						headerBackImage: () => (
							<Icon name="chevron-back" size={40} color="white" />
						),
					}}
					component={MessageScreen}
				/>
				<Stack.Screen
					name="Login"
					options={{headerTitle: '登录'}}
					component={Login}
				/>
			</Stack.Navigator>
		);
	}
}
