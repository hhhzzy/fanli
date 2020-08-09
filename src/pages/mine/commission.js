import {
	Text,
	View,
	StyleSheet,
	ImageBackground,
	Image,
	SafeAreaView,
	ScrollView,
	TouchableHighlight,
	Platform,
} from 'react-native';
import React from 'react';
import {SearchBar} from '@ant-design/react-native';
import pxSize from '../../assets/js/pxSize';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-community/async-storage';
import http from '../../assets/js/http';
Icon.loadFont();

export default class Commission extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: new Date(),
			showDate: false,
			beginDate: '请选择开始时间',
			endDate: '请选择结束时间',
			userInfo: {},
			info: {},
			bT: '',
			eT: '',
			date: new Date(),
			mode: 'date',
			dateType: '',
			list: [],
		};
	}
	clear = () => {
		console.log(1);
	};
	onChange = (event, selectedDate) => {
		console.log(this.state.dateType, event, selectedDate);
		if (this.state.dateType === 'bT') {
			// 开始时间
			this.setState({
				bT: selectedDate,
				beginDate:
					new Date(selectedDate).getFullYear() +
					'-' +
					(Number(new Date(selectedDate).getMonth()) + 1) +
					'-' +
					new Date(selectedDate).getDate(),
			});
		}
		if (this.state.dateType === 'eT') {
			// 结束时间
			this.setState({
				eT: selectedDate,
				endDate:
					new Date(selectedDate).getFullYear() +
					'-' +
					(Number(new Date(selectedDate).getMonth()) + 1) +
					'-' +
					new Date(selectedDate).getDate(),
			});
		}
		if (this.state.beginDate && this.state.endDate) {
			this.GetList();
		}
	};
	ShowTime = (type) => {
		this.setState({showDate: true, dateType: type});
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
	GetInfo = () => {
		http({
			method: 'get',
			url: 'personal/getMyTeamTotal?memberId=' + this.state.userInfo.id,
		}).then((res) => {
			console.log(res);
			this.setState({
				info: res.data.data,
			});
		});
	};
	GetList = () => {
		console.log(this.state);
		http({
			method: 'get',
			url:
				'personal/getMyCommissionList?offset=1&limit=1500&beginTime=' +
				this.state.bT +
				'&endTime=' +
				this.state.eT +
				'&memberId=' +
				this.state.userInfo.id,
		}).then((res) => {
			console.log(res, '333');
			this.setState({
				list: res.data.rows,
				showDate: false,
			});
		});
	};
	async componentDidMount() {
		// 获取用户数据
		await this.GetUser();
		// 获取用户数据
		this.GetInfo();
		this.GetList();
	}
	render() {
		return (
			<>
				<View style={styles.tjBox}>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center',
							height: pxSize(50),
							paddingLeft: pxSize(20),
							paddingRight: pxSize(20),
							borderBottomWidth: 1,
							borderBottomColor: '#F5F5F5',
						}}>
						<Text style={{color: '#222222', fontSize: 14}}>
							团队人数
						</Text>
						<Text style={{color: '#222222', fontSize: 14}}>
							{this.state.info.totalNumber}人
						</Text>
					</View>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center',
							height: pxSize(50),
							paddingLeft: pxSize(20),
							paddingRight: pxSize(20),
							borderBottomWidth: 1,
							borderBottomColor: '#F5F5F5',
						}}>
						<Text style={{color: '#222222', fontSize: 14}}>
							总佣金
						</Text>
						<Text style={{color: '#222222', fontSize: 14}}>
							{this.state.info.totalMoney}
						</Text>
					</View>
					<View style={{}}>
						<View
							style={{
								backgroundColor: '#F5F5F5',
								height: pxSize(50),
								flexDirection: 'row',
								paddingLeft: pxSize(15),
							}}>
							<Text
								style={{
									fontSize: 15,
									color: '#989898',
									alignSelf: 'center',
								}}>
								时间段统计
							</Text>
						</View>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
								backgroundColor: '#fff',
								paddingLeft: pxSize(15),
								paddingRight: pxSize(15),
								paddingTop: pxSize(15),
								paddingBottom: pxSize(15),
								borderBottomWidth: 1,
								borderBottomColor: '#F5F5F5',
							}}>
							<View style={{}}>
								<TouchableHighlight
									onPress={() => this.ShowTime('bT')}>
									<Text style={{color: '#666'}}>
										{this.state.beginDate}
									</Text>
								</TouchableHighlight>
							</View>
							<View style={{}}>
								<TouchableHighlight
									onPress={() => this.ShowTime('eT')}>
									<Text style={{color: '#666'}}>
										{this.state.endDate}
									</Text>
								</TouchableHighlight>
							</View>
							{this.state.showDate && (
								<DateTimePicker
									testID="dateTimePicker"
									value={this.state.date}
									mode={this.state.mode}
									is24Hour={true}
									display="default"
									onChange={this.onChange}
									style={{
										flex: 1,
										height: 50,
										backgroundColor: 'red',
									}}
									confirmBtnText="确定"
									cancelBtnText="取消"
									locale={'zh-Hans'}
								/>
							)}
						</View>
					</View>
					{/* <View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center',
							height: pxSize(50),
							paddingLeft: pxSize(20),
							paddingRight: pxSize(20),
							borderBottomWidth: 1,
							borderBottomColor: '#F5F5F5',
						}}>
						<Text style={{color: '#222222', fontSize: 14}}>
							团长佣金
						</Text>
						<Text style={{color: '#222222', fontSize: 14}}>
							15156156
						</Text>
					</View> */}
				</View>
				<ScrollView style={{flex: 1}}>
					<View
						style={{
							marginTop: pxSize(5),
							marginBottom: pxSize(10),
						}}>
						<View style={styles.listBox}>
							<Text
								style={{
									width: pxSize(100),
									textAlign: 'center',
									flex: 1.5,
								}}>
								日期
							</Text>

							<Text
								style={{
									flex: 1,
									textAlign: 'center',
								}}>
								我的佣金
							</Text>
						</View>
						{this.state.list.map((item) => (
							<View style={styles.listBox}>
								<Text
									style={{
										width: pxSize(100),
										textAlign: 'center',
										flex: 1.5,
									}}>
									{item.createTime}
								</Text>
								<Text
									style={{
										flex: 1,
										textAlign: 'center',
									}}>
									{item.tranMoney / 100}
								</Text>
							</View>
						))}
					</View>
				</ScrollView>
			</>
		);
	}
}
const styles = StyleSheet.create({
	tjBox: {
		backgroundColor: '#fff',
		borderTopRightRadius: 8,
		borderTopLeftRadius: 8,
		marginTop: -5,
	},
	listBox: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		height: pxSize(50),
		alignItems: 'center',
		backgroundColor: '#fff',
		borderBottomWidth: 1,
		borderBottomColor: '#F5F5F5',
	},
});
