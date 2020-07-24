import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {Animated} from 'react-native';
import * as React from 'react';

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

import GoodsScreen from '../pages/goods/goods';
import GoodsDetailScreen from '../pages/goods/goodsDetail';

const Stack = createStackNavigator();

export default class GoodsStackScreen extends React.Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="Goods" mode="modal">
        <Stack.Screen
          name="Goods"
          component={GoodsScreen}
          options={{
            headerTitle: '聚宝商城',
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
          }}
        />
        {/* <Stack.Screen
          name="GoodsDetailScreen"
          component={GoodsDetailScreen}
          options={{
            headerTitle: '详情',
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerShown: true,
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
        /> */}
      </Stack.Navigator>
    );
  }
}
