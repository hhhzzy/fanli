import {
	Text,
	View,
	StyleSheet,
	ImageBackground,
	Image,
	SafeAreaView,
	ScrollView,
	TouchableHighlight,
	Alert,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';
import pxSize from '../../assets/js/pxSize';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
Icon.loadFont();
import http from '../../assets/js/http';
export default class Mine extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userInfo: {},
			unit: '',
		};
	}

	GetUser = async () => {
		let usr = JSON.parse(await AsyncStorage.getItem('userInfo'));
		http({
			method: 'get',
			url: 'personal/getMemberInfo?memberId=' + usr.id,
		}).then((res) => {
			console.log(res);
			this.setState({
				userInfo: res.data.data,
			});
		});
	};
	// 银行流水
	GotoPayMoney = () => {
		this.props.navigation.navigate('MoneyListScreen', {type: 0});
	};
	GotoPayCz = () => {
		this.props.navigation.navigate('MoneyListScreen', {type: 1});
	};
	GotoPayTx = () => {
		this.props.navigation.navigate('MoneyListScreen', {type: 2});
	};

	// 在线充值
	GotoRecharge = () => {
		this.props.navigation.navigate('RechargeScreen');
	};
	GotoTx = () => {
		this.props.navigation.navigate('TxScreen');
	};
	GotoBank = () => {
		this.props.navigation.navigate('BankCardScreen');
	};
	componentDidMount() {
		// 获取用户数据
		this.GetUser();
		http({
			method: 'get',
			url: '/index/getLanguageConfig',
		}).then((res) => {
			this.setState({
				unit: res.data.data.aroundName,
			});
		});
	}
	render() {
		return (
			<>
				<View style={styles.top}>
					<View style={{height: pxSize(140)}}>
						<LinearGradient
							start={{x: 0, y: 0}}
							end={{x: 0, y: 1}}
							style={{flex: 1}}
							colors={['#4CDBC5', '#4edac4']}>
							<View style={styles.topBox}>
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
											{this.state.userInfo.nickName
												? this.state.userInfo.nickName
												: '未登录'}
										</Text>
										<Text
											style={{
												fontSize: 12,
												color: '#fff',
											}}>
											我的{this.state.unit}：
											{this.state.userInfo.accountMoney
												? this.state.userInfo
													.accountMoney / 100
												: 0}
										</Text>
									</View>
								</View>
								<View
									style={{
										flexDirection: 'row',
										justifyContent: 'space-around',
									}}>
									<View>
										<Text style={{color: '#fff'}}>
											累计充值
										</Text>
										<Text
											style={{
												color: '#fff',
												fontSize: 16,
												fontWeight: 'bold',
											}}>
											{this.state.userInfo.rechargeMoney
												? this.state.userInfo
													.rechargeMoney / 100
												: '0'}
										</Text>
									</View>
									<View>
										<Text style={{color: '#fff'}}>
											累计消费
										</Text>
										<Text
											style={{
												color: '#fff',
												fontSize: 16,
												fontWeight: 'bold',
											}}>
											{this.state.userInfo.consumeMoney
												? this.state.userInfo
														.consumeMoney / 100
												: '0'}
										</Text>
									</View>
								</View>
							</View>
						</LinearGradient>
					</View>
					<View style={styles.topList}>
						<TouchableHighlight
							style={{
								justifyContent: 'center',
								alignItems: 'center',
							}}
							onPress={() => this.GotoRecharge()}>
							<View style={styles.listView}>
								<Image
									style={styles.topListImg}
									source={require('../../assets/image/top_list_1.png')}
								/>
								<Text
									style={{
										marginTop: 8,
										justifyContent: 'space-around',
									}}>
									充值
								</Text>
							</View>
						</TouchableHighlight>
						<TouchableHighlight
							style={{
								justifyContent: 'center',
								alignItems: 'center',
							}}
							onPress={() => this.GotoTx()}>
							<View style={styles.listView}>
								<Image
									style={styles.topListImg}
									source={require('../../assets/image/top_list_2.png')}
								/>
								<Text style={{marginTop: 8}}>提现</Text>
							</View>
						</TouchableHighlight>
						<TouchableHighlight
							style={{
								justifyContent: 'center',
								alignItems: 'center',
							}}
							onPress={() => this.GotoBank()}>
							<View style={styles.listView}>
								<Image
									style={styles.topListImg}
									source={require('../../assets/image/top_list_3.png')}
								/>
								<Text style={{marginTop: 8}}>银行卡</Text>
							</View>
						</TouchableHighlight>
					</View>
				</View>
				<View style={[styles.listBox, {marginTop: pxSize(20)}]}>
					<Text>账户流水</Text>
					<TouchableHighlight onPress={() => this.GotoPayMoney()}>
						<Icon name="chevron-forward" size={20} color="#000" />
					</TouchableHighlight>
				</View>
				<View style={styles.listBox}>
					<Text>充值记录</Text>
					<TouchableHighlight onPress={() => this.GotoPayCz()}>
						<Icon name="chevron-forward" size={20} color="#000" />
					</TouchableHighlight>
				</View>
				<View style={styles.listBox}>
					<Text>提现记录</Text>
					<TouchableHighlight onPress={() => this.GotoPayTx()}>
						<Icon name="chevron-forward" size={20} color="#000" />
					</TouchableHighlight>
				</View>
			</>
		);
	}
}
const styles = StyleSheet.create({
	top: {
		height: pxSize(200),
	},
	topBox: {
		height: pxSize(200),
		paddingLeft: pxSize(15),
		paddingRight: pxSize(15),
		paddingTop: pxSize(5),
	},
	topHeader: {
		flexDirection: 'row',
	},
	headerImg: {
		width: pxSize(52),
		height: pxSize(52),
	},
	headerName: {
		marginLeft: pxSize(10),
	},
	topList: {
		marginTop: pxSize(100),
		flexDirection: 'row',
		flexWrap: 'nowrap',
		justifyContent: 'space-around',
		width: pxSize(345),
		height: pxSize(108),
		backgroundColor: '#fff',
		borderRadius: 10,
		zIndex: 99,
		position: 'absolute',
		marginLeft: pxSize(15),
	},
	topListImg: {
		width: pxSize(44),
		height: pxSize(44),
	},
	listView: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	otherBox: {
		marginTop: pxSize(10),
		width: pxSize(345),
		height: pxSize(118),
		backgroundColor: '#fff',
		borderRadius: pxSize(5),
		marginLeft: pxSize(15),
	},
	otherTitle: {
		fontSize: 14,
		color: '#333',
		fontWeight: 'bold',
		height: pxSize(40),
		paddingTop: pxSize(10),
		paddingBottom: pxSize(10),
		borderBottomWidth: 1,
		borderStyle: 'solid',
		borderBottomColor: '#f9f9f9',
		paddingLeft: pxSize(15),
	},
	otherList: {
		flexDirection: 'row',
	},
	list: {
		justifyContent: 'center',
		alignItems: 'center',
		width: pxSize(55),
		marginLeft: pxSize(15),
		marginRight: pxSize(20),
		marginTop: pxSize(20),
	},
	listImg: {
		width: pxSize(20),
		height: pxSize(20),
		marginBottom: pxSize(10),
	},
	listBox: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginLeft: pxSize(15),
		marginRight: pxSize(15),
		paddingLeft: pxSize(15),
		paddingRight: pxSize(15),
		alignItems: 'center',
		paddingTop: pxSize(10),
		paddingBottom: pxSize(10),
		borderBottomWidth: 1,
		borderBottomColor: '#f5f5f5',
		backgroundColor: '#fff',
	},
});
