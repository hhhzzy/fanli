import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import * as React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

import TabNav from './MainTabNavigator';
import Login from '../pages/login/login';
import GoodsDetailScreen from '../pages/goods/goodsDetail'; // 商品详情

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
          component={GoodsDetailScreen}
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
