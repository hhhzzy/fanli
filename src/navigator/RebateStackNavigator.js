import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {Animated} from 'react-native';
import * as React from 'react';

import RebateScreen from '../pages/rebate/rebate';

const Stack = createStackNavigator();

export default class RebateStackScreen extends React.Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="Home" mode="modal">
        <Stack.Screen
          name="Rebate"
          component={RebateScreen}
          options={{
            headerTintColor: '#000',
            headerStyle: {
              backgroundColor: 'green',
            },
          }}
        />
      </Stack.Navigator>
    );
  }
}
