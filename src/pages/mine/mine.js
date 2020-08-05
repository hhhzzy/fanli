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
		this.state = {};
	}
	// 进入订单列表
	GotoOrderList = () => {
		this.props.navigation.navigate('OrderListScreen');
	};
	// 进入明细
	GotoMoneyList = () => {
		this.props.navigation.navigate('MoneyListScreen');
	};
	// 在线充值
	GotoRecharge = () => {
		this.props.navigation.navigate('RechargeScreen');
	};
	// 地址
	GotoAddress = () => {
		this.props.navigation.navigate('AddressScreen');
	};
	// 消息中心
	GotoMessage = () => {
		this.props.navigation.navigate('MessageScreen');
	};
	// 推荐好友
	GotoTj = () => {
		this.props.navigation.navigate('GameScreen');
	};
	// 我的推广
	GotoPromote = () => {
		// this.props.navigation.navigate('PromoteScreen');
		http({
			method: 'get',
			url: 'http://hoom.xin:3005/web/article/findArticle',
		})
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err, '888');
			});
	};
	// 团队佣金
	GotoCommission = () => {
		this.props.navigation.navigate('CommissionScreen');
	};
	// 设置中心
	GotoSetting = () => {
		this.props.navigation.navigate('SettingScreen');
	};
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
											我爱老虎油
										</Text>
										<Text
											style={{
												fontSize: 12,
												color: '#fff',
											}}>
											我的元宝：1200个
										</Text>
									</View>
									<Icon
										style={{marginLeft: 'auto'}}
										name="mail-sharp"
										size={20}
										color="#fff"
									/>
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
						<View style={styles.listView}>
							<Image
								style={styles.topListImg}
								source={require('../../assets/image/top_list_2.png')}
							/>
							<Text style={{marginTop: 8}}>提现</Text>
						</View>
						<TouchableHighlight
							style={{
								justifyContent: 'center',
								alignItems: 'center',
							}}
							onPress={() => this.GotoMoneyList()}>
							<View style={styles.listView}>
								<Image
									style={styles.topListImg}
									source={require('../../assets/image/top_list_3.png')}
								/>
								<Text style={{marginTop: 8}}>明细</Text>
							</View>
						</TouchableHighlight>
						<View style={styles.listView}>
							<Image
								style={styles.topListImg}
								source={require('../../assets/image/top_list_4.png')}
							/>
							<Text style={{marginTop: 8}}>我的钱包</Text>
						</View>
					</View>
				</View>
				<ScrollView style={{flex: 1}}>
					<View style={{marginBottom: pxSize(8)}}>
						<View
							style={[styles.otherBox, {marginTop: pxSize(60)}]}>
							<Text style={styles.otherTitle}>我的订单</Text>
							<View style={styles.otherList}>
								<TouchableHighlight
									onPress={() => this.GotoOrderList()}>
									<View style={styles.list}>
										<Image
											style={styles.listImg}
											source={require('../../assets/image/1_1.png')}
										/>
										<Text style={{fontSize: 11}}>
											已付款
										</Text>
									</View>
								</TouchableHighlight>
								<View style={styles.list}>
									<Image
										style={styles.listImg}
										source={require('../../assets/image/1_2.png')}
									/>
									<Text style={{fontSize: 11}}>已完成</Text>
								</View>
								<View style={styles.list}>
									<Image
										style={styles.listImg}
										source={require('../../assets/image/1_3.png')}
									/>
									<Text style={{fontSize: 11}}>返利单</Text>
								</View>
							</View>
						</View>
						<View style={styles.otherBox}>
							<Text style={styles.otherTitle}>推广中心</Text>
							<View style={styles.otherList}>
								<TouchableHighlight
									onPress={() => this.GotoPromote()}>
									<View style={styles.list}>
										<Image
											style={styles.listImg}
											source={require('../../assets/image/2_1.png')}
										/>
										<Text style={{fontSize: 11}}>
											我的推广
										</Text>
									</View>
								</TouchableHighlight>
								<TouchableHighlight
									onPress={() => this.GotoCommission()}>
									<View style={styles.list}>
										<Image
											style={styles.listImg}
											source={require('../../assets/image/2_2.png')}
										/>
										<Text style={{fontSize: 11}}>
											团队佣金
										</Text>
									</View>
								</TouchableHighlight>
								<View style={styles.list}>
									<Image
										style={styles.listImg}
										source={require('../../assets/image/2_3.png')}
									/>
									<Text style={{fontSize: 11}}>佣金政策</Text>
								</View>
								<TouchableHighlight
									onPress={() => this.GotoTj()}>
									<View style={styles.list}>
										<Image
											style={styles.listImg}
											source={require('../../assets/image/2_4.png')}
										/>
										<Text style={{fontSize: 11}}>
											邀请好友
										</Text>
									</View>
								</TouchableHighlight>
							</View>
						</View>
						<View style={[styles.otherBox]}>
							<Text style={styles.otherTitle}>个人面板</Text>
							<View style={styles.otherList}>
								<TouchableHighlight
									onPress={() => this.GotoSetting()}>
									<View style={styles.list}>
										<Image
											style={styles.listImg}
											source={require('../../assets/image/3_1.png')}
										/>
										<Text style={{fontSize: 11}}>
											账号设置
										</Text>
									</View>
								</TouchableHighlight>
								<TouchableHighlight
									onPress={() => this.GotoMessage()}>
									<View style={styles.list}>
										<Image
											style={styles.listImg}
											source={require('../../assets/image/3_2.png')}
										/>
										<Text style={{fontSize: 11}}>
											消息中心
										</Text>
									</View>
								</TouchableHighlight>
								<TouchableHighlight
									onPress={() => this.GotoAddress()}>
									<View style={styles.list}>
										<Image
											style={styles.listImg}
											source={require('../../assets/image/3_3.png')}
										/>
										<Text style={{fontSize: 11}}>
											收货地址
										</Text>
									</View>
								</TouchableHighlight>
								<View style={styles.list}>
									<Image
										style={styles.listImg}
										source={require('../../assets/image/3_4.png')}
									/>
									<Text style={{fontSize: 11}}>帮助中心</Text>
								</View>
							</View>
						</View>
					</View>
				</ScrollView>
			</>
		);
	}
}
const styles = StyleSheet.create({
	top: {
		height: pxSize(140),
	},
	topBox: {
		height: pxSize(140),
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
		marginTop: pxSize(80),
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
		width: pxSize(44),
		marginLeft: pxSize(15),
		marginRight: pxSize(30),
		marginTop: pxSize(20),
	},
	listImg: {
		width: pxSize(20),
		height: pxSize(20),
		marginBottom: pxSize(10),
	},
});
