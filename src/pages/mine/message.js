import {
	Text,
	SafeAreaView,
	ScrollView,
	Image,
	View,
	StyleSheet,
	TouchableHighlight,
	TextInput,
	Switch,
} from 'react-native';
import {Button, Modal, Provider} from '@ant-design/react-native';
import React from 'react';
import pxSize from '../../assets/js/pxSize';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
Icon.loadFont();
AntDesign.loadFont();
export default class Message extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isEnabled: false,
		};
	}

	render() {
		return (
			<SafeAreaView style={{flex: 1}}>
				<ScrollView>
					<View style={styles.messageList}>
						<Text style={{fontSize: 16, color: '#000'}}>
							这是一条消息这是一条消息这是一条消息这是一条消息这是一条消息这是一条消息这是一条消息这是一条消息
						</Text>
						<Text
							style={{
								fontSize: 14,
								color: '#BEBDBD',
								marginTop: pxSize(2),
							}}>
							2018-10-03 10:34:32
						</Text>
					</View>
					<View style={styles.messageList}>
						<Text style={{fontSize: 16, color: '#000'}}>
							这是一条消息这是一条消息这是一条消息这是一条消息这是一条消息这是一条消息这是一条消息这是一条消息
						</Text>
						<Text
							style={{
								fontSize: 14,
								color: '#BEBDBD',
								marginTop: pxSize(2),
							}}>
							2018-10-03 10:34:32
						</Text>
					</View>
				</ScrollView>
			</SafeAreaView>
		);
	}
}
const styles = StyleSheet.create({
	messageList: {
		justifyContent: 'space-between',
		backgroundColor: '#fff',
		padding: pxSize(15),
		marginLeft: pxSize(15),
		marginRight: pxSize(15),
		marginTop: pxSize(12),
	},
});
