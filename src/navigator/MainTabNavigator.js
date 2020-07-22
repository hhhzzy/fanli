import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeStackScreen from './HomeStackNavigator';
import MineStackScrenn from './MineStackNavigator';
import GoodsStackScreen from './GoodsStackNavigator';
import RebateStackScreen from './RebateStackNavigator';

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
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            } else if (route.name === 'Rebate') {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            } else if (route.name === 'Goods') {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#2B7E4B',
          inactiveTintColor: '#D7D7D7',
          activeBackgroundColor: '#fff',
          safeAreaInsets: {bottom: 0},
          style: {height: 70},
          tabStyle: {paddingBottom: 15},
        }}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Goods" component={GoodsStackScreen} />
        <Tab.Screen name="Rebate" component={RebateStackScreen} />
        <Tab.Screen name="Mine" component={MineStackScrenn} />
      </Tab.Navigator>
    );
  }
}
