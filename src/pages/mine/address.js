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
export default class Address extends React.Component {
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
					<View style={styles.addressBox}>
						<Text>姓名：</Text>
						<TextInput
							style={{
								height: 40,
							}}
							placeholder="请输入姓名"
						/>
					</View>
					<View style={styles.addressBox}>
						<Text>手机号：</Text>
						<TextInput
							style={{
								height: 40,
							}}
							placeholder="请输入手机号"
						/>
					</View>
					<View style={styles.addressBox}>
						<Text>收货地址：</Text>
						<TextInput
							style={{
								height: 40,
							}}
							placeholder="请输入收货地址"
						/>
					</View>
				</ScrollView>
				<TouchableHighlight>
					<View style={styles.footerBox}>
						<Text style={styles.footerBtn}>保存</Text>
					</View>
				</TouchableHighlight>
			</SafeAreaView>
		);
	}
}
const styles = StyleSheet.create({
	footerBox: {
		justifyContent: 'center',
		backgroundColor: '#4CDBC5',
		alignItems: 'center',
		alignSelf: 'stretch',
		height: pxSize(50),
	},
	footerBtn: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
	},
	addressBox: {
		paddingLeft: pxSize(15),
		paddingRight: pxSize(15),
		backgroundColor: '#fff',
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: '#f5f5f5',
		paddingTop: pxSize(10),
		paddingBottom: pxSize(10),
	},
});
