import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';


import Home from '../pages/home/home';
import Detail from '../pages/home/detail';

const Stack = createStackNavigator();

// const MyStack = () => {
//     return (
//         <Stack.Navigator
//             initialRouteName="Home"
//             screenOptions={{
//                 headerShown: false,
//                 gestureEnabled: true,
//                 cardOverlayEnabled: true,
//                 ...TransitionPresets.ModalPresentationIOS,
//             }}
//             mode="modal">
//             <Stack.Screen name="Home" component={Home} />
//         </Stack.Navigator>
//     );
// };
export default class HomeStack extends React.Component {
    render() {
        return (
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerShown: false,
                    gestureEnabled: true,
                    cardOverlayEnabled: true,
                    ...TransitionPresets.ModalPresentationIOS,
                }}
                mode="modal">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Detail" component={Detail} />
            </Stack.Navigator>
        );
    }
}
