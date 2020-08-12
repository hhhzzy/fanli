import {
	Text,
	SafeAreaView,
	ScrollView,
	Image,
	View,
	StyleSheet,
	TouchableHighlight,
	TextInput,
	ImageBackground,
	Alert,
} from 'react-native';
import React from 'react';
import pxSize from '../../assets/js/pxSize';
import {
	Button,
	Modal,
	Provider,
	List,
	Radio,
	WhiteSpace,
} from '@ant-design/react-native';

import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/Ionicons';
import http from '../../assets/js/http';
import HTMLView from 'react-native-htmlview';
import url from '../../assets/js/url';
import AsyncStorage from '@react-native-community/async-storage';
Icon.loadFont();
const RadioItem = Radio.RadioItem;
export default class GoodsDtail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			popupVisible: false,
			id: this.props.route.params.id,
			DataInfo: {},
			bannerList: [],
			number: '1',
			payVisible: false,
			bannerVisible: false,
			addressVisible: false,
			addressList: [],
			selectAddress: '',
			totalMoney: 0,
			unit: '个',
		};
		console.log(this.props.route.params.id, '888');
	}
	NowBuy = () => {
		this.setState({popupVisible: true});
	};
	onClose2 = () => {
		this.setState({popupVisible: false});
	};
	// 获取数据详情
	GetInfo = () => {
		http({
			method: 'get',
			url: 'index/getProductDetail?productId=' + this.state.id,
		}).then((res) => {
			console.log(res);
			res.data.data.imgUrl =
				url +
				'service/upload/getImg?imgUrl=' +
				encodeURIComponent(res.data.data.imgUrl);
			res.data.data.productDetail = res.data.data.productDetail.replace(
				/[\r\n\s]/g,
				'',
			);
			console.log(res.data.data.productDetail);
			this.setState({
				DataInfo: res.data.data,
				totalMoney: res.data.data.productMoney / 100,
			});
			res.data.data.productImgUrl.split('|').forEach((item) => {
				item =
					url +
					'service/upload/getImg?imgUrl=' +
					encodeURIComponent(item);
				this.setState({
					bannerList: [...this.state.bannerList, item],
				});
				setTimeout(() => {
					this.setState({
						bannerVisible: true,
					});
				}, 10);
			});
		});
	};
	onChangeNum = (value) => {
		this.setState({
			number: value,
			totalMoney: (value * this.state.DataInfo.productMoney) / 100,
		});
	};
	// 立即购买
	BuyNow = () => {
		this.GetAddress();
		if (!this.state.number || this.state.number == 0) {
			Alert.alert('提示', '请输入购买数量', [
				{text: '确定', onPress: () => console.log('OK Pressed')},
			]);
			return;
		}
		AsyncStorage.getItem('userInfo', (err, res) => {
			if (err) {
				return;
			}
			let userInfo = JSON.parse(res);
			console.log(userInfo);
			this.setState({
				addressVisible: true,
			});
		});
	};
	ColseVis = () => {
		this.setState({
			payVisible: false,
		});
	};
	ColseAddress = () => {
		this.setState({
			addressVisible: false,
		});
	};
	GotoAddress = () => {
		this.setState({
			addressVisible: false,
		});
		this.props.navigation.navigate('AddressScreen');
	};
	// 获取收货地址
	GetAddress = async () => {
		let userInfo = JSON.parse(await AsyncStorage.getItem('userInfo'));
		http({
			method: 'get',
			url: 'personal/getMemberReceiveAddress?memberId=' + userInfo.id,
		}).then((res) => {
			this.setState({
				addressList: res.data.data,
			});
			if (res.data.data && res.data.data.length) {
				this.setState({
					selectAddress: res.data.data[0].id,
				});
			}
			console.log(this.state.addressList, 999);
		});
	};
	BuyPwd = async () => {
		console.log(this.state.addressList[0].receiveAddress);
		if (
			!this.state.selectAddress ||
			!this.state.addressList[0].receiveAddress
		) {
			Alert.alert('提示', '请添加并选择用户地址', [
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
						'personal/buyProject?productId=' +
						this.state.id +
						'&number=' +
						this.state.number +
						'&memberId=' +
						this.state.userInfo.id +
						'&tranPassword=' +
						password,
				}).then((res) => {
					this.setState({
						addressVisible: false,
					});
					if (res.data.code === 1) {
						Alert.alert('提示', res.data.msg, [
							{
								text: '确定',
								onPress: () => {
									this.setState({
										popupVisible: false,
									});
								},
							},
						]);
					}
				});
			},
			'secure-text',
		);
	};
	AddNum = () => {
		this.setState({
			number: String(Number(this.state.number) + 1),
			totalMoney:
				(String(Number(this.state.number) + 1) *
					this.state.DataInfo.productMoney) /
				100,
		});
	};
	DeNum = () => {
		if (this.state.number <= 0) {
			return;
		}
		this.setState({
			number: String(Number(this.state.number) - 1),
			totalMoney:
				(String(Number(this.state.number) - 1) *
					this.state.DataInfo.productMoney) /
				100,
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
			});
		});
	};
	componentDidMount() {
		// 获取用户数据
		this.GetUser();
		// 获取数据详情
		this.GetInfo();
		// 获取用户收货地址
		this.GetAddress();
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
			<Provider>
				<SafeAreaView style={{flex: 1}}>
					<ScrollView>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'center',
								height: pxSize(370),
								backgroundColor: '#fff',
							}}>
							<View
								style={{
									height: pxSize(370),
								}}>
								{this.state.bannerVisible ? (
									<Swiper
										height={pxSize(370)} // 指定高度
										loop={true} // 是否开启循环
										showsButtons={false} // 设置控制按钮(左右两侧的箭头)是否可见
										index={0}
										autoplay={true} // 是否自动跳转
										horizontal={true} // 是否水平滚动
									>
										{this.state.bannerList.map((item) => (
											<View
												style={[
													styles.containerHorizontal,
												]}
												key={item}>
												{/* <Image
												source={{uri: item}}
												style={{
													width: '100%',
													height: pxSize(370),
												}}
											/> */}
												<ImageBackground
													source={{uri: item}}
													style={{
														width: '100%',
														height: pxSize(370),
													}}
												/>
											</View>
										))}
										{/* <View>
										<Text>222</Text>
									</View>
									<View>
										<Text>333</Text>
									</View> */}
									</Swiper>
								) : (
									<Text />
								)}
							</View>
						</View>
						<View style={styles.tips}>
							<Text
								style={{
									color: '#F12210',
									fontSize: 24,
									fontWeight: 'bold',
								}}>
								{this.state.DataInfo.productMoney
									? this.state.DataInfo.productMoney / 100
									: ''}
							</Text>
							<Text
								style={{
									color: '#F12210',
									fontSize: 16,
									fontWeight: 'bold',
								}}>
								({this.state.unit})
							</Text>
						</View>
						<View style={styles.infoBox}>
							<Text
								style={{
									fontSize: 18,
									color: '#000000',
									fontWeight: 'bold',
									paddingTop: pxSize(12),
									paddingBottom: pxSize(5),
								}}>
								产品介绍
							</Text>
							<View
								style={{
									fontSize: 14,
								}}>
								<HTMLView
									value={
										this.state.DataInfo.productDetail
											? this.state.DataInfo.productDetail
											: ''
									}
								/>
								{/* {this.state.DataInfo.} */}
							</View>
						</View>
					</ScrollView>

					<TouchableHighlight onPress={() => this.NowBuy()}>
						<View style={styles.footerBox}>
							<Text style={styles.footerBtn}>立即抢购</Text>
						</View>
					</TouchableHighlight>
					<Modal
						title="弹窗"
						popup
						closable
						maskClosable
						visible={this.state.popupVisible}
						animationType="slide-up"
						onClose={this.onClose2}>
						<View style={styles.popupBox}>
							<View>
								<Image
									style={{
										width: pxSize(70),
										height: pxSize(66),
									}}
									source={{uri: this.state.DataInfo.imgUrl}}
								/>
							</View>
							<View style={{justifyContent: 'space-around'}}>
								{/* <Icon
									name="close-circle-sharp"
									size={30}
									color="#878787"
								/> */}
								<Text
									style={{
										fontSize: 16,
										fontWeight: 'bold',
										color: '#F12210',
									}}>
									{this.state.DataInfo.productMoney / 100}
								</Text>
							</View>
						</View>
						<View style={styles.numBox}>
							<View>
								<Text
									style={{
										fontWeight: 'bold',
										color: '#000000',
										fontSize: 18,
									}}>
									数量
								</Text>
								<View style={styles.nums}>
									<TouchableHighlight
										onPress={() => this.DeNum()}>
										<Text style={styles.numIcon}>
											<Icon
												name="remove"
												color="#979797"
												size={25}
											/>
										</Text>
									</TouchableHighlight>
									<TextInput
										style={{
											height: pxSize(28),
											borderColor: '#F2F3F5',
											backgroundColor: '#F2F3F5',
											borderWidth: 0,
											marginLeft: pxSize(1),
											marginRight: pxSize(1),
											padding: 0,
											fontSize: 16,
											width: pxSize(70),
											textAlign: 'center',
										}}
										value={this.state.number}
										onChangeText={(value) =>
											this.onChangeNum(value)
										}
									/>
									<TouchableHighlight
										onPress={() => this.AddNum()}>
										<Text style={styles.numIcon}>
											<Icon
												name="add"
												color="#979797"
												size={25}
											/>
										</Text>
									</TouchableHighlight>
								</View>
							</View>
							<View>
								<Text>{this.state.unit}</Text>
								<Text>{this.state.totalMoney}</Text>
							</View>
						</View>
						<TouchableHighlight onPress={() => this.BuyNow()}>
							<View style={styles.footerBox}>
								<Text style={styles.footerBtn}>立即抢购</Text>
							</View>
						</TouchableHighlight>
					</Modal>
					{/* 收货地址 */}
					<Modal
						animationType="slide"
						transparent={true}
						visible={this.state.addressVisible}
						onRequestClose={() => {}}>
						<Text
							style={{
								fontSize: 16,
								fontWeight: 'bold',
								marginBottom: 5,
							}}>
							请选择收货地址
						</Text>

						<View>
							<List style={{marginTop: 12, marginBottom: 12}}>
								{this.state.addressList.map((item) =>
									item.receiveName != '未设置' &&
									item.receiveName != '' ? (
											<RadioItem
												key={item.id}
												checked={
													this.state.selectAddress ===
												item.id
												}
												onChange={(event) => {
													if (event.target.checked) {
														this.setState({
															selectAddress: item.id,
														});
													}
												}}>
												<Text style={{fontSize: 16}}>
													{item.receiveAddress}
												</Text>
											</RadioItem>
										) : (
											<TouchableHighlight
												onPress={() => this.GotoAddress()}>
												<Text
													style={{
														marginBottom: pxSize(5),
														marginTop: pxSize(5),
													}}>
												请点击添加地址
												</Text>
											</TouchableHighlight>
										),
								)}
							</List>
						</View>

						<View
							style={{
								flex: 1,
								flexDirection: 'row',
								marginBottom: 40,
							}}>
							<Button
								size="small"
								style={{
									fontSize: 16,
									marginRight: 10,
								}}
								onPress={() => this.ColseAddress()}>
								取消
							</Button>

							<Button
								type="primary"
								size="small"
								style={{
									fontSize: 16,
									marginRight: 10,
								}}
								onPress={() => this.BuyPwd()}>
								确定
							</Button>
						</View>
					</Modal>
				</SafeAreaView>
			</Provider>
		);
	}
}
const styles = StyleSheet.create({
	containerHorizontal: {
		height: pxSize(370),
	},
	tips: {
		height: pxSize(65),
		backgroundColor: '#fff',
		flexDirection: 'row',
		alignItems: 'center',
		paddingLeft: pxSize(15),
		color: '#F12210',
		borderBottomLeftRadius: pxSize(5),
		borderBottomRightRadius: pxSize(5),
		flex: 1,
	},
	infoBox: {
		backgroundColor: '#fff',
		marginTop: pxSize(10),
		paddingLeft: pxSize(15),
		paddingRight: pxSize(15),
		paddingBottom: pxSize(20),
		marginBottom: pxSize(10),
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
	popupBox: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingBottom: pxSize(16),
		paddingTop: pxSize(22),
		paddingLeft: pxSize(15),
		paddingRight: pxSize(15),
		borderBottomColor: '#F5F5F5',
		borderBottomWidth: 1,
		borderStyle: 'solid',
	},
	numBox: {
		paddingLeft: pxSize(15),
		paddingRight: pxSize(15),
		paddingBottom: pxSize(25),
		paddingTop: pxSize(10),
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	nums: {
		flexDirection: 'row',
		flexWrap: 'nowrap',
	},
	numIcon: {
		width: pxSize(28),
		height: pxSize(28),
		backgroundColor: '#F2F3F5',
		color: '#979797',
		justifyContent: 'center',
		textAlign: 'center',
	},
});
