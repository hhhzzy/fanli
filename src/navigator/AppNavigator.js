import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import * as React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

import TabNav from './MainTabNavigator';
import Login from '../pages/login/login';
import Register from '../pages/register/register';
import GoodsDetailScreen from '../pages/goods/goodsDetail'; // 商品详情
import OrderListScreen from '../pages/mine/orderList'; // 订单列表
import OrderDetailScreen from '../pages/mine/orderInfo'; // 订单列表
import MoneyListScreen from '../pages/mine/moneyList'; // 银行流水
import RechargeScreen from '../pages/mine/recharge'; // 在线充值
import RechargeInfoScreen from '../pages/mine/rechargeInfo'; // 在线充值付款页
import AddressScreen from '../pages/mine/address'; // 地址页
import MessageScreen from '../pages/mine/message'; // 消息中心
import InviteScreen from '../pages/mine/invite'; // 推荐好友
import PromoteScreen from '../pages/mine/promote'; // 我的推广
import CommissionScreen from '../pages/mine/commission'; // 团队佣金
import GameScreen from '../pages/mine/game'; // 趣味游戏
const Stack = createStackNavigator();

export default class RootStack extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userToken: props.userToken,
		};
		console.log(this.state.userToken, '4444');
	}
	render() {
		return (
			<Stack.Navigator initialRouteName="Home" mode="modal">
				{this.state.userToken ? (
					<>
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
									<Icon
										name="chevron-back"
										size={40}
										color="white"
									/>
								),
								headerBackTitleVisible: false,
							}}
							component={MessageScreen}
						/>
					</>
				) : (
					<>
						<Stack.Screen
							name="Home"
							options={{headerShown: false}}
							component={TabNav}
						/>
						<Stack.Screen
							name="Login"
							options={{headerTitle: '登录'}}
							component={Login}
						/>
						<Stack.Screen
							name="Register"
							options={{headerTitle: '注册'}}
							component={Register}
						/>
					</>
				)}

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
						headerBackTitleVisible: false,
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
						headerBackTitleVisible: false,
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
						headerBackTitleVisible: false,
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
						headerBackTitleVisible: false,
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
						headerBackTitleVisible: false,
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
						headerBackTitleVisible: false,
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
						headerBackTitleVisible: false,
					}}
					component={AddressScreen}
				/>
				<Stack.Screen
					name="InviteScreen"
					options={{
						headerTitle: '邀请好友',
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
						headerBackTitleVisible: false,
					}}
					component={InviteScreen}
				/>
				<Stack.Screen
					name="PromoteScreen"
					options={{
						headerTitle: '我的推广',
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
						headerBackTitleVisible: false,
					}}
					component={PromoteScreen}
				/>
				<Stack.Screen
					name="CommissionScreen"
					options={{
						headerTitle: '团队佣金',
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
						headerBackTitleVisible: false,
					}}
					component={CommissionScreen}
				/>
				<Stack.Screen
					name="GameScreen"
					options={{
						headerTitle: '趣味游戏',
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
						headerBackTitleVisible: false,
					}}
					component={GameScreen}
				/>
			</Stack.Navigator>
		);
	}
}
