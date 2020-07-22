import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import {HeaderBackButton} from '@react-navigation/stack';
import {Animated} from 'react-native';
import * as React from 'react';

import HomeScreen from '../pages/home/home';
import DetailScreen from '../pages/home/detail';

const Stack = createStackNavigator();

const forFade = ({current, next}) => {
  const opacity = Animated.add(
    current.progress,
    next ? next.progress : 0,
  ).interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0],
  });

  return {
    leftButtonStyle: {opacity},
    rightButtonStyle: {opacity},
    titleStyle: {opacity},
    backgroundStyle: {opacity},
  };
};

export default class HomeStackScreen extends React.Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="Home" mode="modal">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTintColor: '#000',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'tomato',
            },
          }}
        />
        <Stack.Screen
          name="Detail"
          options={{
            headerTintColor: '#000',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'tomato',
            },
            headerShown: true,
            headerLeft: (props) => {
              console.log(props, '999');
              <HeaderBackButton
                {...props}
                onPress={() => {
                  // Do something
                  <Icon name="add-circle" size={20} color="red" />;
                }}
              />;
            },
          }}
          component={DetailScreen}
        />
      </Stack.Navigator>
    );
  }
}
