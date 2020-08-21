import {
	Text,
	View,
	StyleSheet,
	ImageBackground,
	Image,
	SafeAreaView,
	ScrollView,
	TouchableHighlight,
} from 'react-native';
import React from 'react';
import pxSize from '../../assets/js/pxSize';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {Progress} from '@ant-design/react-native';
import AsyncStorage from '@react-native-community/async-storage';
import http from '../../assets/js/http';
import url from '../../assets/js/url';
export default class Rebate extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			bool: true,
			userInfo: {},
			list: [],
			selTab: 1,
		};
	}
	SwitchTab = (value) => {
		console.log(value);
		this.setState({
			selTab: value,
		});
		this.GetList(value);
	};
	GetUser = async () => {
		return new Promise(async (resolve) => {
			let userInfo = JSON.parse(await AsyncStorage.getItem('userInfo'));
			this.setState({
				userInfo: userInfo,
				selTab: 1,
			});
			resolve();
		});
	};
	GetList = (type = 1) => {
		http({
			method: 'get',
			url:
				'personal/getRebateList?offset=1&limit=1005&memberId=' +
				this.state.userInfo.id +
				'&type=' +
				type,
		}).then((res) => {
			if (res.data.rows && res.data.rows.length) {
				res.data.rows.map((item) => {
					item.imgUrl =
						url +
						'service/upload/getImg?imgUrl=' +
						encodeURIComponent(item.imgUrl);
					return item;
				});
			}
			console.log(res.data.rows, '9999999');
			this.setState({
				list: res.data.rows,
			});
			console.log(this.state.list);
		});
	};
	async componentDidMount() {
		// 获取用户数据
		await this.GetUser();
		// 获取用户数据
		this.GetList();
	}
	render() {
		return (
			<SafeAreaView>
				<View style={styles.navBox}>
					<TouchableHighlight onPress={() => this.SwitchTab(1)}>
						<Text
							style={[
								styles.navTxt,
								this.state.selTab == 1 ? styles.currentTxt : '',
							]}>
							聚宝中
						</Text>
					</TouchableHighlight>
					<TouchableHighlight onPress={() => this.SwitchTab(2)}>
						<Text
							style={[
								styles.navTxt,
								this.state.selTab == 2 ? styles.currentTxt : '',
							]}>
							已完成
						</Text>
					</TouchableHighlight>
				</View>
				<View style={styles.tip}>
					<Text style={{color: '#989898', fontSize: 15}}>
						待返订单
					</Text>
					<Text style={{color: '#989898', fontSize: 15}}>
						{this.state.list.length}个
					</Text>
				</View>
				<ScrollView>
					<View style={styles.listView}>
						<Text style={styles.listTitle}>返现列表</Text>

						{this.state.list.map((item) => (
							<View
								style={styles.listBox}
								key={item.productOrder}>
								<View>
									{item.imgUrl ? (
										<Image
											style={{
												width: pxSize(78),
												height: pxSize(78),
											}}
											source={{uri: item.imgUrl}}
										/>
									) : (
										<Image
											style={{
												width: pxSize(78),
												height: pxSize(78),
											}}
											source={require('../../assets/image/1.jpeg')}
										/>
									)}
									<Text style={styles.name}>
										{item.productName}
									</Text>
								</View>
								<View style={styles.infoBox}>
									<Text style={{marginBottom: pxSize(2)}}>
										商品价值: {item.productMoney / 100}元宝
									</Text>
									<Text style={{marginBottom: pxSize(2)}}>
										返现总价: {item.rebateTotalMoney / 100}
										元宝
									</Text>
									<Text style={{marginBottom: pxSize(2)}}>
										已返:
										{(item.rebateTotalMoney -
											item.rebateOverMoney) /
											100}
										元宝
									</Text>
									<Text style={{marginBottom: pxSize(2)}}>
										待返: {item.rebateOverMoney / 100}元宝
									</Text>
									<View
										style={{
											flexDirection: 'row',
											width: pxSize(300),
										}}>
										<Text>进度：</Text>
										<View
											style={{
												backgroundColor: 'red',
												height: 8,
												borderRadius: 3,
												width: pxSize(180),
												marginTop: pxSize(6),
											}}>
											<Progress
												percent={
													((item.rebateTotalNumber -
														item.rebateOverNumber) *
														100) /
													item.rebateTotalNumber
												}
												barStyle={{
													borderColor: '#4CDBC5',
													height: 8,
													backgroundColor: '#4CDBC5',
													borderRadius: 3,
												}}
											/>
										</View>
										<Text
											style={{
												marginLeft: pxSize(3),
												color: '#FF2C20',
												fontSize: 14,
											}}>
											{item.rebateTotalNumber -
												item.rebateOverNumber}
											/{item.rebateTotalNumber}
										</Text>
									</View>
								</View>
							</View>
						))}
					</View>
				</ScrollView>
			</SafeAreaView>
		);
	}
}
const styles = StyleSheet.create({
	navBox: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		height: pxSize(50),
		backgroundColor: '#fff',
	},
	navTxt: {
		textAlign: 'center',
		fontSize: 16,
		color: '#989898',
	},
	currentTxt: {
		color: '#F12210',
	},
	tip: {
		paddingLeft: pxSize(15),
		paddingRight: pxSize(15),
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: pxSize(50),
	},
	listView: {
		marginBottom: pxSize(100),
	},
	listTitle: {
		fontWeight: 'bold',
		color: '#222',
		fontSize: 16,
		backgroundColor: '#fff',
		paddingTop: pxSize(10),
		paddingBottom: pxSize(10),
		paddingLeft: pxSize(15),
		paddingRight: pxSize(15),
		borderBottomColor: '#f9f9f9',
		borderStyle: 'solid',
		borderBottomWidth: 1,
	},
	listBox: {
		paddingLeft: pxSize(15),
		paddingRight: pxSize(15),
		backgroundColor: '#fff',
		flexDirection: 'row',
		paddingTop: pxSize(15),
		paddingBottom: pxSize(15),
		marginBottom: pxSize(8),
	},
	name: {
		fontSize: 13,
		color: '#222222',
		marginTop: pxSize(6),
		textAlign: 'center',
		width: pxSize(80),
	},
	infoBox: {
		marginLeft: pxSize(10),
		fontSize: 14,
		color: '#222222',
	},
});
