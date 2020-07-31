import {Text, View, TouchableHighlight} from 'react-native';
import React from 'react';
export default class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// userToken: props.userToken,
		};
		console.log(props, '222');
	}
	login = () => {
		console.log(11111);
	};
	render() {
		return (
			<View>
				<TouchableHighlight onPress={() => this.login()}>
					<View style={{backgroundColor: 'red'}}>
						<Text>45415555555555555555555</Text>
					</View>
				</TouchableHighlight>
			</View>
		);
	}
}
