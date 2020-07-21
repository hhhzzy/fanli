/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Linking,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';


import Home from './src/pages/home/home.js';
import Mine from './src/pages/mine/mine.js';
import Goods from './src/pages/goods/goods';
import Rebate from './src/pages/rebate/rebate';

import TabNav from './src/navigator/MainTabNavigator';

import Stack from './src/navigator/StackNavigator';

// 侧边抽屉导航
const Drawer = createDrawerNavigator();
const DrawerNav = (props) => {
    return (
        <Drawer.Navigator
            drawerContent={props => <DrawerContent {...props} />}
        >
            {/* <Drawer.Screen name='TabNav' component={TabNav} options={{ title: 'home' }} /> */}
            <Drawer.Screen name='Mine' component={Mine} options={{ title: 'mine' }} />
        </Drawer.Navigator>
    )
}

const DrawerContent = (props) => {
    return (
        <>
            <View style={styles.drawerHeader}>

            </View>
            <DrawerContentScrollView {...props}>
                <DrawerItemList activeBackgroundColor={'transparent'} {...props} />
                <DrawerItem label="about" onPress={() => Linking.openURL('https:')} />
            </DrawerContentScrollView>
        </>
    )
}



class App extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <TabNav />
            </NavigationContainer>
        )
    }
}

const styles = StyleSheet.create({
    drawerHeader: {
        height: 100,
        backgroundColor: 'red'
    }
});

export default App;
