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
	Alert,
} from 'react-native';
import {Button, Modal, Provider} from '@ant-design/react-native';
import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';
import pxSize from '../../assets/js/pxSize';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import http from '../../assets/js/http';
Icon.loadFont();
AntDesign.loadFont();
export default class Address extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isEnabled: false,
			userInfo: {},
			receiveName: '',
			receiveAddress: '',
			receivePhone: '',
		};
	}

	GetUser = async () => {
		return new Promise(async (resolve) => {
			let userInfo = JSON.parse(await AsyncStorage.getItem('userInfo'));
			this.setState({
				userInfo: userInfo,
				addressInfo: {},
			});
			resolve();
		});
	};
	GetAddress = () => {
		http({
			method: 'get',
			url:
				'personal/getMemberReceiveAddress?memberId=' +
				this.state.userInfo.id,
		}).then((res) => {
			console.log(res);
			this.setState({
				addressInfo: res.data.data[0],
				receiveName: res.data.data[0].receiveName,
				receiveAddress: res.data.data[0].receiveAddress,
				receivePhone: res.data.data[0].receivePhone,
			});
			console.log(this.state.addressInfo.receiveName, 22);
		});
	};
	onChangeName = (value) => {
		this.setState({
			receiveName: value,
		});
	};
	onChangeTel = (value) => {
		this.setState({
			receivePhone: value,
		});
	};
	onChangeAdd = (value) => {
		this.setState({
			receiveAddress: value,
		});
	};
	AddAddress = () => {
		// if (
		// 	!this.state.receiveAddress ||
		// 	!this.state.receiveName ||
		// 	!this.state.receivePhone
		// ) {
		// 	Alert.alert('提示', '以上信息请必填', [
		// 		{
		// 			text: '确定',
		// 			onPress: () => {},
		// 		},
		// 	]);
		// 	return;
		// }
		http({
			method: 'get',
			url:
				'personal/updateReceiveAddress?memberId=' +
				this.state.userInfo.id +
				'&receiveAddress=' +
				this.state.receiveAddress +
				'&receivePhone=' +
				this.state.receivePhone +
				'&receiveName=' +
				this.state.receiveName +
				'&id=' +
				this.state.addressInfo.id,
		}).then((res) => {
			console.log(res);
			if (res.data.code == 1) {
				Alert.alert('提示', '修改成功', [
					{text: '确定', onPress: () => this.GetAddress()},
				]);
			}
		});
	};
	async componentDidMount() {
		// 获取用户数据
		await this.GetUser();
		this.GetAddress();
	}
	render() {
		return (
			<View style={{flex: 1}}>
				<ScrollView>
					<View style={styles.addressBox}>
						<Text>姓名：</Text>
						<TextInput
							style={{
								height: 40,
							}}
							placeholder="请输入姓名"
							value={this.state.receiveName}
							onChangeText={(value) => this.onChangeName(value)}
						/>
					</View>
					<View style={styles.addressBox}>
						<Text>手机号：</Text>
						<TextInput
							style={{
								height: 40,
							}}
							placeholder="请输入手机号"
							value={this.state.receivePhone}
							onChangeText={(value) => this.onChangeTel(value)}
						/>
					</View>
					<View style={styles.addressBox}>
						<Text>收货地址：</Text>
						<TextInput
							style={{
								height: 40,
							}}
							placeholder="请输入收货地址"
							value={this.state.receiveAddress}
							onChangeText={(value) => this.onChangeAdd(value)}
						/>
					</View>
				</ScrollView>
				<TouchableHighlight onPress={() => this.AddAddress()}>
					<View style={styles.footerBox}>
						<Text style={styles.footerBtn}>保存</Text>
					</View>
				</TouchableHighlight>
			</View>
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
