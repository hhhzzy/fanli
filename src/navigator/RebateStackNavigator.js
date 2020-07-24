import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {Animated} from 'react-native';
import * as React from 'react';
import LinearGradient from 'react-native-linear-gradient';

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
            headerTitle: '我的返利',
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
      </Stack.Navigator>
    );
  }
}
