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
import ImagePicker from 'react-native-image-picker';
import url from '../../assets/js/url';
Icon.loadFont();
import http from '../../assets/js/http';

export default class Wallet extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userInfo: {},
			unit: '',
			avatarSource: {},
		};
	}
	// 选择图片或相册
	onClickChoosePicture = () => {
		const options = {
			title: '',
			cancelButtonTitle: '取消',
			takePhotoButtonTitle: '拍照',
			chooseFromLibraryButtonTitle: '选择照片',
			scameraType: 'back',
			mediaType: 'photo',
			videoQuality: 'high',
			durationLimit: 10,
			maxWidth: 600,
			maxHeight: 600,
			aspectX: 2,
			aspectY: 1,
			quality: 0.8,
			angle: 0,
			allowsEditing: false,
			noData: false,
			storageOptions: {
				skipBackup: true,
				path: 'images',
			},
		};

		ImagePicker.showImagePicker(options, (response) => {
			console.log('Response = ', response);

			if (response.didCancel) {
				console.log('User cancelled image picker');
			} else if (response.error) {
				console.log('ImagePicker Error: ', response.error);
			} else if (response.customButton) {
				console.log(
					'User tapped custom button: ',
					response.customButton,
				);
			} else {
				let base64 = 'data:image/jpeg;base64,' + response.data;
				// this.setState({
				// 	base64: 'data:image/jpeg;base64,' + response.data,
				// });
				const source = {
					uri: response.uri,
					name: response.fileName,
					type: response.type,
				};
				this.setState({
					avatarSource: source,
				});
				http({
					method: 'post',
					url: 'service/upload/uploadImageBase64',
					data: {
						imgBase64: response.data,
						suffix: '.' + response.type.split('/')[1],
					},
				}).then((res) => {
					console.log(res);
					if (res.data.code == 1) {
						console.log(
							res.data.data,
							url +
								'service/upload/getImg?imgUrl=' +
								encodeURIComponent(res.data.data),
						);
						this.setState({
							base64:
								url +
								'service/upload/getImg?imgUrl=' +
								encodeURIComponent(res.data.data),
						});
						http({
							method: 'get',
							url:
								'personal/updateMemberImgUrl?memberId=' +
								this.state.userInfo.id +
								'&imgUrl=' +
								res.data.data,
						}).then((data) => {
							console.log(data);
							if (data.data.code == 1) {
								Alert.alert('提示', '上传成功', [
									{
										text: '确定',
										onPress: () => {
											this.GetUser();
										},
									},
								]);
							}
						});
					}
				});
				// console.warn(this.state.avatarSource.uri);
			}
		});
	};

	// 进入订单列表
	GotoOrderList = (type, id) => {
		this.props.navigation.navigate('OrderListScreen', {type: type, id: id});
	};
	// 进入明细
	GotoMoneyList = () => {
		this.props.navigation.navigate('MoneyListScreen', {type: 0});
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
		this.props.navigation.navigate('InviteScreen');
	};
	// 我的推广
	GotoPromote = () => {
		this.props.navigation.navigate('PromoteScreen');
	};
	// 团队佣金
	GotoCommission = () => {
		this.props.navigation.navigate('CommissionScreen');
	};
	GotoYj = () => {
		this.props.navigation.navigate('YjScreen');
	};
	GotoTx = () => {
		this.props.navigation.navigate('TxScreen');
	};
	// 设置中心
	GotoSetting = () => {
		// AsyncStorage.removeItem('userToken');
		this.props.navigation.navigate('SettingScreen');
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
				base64: res.data.data.imgUrl
					? url +
					  'service/upload/getImg?imgUrl=' +
					  encodeURIComponent(res.data.data.imgUrl)
					: '',
			});
		});
	};
	// 帮助中心
	GotoHelp = () => {
		this.props.navigation.navigate('HelpScreen');
	};
	// 我的钱包
	GotoWallet = () => {
		this.props.navigation.navigate('WalletScreen');
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
									<TouchableHighlight
										onPress={() =>
											this.onClickChoosePicture()
										}>
										{!this.state.base64 ? (
											<Image
												style={styles.headerImg}
												source={require('../../assets/image/header.png')}
											/>
										) : (
											<>
												<Image
													style={[styles.headerImg]}
													source={{
														uri: this.state.base64,
													}}
												/>
											</>
										)}
									</TouchableHighlight>
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
									{/* <Icon
										style={{marginLeft: 'auto'}}
										name="mail-sharp"
										size={20}
										color="#fff"
									/> */}
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
							onPress={() => this.GotoMoneyList()}>
							<View style={styles.listView}>
								<Image
									style={styles.topListImg}
									source={require('../../assets/image/top_list_3.png')}
								/>
								<Text style={{marginTop: 8}}>明细</Text>
							</View>
						</TouchableHighlight>
						<TouchableHighlight
							style={{
								justifyContent: 'center',
								alignItems: 'center',
							}}
							onPress={() => this.GotoWallet()}>
							<View style={styles.listView}>
								<Image
									style={styles.topListImg}
									source={require('../../assets/image/top_list_4.png')}
								/>
								<Text style={{marginTop: 8}}>我的钱包</Text>
							</View>
						</TouchableHighlight>
					</View>
				</View>
				<ScrollView style={{flex: 1}}>
					<View style={{marginBottom: pxSize(8)}}>
						<View
							style={[styles.otherBox, {marginTop: pxSize(60)}]}>
							<Text style={styles.otherTitle}>我的订单</Text>
							<View style={styles.otherList}>
								<TouchableHighlight
									onPress={() =>
										this.GotoOrderList('已付款', 1)
									}>
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
								<TouchableHighlight
									onPress={() =>
										this.GotoOrderList('已完成', 3)
									}>
									<View style={styles.list}>
										<Image
											style={styles.listImg}
											source={require('../../assets/image/1_2.png')}
										/>
										<Text style={{fontSize: 11}}>
											已完成
										</Text>
									</View>
								</TouchableHighlight>
								<TouchableHighlight
									onPress={() =>
										this.GotoOrderList('返利订单', 2)
									}>
									<View style={styles.list}>
										<Image
											style={styles.listImg}
											source={require('../../assets/image/1_3.png')}
										/>
										<Text style={{fontSize: 11}}>
											返利单
										</Text>
									</View>
								</TouchableHighlight>
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
								<TouchableHighlight
									onPress={() => this.GotoYj()}>
									<View style={styles.list}>
										<Image
											style={styles.listImg}
											source={require('../../assets/image/2_3.png')}
										/>
										<Text style={{fontSize: 11}}>
											佣金政策
										</Text>
									</View>
								</TouchableHighlight>
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
								<TouchableHighlight
									onPress={() => this.GotoHelp()}>
									<View style={styles.list}>
										<Image
											style={styles.listImg}
											source={require('../../assets/image/3_4.png')}
										/>
										<Text style={{fontSize: 11}}>
											帮助中心
										</Text>
									</View>
								</TouchableHighlight>
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
		borderRadius: 200,
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
});
