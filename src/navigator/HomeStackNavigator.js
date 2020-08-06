import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
// import {HeaderBackButton} from '@react-navigation/stack';
// import {Animated} from 'react-native';
import * as React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import HomeScreen from '../pages/home/home';
import DetailScreen from '../pages/home/detail';
Icon.loadFont();
AntDesignIcon.loadFont();
const Stack = createStackNavigator();

export default class HomeStackScreen extends React.Component {
	render() {
		return (
			<Stack.Navigator initialRouteName="Home" mode="modal">
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{
						headerTitle: '玉汇缘',
						headerTintColor: '#fff',
						headerTitleAlign: 'left',
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
						headerRight: () => {
							return (
								<AntDesignIcon
									name="message1"
									size={20}
									color="white"
									style={{marginRight: 10}}
								/>
							);
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
						headerBackImage: () => (
							<Icon name="chevron-back" size={40} color="white" />
						),
					}}
					component={DetailScreen}
				/>
			</Stack.Navigator>
		);
	}
}
