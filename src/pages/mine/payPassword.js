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
import React from 'react';
import pxSize from '../../assets/js/pxSize';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import http from '../../assets/js/http';
import AsyncStorage from '@react-native-community/async-storage';
Icon.loadFont();
export default class PayPassword extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			oldP: '',
			newP: '',
			rNewP: '',
			userInfo: '',
		};
	}
	GetUser = async () => {
		return new Promise(async (resolve) => {
			let userInfo = JSON.parse(await AsyncStorage.getItem('userInfo'));
			this.setState({
				userInfo: userInfo,
			});
			resolve();
		});
	};
	onChangeOldP = (value) => {
		this.setState({
			oldP: value,
		});
	};
	onChangeNewP = (value) => {
		this.setState({
			newP: value,
		});
	};
	onChangeRNewP = (value) => {
		this.setState({
			rNewP: value,
		});
	};

	GetInfo = () => {
		http({
			method: 'get',
			url: 'personal/getMemberInfo?memberId=' + this.state.userInfo.id,
		}).then((res) => {
			AsyncStorage.setItem('userInfo', JSON.stringify(res.data.data));
		});
	};
	save = () => {
		if (this.state.newP != this.state.rNewP) {
			Alert.alert('提示', '两次密码输入不一致', [
				{
					text: '确定',
					onPress: () => {},
				},
			]);
			return;
		}
		http({
			method: 'get',
			url:
				'personal/updatePassword?memberId=' +
				this.state.userInfo.id +
				'&passWord=' +
				this.state.newP +
				'&passType=2' +
				'&tranPassword =' +
				this.state.oldP,
		}).then((res) => {
			console.log(res);
			if (res.data.code === 1) {
				Alert.alert('提示', '修改成功', [
					{
						text: '确定',
						onPress: () => {
							this.GetInfo();
						},
					},
				]);
			} else {
				Alert.alert('提示', res.data.msg, [
					{
						text: '确定',
						onPress: () => {},
					},
				]);
			}
		});
	};
	async componentDidMount() {
		await this.GetUser();
	}
	render() {
		return (
			<View style={{flex: 1}}>
				<ScrollView>
					<View style={styles.addressBox}>
						<TextInput
							style={{
								fontSize: 16,
								padding: 0,
							}}
							placeholder="请输入原密码"
							value={this.state.oldP}
							onChangeText={(value) => this.onChangeOldP(value)}
							secureTextEntry={true}
						/>
					</View>
					<View style={styles.addressBox}>
						<TextInput
							style={{
								fontSize: 16,
								padding: 0,
							}}
							placeholder="请输入新密码"
							value={this.state.newP}
							onChangeText={(value) => this.onChangeNewP(value)}
							secureTextEntry={true}
						/>
					</View>
					<View style={styles.addressBox}>
						<TextInput
							style={{
								fontSize: 16,
								padding: 0,
							}}
							placeholder="请重新输入新密码"
							value={this.state.rNewP}
							onChangeText={(value) => this.onChangeRNewP(value)}
							secureTextEntry={true}
						/>
					</View>
					{/* <View style={styles.addressBox}>
						<TextInput
							style={{
								fontSize: 16,
								padding: 0,
							}}
							placeholder="请设置支付密码"
						/>
					</View>
					<View style={styles.addressBox}>
						<TextInput
							style={{
								fontSize: 16,
								padding: 0,
							}}
							placeholder="请重新输入支付密码"
						/>
					</View>
					<View style={styles.addressBox}>
						<TextInput
							style={{
								fontSize: 16,
								padding: 0,
							}}
							placeholder="请填写验证码"
						/>
						<Text
							style={{
								backgroundColor: '#4CDBC5',
								color: '#fff',
								borderRadius: 20,
								width: pxSize(95),
								height: pxSize(28),
								textAlign: 'center',
								textAlignVertical: 'center',
							}}>
							发送验证码
						</Text>
					</View> */}
				</ScrollView>
				<TouchableHighlight onPress={() => this.save()}>
					<View style={styles.footerBox}>
						<Text style={styles.footerBtn}>立即设置</Text>
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
		height: pxSize(50),
		justifyContent: 'space-between',
	},
});
