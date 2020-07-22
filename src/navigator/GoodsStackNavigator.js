import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {Animated} from 'react-native';
import * as React from 'react';

import GoodsScreen from '../pages/goods/goods';

const Stack = createStackNavigator();

export default class GoodsStackScreen extends React.Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="Home" mode="modal">
        <Stack.Screen
          name="Goods"
          component={GoodsScreen}
          options={{
            headerTintColor: '#000',
            headerStyle: {
              backgroundColor: 'gray',
            },
          }}
        />
      </Stack.Navigator>
    );
  }
}
