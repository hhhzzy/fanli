import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from '../pages/home/home';
import Mine from '../pages/mine/mine.js';
import Goods from '../pages/goods/goods';
import Rebate from '../pages/rebate/rebate';

import HomeStack from './StackNavigator';

// 底部导航
const Tab = createBottomTabNavigator();
// export const TabNav = () => {
//     return (
//         <Tab.Navigator
//             screenOptions={({ route }) => ({
//                 tabBarIcon: ({ focused, color, size }) => {
//                     let iconName = 'logo-react';
//                     if (route.name === 'Home') {
//                         iconName = 'add-circle';
//                     } else if (route.name === 'Mine') {
//                         iconName = focused ? 'add-circle' : 'add-circle-outline';
//                     }
//                     return <Icon name={iconName} size={size} color={color} />;
//                 },
//             })}
//             tabBarOptions={{
//                 activeTintColor: 'white',
//                 inactiveTintColor: 'gray',
//                 activeBackgroundColor: '#219bd9',
//                 safeAreaInsets: { bottom: 0 },
//                 style: { height: 70 },
//                 tabStyle: { paddingBottom: 15 },
//             }}>
//             <Tab.Screen name="Home" component={Home} />
//             <Tab.Screen name="Goods" component={Goods} />
//             <Tab.Screen name="Rebate" component={Rebate} />
//             <Tab.Screen name="Mine" component={Mine} />
//         </Tab.Navigator>
//     );
// };
export default class TabNav extends React.Component {
    render() {
        return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName = 'logo-react';
                        if (route.name === 'Home') {
                            iconName = 'add-circle';
                        } else if (route.name === 'Mine') {
                            iconName = focused ? 'add-circle' : 'add-circle-outline';
                        }
                        return <Icon name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'white',
                    inactiveTintColor: 'gray',
                    activeBackgroundColor: '#219bd9',
                    safeAreaInsets: { bottom: 0 },
                    style: { height: 70 },
                    tabStyle: { paddingBottom: 15 },
                }}>
                <Tab.Screen name="HomeStack" component={HomeStack} />
                <Tab.Screen name="Goods" component={Goods} />
                <Tab.Screen name="Rebate" component={Rebate} />
                <Tab.Screen name="Mine" component={Mine} />
            </Tab.Navigator>
        );
    }
}
