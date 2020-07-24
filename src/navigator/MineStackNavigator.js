import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {Animated} from 'react-native';
import * as React from 'react';

import MineScreen from '../pages/mine/mine';
import LinearGradient from 'react-native-linear-gradient';
const Stack = createStackNavigator();

export default class HomeStackScreen extends React.Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="Mine" mode="modal">
        <Stack.Screen
          name="Mine"
          component={MineScreen}
          options={{
            headerTitle: '',
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerStyle: {},
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
      </Stack.Navigator>
    );
  }
}
