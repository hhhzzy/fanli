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

import {AuthContext} from '../../assets/js/Context';
Icon.loadFont();
export default class Edit extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			nickName: '',
			memberName: '',
			alipayAccount: '',
			userInfo: '',
		};
	}
	onChangeOldP = (value) => {
		this.setState({
			nickName: value,
		});
	};
	onChangeNewP = (value) => {
		this.setState({
			memberName: value,
		});
	};
	onChangeRNewP = (value) => {
		this.setState({
			alipayAccount: value,
		});
	};
	static contextType = AuthContext; // 才可以使用 this.context
	save = () => {
		http({
			method: 'get',
			url:
				'personal/updateMemberUrl?memberId=' +
				this.state.userInfo.id +
				'&nickName=' +
				this.state.nickName +
				'&memberName=' +
				this.state.memberName +
				'&alipayAccount=' +
				this.state.alipayAccount,
		}).then((res) => {
			console.log(res);
			if (res.data.code === 1) {
				Alert.alert('提示', '修改成功', [
					{
						text: '确定',
						onPress: () => {
							this.props.navigation.navigate('SettingScreen');
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
	GetUser = async () => {
		let usr = JSON.parse(await AsyncStorage.getItem('userInfo'));
		http({
			method: 'get',
			url: 'personal/getMemberInfo?memberId=' + usr.id,
		}).then((res) => {
			console.log(res);
			this.setState({
				userInfo: res.data.data,
				nickName: res.data.data.nickName,
				memberName: res.data.data.alipayName,
				alipayAccount: res.data.data.alipayAccount,
			});
		});
	};
	async componentDidMount() {
		// 获取用户数据
		this.GetUser();
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
							placeholder="请输入昵称"
							value={this.state.nickName}
							onChangeText={(value) => this.onChangeOldP(value)}
						/>
					</View>
					<View style={styles.addressBox}>
						<TextInput
							style={{
								fontSize: 16,
								padding: 0,
							}}
							placeholder="请输入真实姓名"
							value={this.state.memberName}
							onChangeText={(value) => this.onChangeNewP(value)}
						/>
					</View>
					<View style={styles.addressBox}>
						<TextInput
							style={{
								fontSize: 16,
								padding: 0,
							}}
							placeholder="请输入支付宝账号"
							value={this.state.alipayAccount}
							onChangeText={(value) => this.onChangeRNewP(value)}
						/>
					</View>
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
