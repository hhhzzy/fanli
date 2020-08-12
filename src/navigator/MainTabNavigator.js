import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeStackScreen from './HomeStackNavigator';
import MineStackScrenn from './MineStackNavigator';
import GoodsStackScreen from './GoodsStackNavigator';
import RebateStackScreen from './RebateStackNavigator';
import pxSize from '../assets/js/pxSize';

// 底部导航
const Tab = createBottomTabNavigator();
export default class TabNav extends React.Component {
	render() {
		return (
			<Tab.Navigator
				screenOptions={({route}) => ({
					tabBarIcon: ({focused, color, size}) => {
						let iconName = 'logo-react';
						if (route.name === 'Home') {
							iconName = focused ? 'home' : 'home-outline';
						} else if (route.name === 'Mine') {
							iconName = focused
								? 'ios-person-circle-outline'
								: 'ios-person-circle-sharp';
						} else if (route.name === 'Rebate') {
							iconName = focused
								? 'md-cube-outline'
								: 'md-cube-sharp';
						} else if (route.name === 'Goods') {
							iconName = focused ? 'copy' : 'copy-outline';
						}
						return (
							<Icon name={iconName} size={size} color={color} />
						);
					},
					tabBarLabel: () => {},
				})}
				tabBarOptions={{
					activeTintColor: '#4CDBC5',
					inactiveTintColor: '#D7D7D7',
					activeBackgroundColor: '#fff',
					safeAreaInsets: {bottom: 0},
					style: {height: pxSize(50)},
					tabStyle: {paddingBottom: 5},
				}}>
				<Tab.Screen
					name="Home"
					options={{tabBarLabel: '首页'}}
					component={HomeStackScreen}
				/>
				<Tab.Screen
					name="Goods"
					options={{tabBarLabel: '商品'}}
					component={GoodsStackScreen}
				/>
				<Tab.Screen
					name="Rebate"
					options={{tabBarLabel: '返利'}}
					component={RebateStackScreen}
				/>
				<Tab.Screen
					name="Mine"
					options={{tabBarLabel: '我的'}}
					component={MineStackScrenn}
				/>
			</Tab.Navigator>
		);
	}
}
