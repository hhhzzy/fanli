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
export default class BankCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userInfo: {},
			bankInfo: {},
			bankName: '',
			bankAddress: '',
			bankAccountNumber: '',
			bankAccountName: '',
		};
	}
	GetUser = async () => {
		let usr = JSON.parse(await AsyncStorage.getItem('userInfo'));
		http({
			method: 'get',
			url: 'personal/getMemberInfo?memberId=' + usr.id,
		}).then((res) => {
			console.log(res, 999);
			this.setState({
				userInfo: res.data.data,
				selectYh: res.data.data.bankAccountNumber,
				bankName: res.data.data.bankName,
				bankAddress: res.data.data.bankAddress,
				bankAccountNumber: res.data.data.bankAccountNumber,
				bankAccountName: res.data.data.bankAccountName,
			});
		});
	};
	onChangeBn = (value) => {
		this.setState({
			bankName: value,
		});
	};
	onChangeNum = (value) => {
		this.setState({
			bankAccountNumber: value,
		});
	};
	onChangeName = (value) => {
		this.setState({
			bankAccountName: value,
		});
	};
	onChangeAdd = (value) => {
		this.setState({
			bankAddress: value,
		});
	};
	SaveAdd = () => {
		http({
			method: 'get',
			url:
				'personal/updateMemberBank?memberId=' +
				this.state.userInfo.id +
				'&bankAccountName=' +
				this.state.bankAccountName +
				'&bankAccountNumber=' +
				this.state.bankAccountNumber +
				'&bankAddress=' +
				this.state.bankAddress +
				'&bankName=' +
				this.state.bankName,
		}).then((res) => {
			Alert.alert('提示', '修改成功', [
				{
					text: '确定',
					onPress: () => {
						this.props.navigation.goBack();
						if (this.props.route.params) {
							this.props.route.params.refresh();
						}
					},
				},
			]);
		});
	};
	GetInfo = () => {
		http({
			method: 'get',
			url: 'personal/getMemberInfo?memberId=' + this.state.userInfo.id,
		}).then((res) => {
			AsyncStorage.setItem('userInfo', JSON.stringify(res.data.data));
			this.setState({
				userInfo: res.data.data,
				selectYh: res.data.data.bankAccountNumber,
				bankName: res.data.data.bankName,
				bankAddress: res.data.data.bankAddress,
				bankAccountNumber: res.data.data.bankAccountNumber,
				bankAccountName: res.data.data.bankAccountName,
			});
		});
	};
	async componentDidMount() {
		// 获取用户数据
		await this.GetUser();
		console.log(this.state.userInfo);
	}
	render() {
		return (
			<View style={{flex: 1}}>
				<ScrollView>
					<View style={styles.addressBox}>
						<Text style={{fontSize: 16, width: pxSize(100)}}>
							银行名称：
						</Text>
						<TextInput
							style={{
								fontSize: 16,
								padding: 0,
							}}
							placeholder="请输入银行名称"
							value={this.state.bankName}
							onChangeText={(value) => this.onChangeBn(value)}
						/>
					</View>
					<View style={styles.addressBox}>
						<Text style={{fontSize: 16, width: pxSize(100)}}>
							银行卡号：
						</Text>
						<TextInput
							style={{
								fontSize: 16,
								padding: 0,
							}}
							placeholder="请输入银行卡号"
							value={this.state.bankAccountNumber}
							onChangeText={(value) => this.onChangeNum(value)}
						/>
					</View>
					<View style={styles.addressBox}>
						<Text style={{fontSize: 16, width: pxSize(100)}}>
							户名：
						</Text>
						<TextInput
							style={{
								fontSize: 16,
								padding: 0,
							}}
							placeholder="请输入户名"
							value={this.state.bankAccountName}
							onChangeText={(value) => this.onChangeName(value)}
						/>
					</View>
					<View style={styles.addressBox}>
						<Text style={{fontSize: 16, width: pxSize(100)}}>
							开户行名称：
						</Text>
						<TextInput
							style={{
								fontSize: 16,
								padding: 0,
							}}
							placeholder="请输入开户行名称"
							value={this.state.bankAddress}
							onChangeText={(value) => this.onChangeAdd(value)}
						/>
					</View>
					<Text style={{padding: pxSize(15), color: '#9D9D9D'}}>
						请填写真实资料，有助于提升账户安全性
					</Text>
				</ScrollView>
				<TouchableHighlight onPress={() => this.SaveAdd()}>
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
		height: pxSize(50),
	},
});
