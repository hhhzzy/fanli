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
import AsyncStorage from '@react-native-community/async-storage';
import http from '../../assets/js/http';
Icon.loadFont();
AntDesign.loadFont();
export default class RechargeInfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isEnabled: false,
			type: this.props.route.params.type,
			bankInfo: {},
			userInfo: {},
		};
	}

	GotoOrderInfo = () => {
		this.props.navigation.navigate('OrderDetailScreen');
	};
	toggleSwitch = () => {
		this.setState({isEnabled: !this.isEnabled});
	};
	GetUser = async () => {
		return new Promise(async (resolve) => {
			let userInfo = JSON.parse(await AsyncStorage.getItem('userInfo'));
			this.setState({
				userInfo: userInfo,
			});
			resolve();
		});
	};
	// 获取银行
	GetBank = () => {
		http({
			method: 'get',
			url: 'personal/queryPayConfig',
		}).then((res) => {
			this.setState({
				bankInfo: res.data.data,
			});
			console.log(this.state.bankInfo);
		});
	};
	async componentDidMount() {
		// 获取用户数据
		await this.GetUser();
		this.GetBank();
		console.log(this.state.type, this.state.userInfo);
	}
	render() {
		return (
			<SafeAreaView style={{flex: 1}}>
				<ScrollView>
					<Text
						style={{
							color: '#3A3A3A',
							fontSize: 14,
							fontWeight: 'bold',
							paddingTop: pxSize(10),
							paddingBottom: pxSize(10),
							marginLeft: pxSize(15),
							marginRight: pxSize(15),
							marginTop: pxSize(10),
							paddingLeft: pxSize(15),
							backgroundColor: '#fff',
							borderRadius: 3,
						}}>
						请立即汇款至下列专属账户
					</Text>
					{this.state.type == 1 ? (
						<View style={styles.listBox}>
							<View style={styles.list}>
								<Text
									style={{
										color: '#666',
										width: pxSize(70),
										textAlign: 'right',
									}}>
									存款备注：
								</Text>
								<Text>{this.state.userInfo.telePhone}</Text>
								<Text
									style={{
										marginLeft: 'auto',
										backgroundColor: 'red',
										color: '#fff',
										paddingLeft: pxSize(5),
										paddingRight: pxSize(5),
									}}>
									复制
								</Text>
							</View>
							<View style={styles.list}>
								<Text
									style={{
										color: '#666',
										width: pxSize(70),
										textAlign: 'right',
									}}>
									收款账号：
								</Text>
								<Text>{this.state.bankInfo.zfbAccount}</Text>
								<Text
									style={{
										marginLeft: 'auto',
										backgroundColor: 'red',
										color: '#fff',
										paddingLeft: pxSize(5),
										paddingRight: pxSize(5),
									}}>
									复制
								</Text>
							</View>
							<View style={[styles.list, {borderBottomWidth: 0}]}>
								<Text
									style={{
										color: '#666',
										width: pxSize(70),
										textAlign: 'right',
									}}>
									收款人：
								</Text>
								<Text>{this.state.bankInfo.zfbName}</Text>
								<Text
									style={{
										marginLeft: 'auto',
										backgroundColor: 'red',
										color: '#fff',
										paddingLeft: pxSize(5),
										paddingRight: pxSize(5),
									}}>
									复制
								</Text>
							</View>
						</View>
					) : (
						<View style={styles.listBox}>
							<View style={styles.list}>
								<Text
									style={{
										color: '#666',
										width: pxSize(70),
										textAlign: 'right',
									}}>
									存款备注：
								</Text>
								<Text>
									<Text>{this.state.userInfo.telePhone}</Text>
								</Text>
								<Text
									style={{
										marginLeft: 'auto',
										backgroundColor: 'red',
										color: '#fff',
										paddingLeft: pxSize(5),
										paddingRight: pxSize(5),
									}}>
									复制
								</Text>
							</View>
							<View style={styles.list}>
								<Text
									style={{
										color: '#666',
										width: pxSize(70),
										textAlign: 'right',
									}}>
									银行名称：
								</Text>
								<Text>{this.state.bankInfo.bankName}</Text>
								<Text
									style={{
										marginLeft: 'auto',
										backgroundColor: 'red',
										color: '#fff',
										paddingLeft: pxSize(5),
										paddingRight: pxSize(5),
									}}>
									复制
								</Text>
							</View>
							<View style={styles.list}>
								<Text
									style={{
										color: '#666',
										width: pxSize(70),
										textAlign: 'right',
									}}>
									收款账号：
								</Text>
								<Text>
									{this.state.bankInfo.bankAccountNumber}
								</Text>
								<Text
									style={{
										marginLeft: 'auto',
										backgroundColor: 'red',
										color: '#fff',
										paddingLeft: pxSize(5),
										paddingRight: pxSize(5),
									}}>
									复制
								</Text>
							</View>
							<View style={[styles.list, {borderBottomWidth: 0}]}>
								<Text
									style={{
										color: '#666',
										width: pxSize(70),
										textAlign: 'right',
									}}>
									收款人：
								</Text>
								<Text>
									{this.state.bankInfo.bankAccountName}
								</Text>
								<Text
									style={{
										marginLeft: 'auto',
										backgroundColor: 'red',
										color: '#fff',
										paddingLeft: pxSize(5),
										paddingRight: pxSize(5),
									}}>
									复制
								</Text>
							</View>
						</View>
					)}
					<View style={styles.tipsBox}>
						<Text style={{color: '#666'}}>提示</Text>
						<Text style={{color: '#666'}}>
							1、请截图保留此汇款资讯
						</Text>
						<Text style={{color: '#666'}}>
							2、转账完成后请保留相关单据作为核对证明
						</Text>
						<Text style={{color: '#666'}}>
							3、24小时内未到账，请联系在线客服
						</Text>
					</View>
				</ScrollView>
			</SafeAreaView>
		);
	}
}
const styles = StyleSheet.create({
	listBox: {
		marginLeft: pxSize(15),
		marginRight: pxSize(15),
		backgroundColor: '#fff',
		marginTop: pxSize(15),
		paddingLeft: pxSize(15),
		paddingRight: pxSize(15),
		borderRadius: 3,
	},
	list: {
		flexDirection: 'row',
		alignItems: 'center',
		height: pxSize(50),
		borderBottomWidth: 1,
		borderColor: '#F5F5F5',
	},
	tipsBox: {
		backgroundColor: '#fff',
		marginLeft: pxSize(15),
		marginRight: pxSize(15),
		padding: pxSize(10),
		marginTop: pxSize(15),
		borderRadius: 3,
	},
});
