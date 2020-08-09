import {
	Text,
	SafeAreaView,
	ScrollView,
	Image,
	View,
	StyleSheet,
	TouchableHighlight,
	TextInput,
} from 'react-native';
import React from 'react';
import pxSize from '../../assets/js/pxSize';
import http from '../../assets/js/http';
import AsyncStorage from '@react-native-community/async-storage';

export default class OrderList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userInfo: {},
			SelTab: this.props.route.params.type,
			OrderList: [],
		};
	}
	GotoOrderInfo = () => {
		// this.props.navigation.navigate('OrderDetailScreen');
	};
	GetOrderList = (type = 1) => {
		console.log(this.state.userInfo.id);
		http({
			method: 'get',
			url:
				'personal/getOrderList?offset=1&limit=1500&memberId=' +
				this.state.userInfo.id +
				'&type=' +
				type,
		}).then((res) => {
			this.setState({
				OrderList: res.data.rows,
			});
			console.log(res.data.rows, this.state.OrderList);
		});
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
	SwitchTab = (type, id) => {
		this.setState({
			SelTab: type,
		});
		this.GetOrderList(id);
	};
	async componentDidMount() {
		// 获取用户数据
		await this.GetUser();
		console.log(this.props, '22');
		// 获取订单数据
		this.GetOrderList(this.props.route.params.id);
	}
	render() {
		return (
			<SafeAreaView>
				<View style={styles.navBox}>
					<TouchableHighlight
						style={{paddingTop: pxSize(13)}}
						onPress={() => this.SwitchTab('已付款', 1)}>
						<Text
							style={[
								styles.navTxt,
								this.state.SelTab === '已付款'
									? styles.textCurrent
									: '',
							]}>
							已付款
						</Text>
					</TouchableHighlight>
					<TouchableHighlight
						style={{paddingTop: pxSize(13)}}
						onPress={() => this.SwitchTab('返利订单', 2)}>
						<Text
							style={[
								styles.navTxt,
								this.state.SelTab === '返利订单'
									? styles.textCurrent
									: '',
							]}>
							返利订单
						</Text>
					</TouchableHighlight>
					<TouchableHighlight
						style={{paddingTop: pxSize(13)}}
						onPress={() => this.SwitchTab('已完成', 3)}>
						<Text
							style={[
								styles.navTxt,
								this.state.SelTab === '已完成'
									? styles.textCurrent
									: '',
							]}>
							已完成
						</Text>
					</TouchableHighlight>
				</View>
				<ScrollView style={{marginBottom: pxSize(60)}}>
					{this.state.OrderList.map((item) => (
						<TouchableHighlight
							key={item.productOrder}
							onPress={() => this.GotoOrderInfo()}>
							<View style={styles.orderList}>
								<View>
									<Text
										style={{
											fontSize: 16,
											fontWeight: 'bold',
											color: '#000',
											width: pxSize(220),
										}}>
										{item.productName}
									</Text>
									<Text
										style={{
											fontSize: 12,
											color: '#666',
											marginTop: pxSize(2),
										}}>
										NO.{item.productOrder}
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
											fontSize: 20,
											color: '#000',
											marginBottom: 3,
										}}>
										{item.productMoney / 100}元
									</Text>
									{this.state.SelTab === '已付款' ? (
										<Text style={{color: '#50DBC6'}}>
											代发货
										</Text>
									) : this.state.SelTab === '已完成' ? (
										<Text>已完成</Text>
									) : (
										<Text>返利订单</Text>
									)}
								</View>
							</View>
						</TouchableHighlight>
					))}
				</ScrollView>
			</SafeAreaView>
		);
	}
}
const styles = StyleSheet.create({
	navBox: {
		flexDirection: 'row',
		height: pxSize(50),
		alignItems: 'center',
		paddingLeft: pxSize(15),
		paddingRight: pxSize(15),
		backgroundColor: '#FCFCFC',
		justifyContent: 'space-between',
	},
	navTxt: {
		fontSize: 15,
		color: '#989898',
		fontWeight: 'bold',
		flex: 1,
		textAlign: 'center',
	},
	textCurrent: {
		color: '#F12210',
	},
	orderList: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: '#fff',
		padding: pxSize(15),
		marginLeft: pxSize(15),
		marginRight: pxSize(15),
		marginTop: pxSize(12),
	},
});
