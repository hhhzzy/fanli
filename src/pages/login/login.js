import {
	Text,
	Button,
	View,
	TouchableHighlight,
	SafeAreaView,
} from 'react-native';
import React from 'react';
import {AuthContext} from '../../assets/js/Context';
export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userToken: props.userToken,
		};
		console.log(props, '1111');
	}
	static contextType = AuthContext; // 才可以使用 this.context
	dl = () => {
		console.log(11);
		const {signIn} = this.context;
		console.log(this.context, signIn);
		signIn({a: '111'});
	};
	render() {
		return (
			<SafeAreaView>
				<Text>userToken</Text>
				<TouchableHighlight onPress={() => this.dl()}>
					<Text>登录</Text>
				</TouchableHighlight>
			</SafeAreaView>
		);
	}
}
