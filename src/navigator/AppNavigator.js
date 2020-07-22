import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import * as React from 'react';

import TabNav from './MainTabNavigator';
import Login from '../pages/login/login';

const Stack = createStackNavigator();

export default class RootStack extends React.Component {
    render() {
        return (
            <Stack.Navigator initialRouteName="Home" mode="modal">
                <Stack.Screen
                    name="Home"
                    options={{ headerShown: false }}
                    component={TabNav}
                />
                <Stack.Screen
                    name="Login"
                    options={{ headerTitle: '登录' }}
                    component={Login}
                />
            </Stack.Navigator>
        );
    }
}
