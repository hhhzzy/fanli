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
			// userToken: props.userToken,
		};
		console.log(props, '222');
	}

	static contextType = AuthContext; // 才可以使用 this.context
	login = () => {
		const {signIn} = this.context;
		// 把用户名和密码传到app.js中
		signIn({userName: 'hzy', password: 'hzy'});
	};
	render() {
		return (
			<View>
				<Text>userToken</Text>
				<TouchableHighlight onPress={() => this.login()}>
					<View style={{backgroundColor: 'red'}}>
						<Text>45415555555555555555555</Text>
					</View>
				</TouchableHighlight>
			</View>
		);
	}
}
