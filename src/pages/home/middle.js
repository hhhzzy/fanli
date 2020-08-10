import {
	Text,
	Button,
	View,
	TouchableHighlight,
	SafeAreaView,
	StyleSheet,
	Image,
	TextInput,
	Alert,
} from 'react-native';
import React from 'react';
import {AuthContext} from '../../assets/js/Context';
import AsyncStorage from '@react-native-community/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();
export default class Middle extends React.Component {
	constructor(props) {
		super(props);
	}
	static contextType = AuthContext; // 才可以使用 this.context
	componentDidMount() {
		AsyncStorage.removeItem('userToken');
		AsyncStorage.removeItem('userInfo');
		const {signOut} = this.context;
		// 退出
		signOut();
	}
	render() {
		return (
			<>
				<Text>444</Text>
			</>
		);
	}
}
