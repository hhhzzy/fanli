import {
	Text,
	SafeAreaView,
	ScrollView,
	Image,
	View,
	StyleSheet,
	TouchableHighlight,
	TextInput,
	Platform,
} from 'react-native';
import React from 'react';
import pxSize from '../../assets/js/pxSize';
import AsyncStorage from '@react-native-community/async-storage';
import http from '../../assets/js/http';

export default class MoneyList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isEnabled: false,
			userInfo: {},
			bankInfo: {},
			selectYh: '',
			list: [],
		};
	}
	GotoOrderInfo = () => {
		// this.props.navigation.navigate('OrderDetailScreen');
	};
	GetUser = async () => {
		return new Promise(async (resolve) => {
			let userInfo = JSON.parse(await AsyncStorage.getItem('userInfo'));
			this.setState({
				userInfo: userInfo,
				selTab: 0,
			});
			resolve();
		});
	};
	GetList = (type = 0) => {
		this.setState({
			selTab: type,
		});
		http({
			method: 'get',
			url:
				'personal/getTranList?offset=1&limit=1500&memberId=' +
				this.state.userInfo.id +
				'&type=' +
				type,
		}).then((res) => {
			console.log(res, '111');
			this.setState({
				list: res.data.rows,
			});
		});
	};
	SwitchTah = (type) => {
		this.setState({
			selTab: type,
		});
		this.GetList(type);
	};
	async componentDidMount() {
		// 获取用户数据
		await this.GetUser();
		this.GetList(this.props.route.params.type);
	}
	render() {
		return (
			<SafeAreaView>
				<View style={{backgroundColor: '#fff'}}>
					<View style={styles.navBox}>
						<TouchableHighlight onPress={() => this.SwitchTah(0)}>
							<Text
								style={[
									styles.navTxt,
									this.state.selTab == 0
										? styles.textCurrent
										: '',
								]}>
								全部
							</Text>
						</TouchableHighlight>
						<TouchableHighlight onPress={() => this.SwitchTah(1)}>
							<Text
								style={[
									styles.navTxt,
									this.state.selTab == 1
										? styles.textCurrent
										: '',
								]}>
								充值
							</Text>
						</TouchableHighlight>
						<TouchableHighlight onPress={() => this.SwitchTah(3)}>
							<Text
								style={[
									styles.navTxt,
									this.state.selTab == 3
										? styles.textCurrent
										: '',
								]}>
								消费
							</Text>
						</TouchableHighlight>
						<TouchableHighlight onPress={() => this.SwitchTah(4)}>
							<Text
								style={[
									styles.navTxt,
									this.state.selTab == 4
										? styles.textCurrent
										: '',
								]}>
								收益
							</Text>
						</TouchableHighlight>
						<TouchableHighlight onPress={() => this.SwitchTah(2)}>
							<Text
								style={[
									styles.navTxt,
									this.state.selTab == 2
										? styles.textCurrent
										: '',
								]}>
								提现
							</Text>
						</TouchableHighlight>
					</View>
				</View>
				<View>
					<ScrollView>
						{this.state.list.map((item) => (
							<TouchableHighlight
								key={item.tranNumber}
								onPress={() => this.GotoOrderInfo()}>
								<View style={styles.orderList}>
									<View>
										<Text
											style={{
												fontSize: 16,
												color: '#000',
											}}>
											{item.tranName}
										</Text>
										<Text
											style={{
												fontSize: 12,
												color: '#666',
												marginTop: pxSize(2),
											}}>
											{item.tranNumber}
										</Text>
										<Text
											style={{
												fontSize: 12,
												color: '#666',
												marginTop: pxSize(2),
											}}>
											{item.createTime}
										</Text>
									</View>
									<View>
										<Text
											style={{
												fontWeight: 'bold',
												fontSize: 16,
												color: '#000',
												marginBottom: 3,
											}}>
											{item.tranMoney / 100}元
										</Text>
										{item.type === 1 ? (
											item.state === 0 ? (
												<Text style={{color: '#666'}}>
													待审核
												</Text>
											) : item.state === 1 ? (
												<Text style={{color: '#666'}}>
													已审核
												</Text>
											) : (
												<Text style={{color: '#666'}}>
													未通过
												</Text>
											)
										) : (
											<Text />
										)}
									</View>
								</View>
							</TouchableHighlight>
						))}
						<View
							style={{
								height: Platform.OS == 'ios' ? 0 : pxSize(130),
							}}
						/>
					</ScrollView>
				</View>
			</SafeAreaView>
		);
	}
}
const styles = StyleSheet.create({
	navBox: {
		flexDirection: 'row',
		marginTop: pxSize(15),
		marginBottom: pxSize(15),
		height: pxSize(28),
		alignItems: 'center',
		marginLeft: pxSize(15),
		marginRight: pxSize(15),
	},
	navTxt: {
		fontSize: 15,
		color: '#4D4D4D',
		fontWeight: 'bold',
		marginRight: pxSize(28),
	},
	textCurrent: {
		fontSize: 20,
	},
	orderList: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: '#fff',
		padding: pxSize(5),
		paddingLeft: pxSize(15),
		paddingRight: pxSize(15),
		marginTop: pxSize(5),
	},
});
