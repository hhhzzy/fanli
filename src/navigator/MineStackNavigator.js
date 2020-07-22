import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {Animated} from 'react-native';
import * as React from 'react';

import MineScreen from '../pages/mine/mine';

const Stack = createStackNavigator();

export default class HomeStackScreen extends React.Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="Mine" mode="modal">
        <Stack.Screen
          name="Mine"
          component={MineScreen}
          options={{
            headerTintColor: '#000',
            headerStyle: {
              backgroundColor: 'red',
            },
          }}
        />
      </Stack.Navigator>
    );
  }
}
