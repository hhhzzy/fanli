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
import {
	Button,
	Modal,
	Provider,
	List,
	Radio,
	WhiteSpace,
} from '@ant-design/react-native';
import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';
import pxSize from '../../assets/js/pxSize';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import http from '../../assets/js/http';
import HTMLView from 'react-native-htmlview';
Icon.loadFont();
AntDesign.loadFont();
const RadioItem = Radio.RadioItem;
export default class Tx extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isEnabled: false,
			selectYh: '',
			userInfo: {},
			info: '',
		};
	}

	GotoOrderInfo = () => {
		this.props.navigation.navigate('OrderDetailScreen');
	};
	toggleSwitch = () => {
		this.setState({isEnabled: !this.isEnabled});
	};
	// 提现
	GotoTx = () => {
		console.log(this.state.mon, 'eeee');
		if (!this.state.mon) {
			Alert.alert('提示', '请输入提现金额', [
				{text: '确定', onPress: () => console.log('OK Pressed')},
			]);
			return;
		}
		if (!this.state.userInfo.bankAccountNumber) {
			Alert.alert('提示', '请选择银行卡号信息', [
				{text: '确定', onPress: () => console.log('OK Pressed')},
			]);
			return;
		}
		Modal.prompt(
			'输入支付密码',
			'',
			(password) => {
				console.log(password);
				if (!password) {
					Alert.alert('提示', '请输入支付密码', [
						{
							text: '确定',
							onPress: () => console.log('OK Pressed'),
						},
					]);
					return;
				}
				http({
					method: 'get',
					url:
						'personal/withdrawMoney?memberId=' +
						this.state.userInfo.id +
						'&money=' +
						this.state.mon * 100 +
						'&withdrawRemark=提现提现' +
						'&tranPassword=' +
						password,
				}).then((res) => {
					console.log(res);
					if (res.data.code === 1) {
						Alert.alert('提示', res.data.msg, [
							{
								text: '确定',
								onPress: () => console.log('OK Pressed'),
							},
						]);
					}
				});
			},
			'secure-text',
		);
	};
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
			});
		});
	};
	onChangeMon = (value) => {
		this.setState({
			mon: value,
		});
	};
	GotoBank = () => {
		this.props.navigation.navigate('BankCardScreen', {
			refresh: () => {
				this.GetUser();
			},
		});
	};
	async componentDidMount() {
		// 获取用户数据
		await this.GetUser();
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
							{this.state.userInfo.accountMoney
								? this.state.userInfo.accountMoney / 100
								: '0'}
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
								}}>
								请确定绑定银行卡可正常使用
							</Text>

							<List style={{marginTop: 12, marginBottom: 12}}>
								{this.state.userInfo.bankAccountNumber ? (
									<View>
										<RadioItem
											checked={
												this.state.selectYh ===
												this.state.userInfo
													.bankAccountNumber
											}
											onChange={(event) => {
												if (event.target.checked) {
													this.setState({
														selectYh: this.state
															.userInfo
															.bankAccountNumber,
													});
												}
											}}>
											<Text style={{fontSize: 16}}>
												{this.state.userInfo.bankName}：
											</Text>
											<Text>
												{
													this.state.userInfo
														.bankAccountNumber
												}
											</Text>
										</RadioItem>
									</View>
								) : (
									<TouchableHighlight
										onPress={() => this.GotoBank()}>
										<Text
											style={{
												marginTop: 5,
												marginBottom: 5,
												paddingLeft: 15,
												paddingRight: 15,
											}}>
											点击添加银行卡信息
										</Text>
									</TouchableHighlight>
								)}
							</List>
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
								提现金额
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
								placeholder="请输入提现金额"
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
					<TouchableHighlight onPress={() => this.GotoTx()}>
						<View style={styles.footerBox}>
							<Text style={styles.footerBtn}>立即提现</Text>
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
