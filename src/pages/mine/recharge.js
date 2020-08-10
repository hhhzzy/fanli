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
import {Button, Modal, Provider, List, Radio} from '@ant-design/react-native';
import React from 'react';
import pxSize from '../../assets/js/pxSize';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';
import http from '../../assets/js/http';
import HTMLView from 'react-native-htmlview';
Icon.loadFont();
AntDesign.loadFont();
const RadioItem = Radio.RadioItem;
export default class Recharge extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isEnabled: false,
			userInfo: {},
			bankInfo: {},
			selectYh: 1,
			info: '',
		};
	}

	GotoOrderInfo = () => {
		this.props.navigation.navigate('OrderDetailScreen');
	};
	toggleSwitch = () => {
		this.setState({isEnabled: !this.isEnabled});
	};
	// 进入付款详情
	GotoPay = () => {
		if (!this.state.selectYh) {
			Alert.alert('提示', '请选择支付方式', [
				{text: '确定', onPress: () => console.log('OK Pressed')},
			]);
			return;
		}
		if (!this.state.mon) {
			Alert.alert('提示', '请输入充值金额', [
				{text: '确定', onPress: () => console.log('OK Pressed')},
			]);
			return;
		}
		http({
			method: 'get',
			url:
				'/personal/rechargeMoney?memberId=' +
				this.state.userInfo.id +
				'&rechargeType=' +
				this.state.selectYh +
				'&money=' +
				this.state.mon * 100 +
				'&rechargeRemark=充值',
		}).then((res) => {
			if (res.data.code === 1) {
				Alert.alert('提示', res.data.msg, [
					{
						text: '确定',
						onPress: () => {
							this.props.navigation.navigate(
								'RechargeInfoScreen',
								{type: this.state.selectYh},
							);
						},
					},
				]);
			}
		});
		// Modal.prompt(
		// 	'输入支付密码',
		// 	'',
		// 	(password) => {
		// 		console.log(password);
		// 		if (!password) {
		// 			Alert.alert('提示', '请输入支付密码', [
		// 				{
		// 					text: '确定',
		// 					onPress: () => console.log('OK Pressed'),
		// 				},
		// 			]);
		// 			return;
		// 		}

		// 	},
		// 	'secure-text',
		// );
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
	onChangeMon = (value) => {
		this.setState({
			mon: value,
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
		console.log(this.state.userInfo);
		http({
			method: 'get',
			url: 'personal/queryMessage?messageType=4',
		}).then((res) => {
			console.log(res);
			this.setState({
				info: res.data.data[0].titleContent,
			});
		});
	}
	render() {
		return (
			<Provider>
				<View style={{flex: 1}}>
					<ScrollView>
						{/* <LinearGradient
						start={{x: 0, y: 0}}
						end={{x: 0, y: 1}}
						style={{height: pxSize(80)}}
						colors={['#4CDBC5', '#4edac4']}>
						<View style={styles.topHeader}>
							<Image
								style={styles.headerImg}
								source={require('../../assets/image/header.png')}
							/>
							<View style={styles.headerName}>
								<Text
									style={{
										fontSize: 20,
										fontWeight: 'bold',
										color: '#fff',
										height: pxSize(28),
										alignItems: 'center',
										marginTop: pxSize(2),
									}}>
									我爱老虎油
								</Text>
								<Text style={{fontSize: 14, color: '#fff'}}>
									我的元宝：1200个
								</Text>
							</View>
						</View>
					</LinearGradient> */}
						<Text
							style={{
								backgroundColor: '#fff',
								paddingLeft: pxSize(15),
								paddingRight: pxSize(15),
								fontSize: 14,
								paddingTop: pxSize(15),
								paddingBottom: pxSize(15),
							}}>
							账户元宝
						</Text>
						<Text
							style={{
								backgroundColor: '#fff',
								paddingLeft: pxSize(15),
								paddingRight: pxSize(15),
								fontSize: 16,
								fontWeight: 'bold',
								paddingBottom: pxSize(15),
								textAlignVertical: 'center',
								flex: 1,
							}}>
							{this.state.userInfo.accountMoney / 100}
						</Text>
						<View style={styles.payList}>
							<Text
								style={{
									color: '#3A3A3A',
									fontSize: 14,
									fontWeight: 'bold',
									paddingTop: pxSize(10),
									paddingBottom: pxSize(10),
									paddingLeft: pxSize(15),
									borderBottomWidth: 0,
									borderBottomColor: '#F5F5F5',
								}}>
								推荐支付
							</Text>
							<List style={{marginTop: 12, marginBottom: 12}}>
								<RadioItem
									checked={this.state.selectYh === 2}
									onChange={(event) => {
										if (event.target.checked) {
											this.setState({
												selectYh: 2,
											});
										}
									}}>
									<AntDesign
										name="bank"
										size={28}
										color="#4CDBC5"
									/>
									<View>
										<Text
											style={{
												color: '#3A3A3A',
												fontSize: 18,
												fontWeight: 'bold',
												marginLeft: pxSize(5),
											}}>
											银联支付
										</Text>
									</View>
								</RadioItem>
								<RadioItem
									checked={this.state.selectYh === 1}
									onChange={(event) => {
										if (event.target.checked) {
											this.setState({
												selectYh: 1,
											});
										}
									}}>
									<AntDesign
										name="alipay-circle"
										size={28}
										color="#1678ff"
									/>
									<View>
										<Text
											style={{
												color: '#3A3A3A',
												fontSize: 18,
												fontWeight: 'bold',
												marginLeft: pxSize(5),
												marginTop: 5,
											}}>
											支付宝支付
										</Text>
									</View>
								</RadioItem>
							</List>
							{/* <View style={styles.list}>
							<AntDesign name="bank" size={25} color="#4CDBC5" />
							<Text
								style={{
									color: '#3A3A3A',
									fontSize: 18,
									fontWeight: 'bold',
									marginLeft: pxSize(5),
								}}>
								银行转账
							</Text>
							<Switch
								trackColor={{false: '#767577', true: '#81b0ff'}}
								thumbColor={
									this.state.isEnabled ? '#f5dd4b' : '#f4f3f4'
								}
								ios_backgroundColor="#3e3e3e"
								onValueChange={this.toggleSwitch}
								value={this.state.isEnabled}
								style={{marginLeft: pxSize(180)}}
							/>
						</View>
						<View style={styles.list}>
							<AntDesign
								name="alipay-circle"
								size={25}
								color="#1678ff"
							/>
							<Text
								style={{
									color: '#3A3A3A',
									fontSize: 18,
									fontWeight: 'bold',
									marginLeft: pxSize(5),
								}}>
								银行转账
							</Text>
							<Switch
								trackColor={{false: '#767577', true: '#81b0ff'}}
								thumbColor={
									this.state.isEnabled ? '#f5dd4b' : '#f4f3f4'
								}
								ios_backgroundColor="#3e3e3e"
								onValueChange={this.toggleSwitch}
								value={this.state.isEnabled}
								style={{marginLeft: pxSize(180)}}
							/>
						</View> */}
						</View>
						<View
							style={{
								paddingTop: pxSize(15),
								paddingBottom: pxSize(15),
								backgroundColor: '#fff',
								borderRadius: 3,
								marginTop: 5,
								marginLeft: pxSize(15),
								marginRight: pxSize(15),
							}}>
							<Text
								style={{
									color: '#3A3A3A',
									fontSize: 14,
									fontWeight: 'bold',
									paddingTop: pxSize(10),
									paddingBottom: pxSize(10),
									paddingLeft: pxSize(15),
									borderBottomWidth: 1,
									borderBottomColor: '#F5F5F5',
								}}>
								充值金额
							</Text>

							<TextInput
								style={{
									height: pxSize(28),
									borderColor: '#F2F3F5',
									borderWidth: 0,
									marginLeft: pxSize(1),
									marginRight: pxSize(1),
									padding: 0,
									fontSize: 16,
									width: '100%',
									paddingLeft: pxSize(10),
								}}
								value={this.state.mon}
								onChangeText={(value) =>
									this.onChangeMon(value)
								}
								placeholder="请输入充值金额"
							/>
						</View>
						<View
							style={{
								paddingTop: pxSize(15),
								paddingBottom: pxSize(15),
								backgroundColor: '#fff',
								borderRadius: 3,
								marginTop: 5,
								marginLeft: pxSize(15),
								marginRight: pxSize(15),
								marginBottom: pxSize(20),
							}}>
							<Text
								style={{paddingLeft: pxSize(10), fontSize: 14}}>
								<HTMLView value={this.state.info} />
							</Text>
						</View>
					</ScrollView>
					<TouchableHighlight onPress={() => this.GotoPay()}>
						<View style={styles.footerBox}>
							<Text style={styles.footerBtn}>立即充值</Text>
						</View>
					</TouchableHighlight>
				</View>
			</Provider>
		);
	}
}
const styles = StyleSheet.create({
	topHeader: {
		flexDirection: 'row',
		marginLeft: pxSize(15),
		marginRight: pxSize(15),
	},
	headerImg: {
		width: pxSize(52),
		height: pxSize(52),
		marginLeft: pxSize(20),
	},
	headerName: {
		marginLeft: pxSize(10),
	},
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
	payList: {
		marginLeft: pxSize(15),
		marginRight: pxSize(15),
		backgroundColor: '#fff',
		paddingTop: pxSize(10),
		paddingBottom: pxSize(10),
		marginTop: pxSize(5),
		borderRadius: 5,
	},
	list: {
		paddingLeft: pxSize(15),
		flexDirection: 'row',
		paddingTop: pxSize(10),
		paddingBottom: pxSize(10),
	},
});
