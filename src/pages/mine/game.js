import {
	Text,
	View,
	StyleSheet,
	ImageBackground,
	Image,
	SafeAreaView,
	ScrollView,
	TouchableHighlight,
	TextInput,
	Alert,
} from 'react-native';
import React from 'react';
import {SearchBar} from '@ant-design/react-native';
import pxSize from '../../assets/js/pxSize';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-community/async-storage';
import http from '../../assets/js/http';
Icon.loadFont();
AntDesign.loadFont();
export default class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			type: '1',
			gameInfo: {},
			eT: '',
			userInfo: {},
			con: '',
			num: '1',
			pz: {},
			arr: [],
		};
	}
	onChangeNum = (value) => {
		this.setState({
			num: value,
		});
	};
	SwitchTab = (type) => {
		this.setState({
			type: type,
			con: '',
		});
		console.log(this.state.type, type);
		if (type == 1) {
			this.GetGame(type);
		} else if (type == 2) {
			this.GetTwoGame();
		}
	};
	GetTwoGame = (type = 1) => {
		http({
			method: 'get',
			url: 'personal/getNewGamePeriod?gameType=2',
		}).then((res) => {
			console.log(res);
			let s =
				(new Date(res.data.data.endTime).getTime() -
					new Date().getTime()) /
				1000;
			var day = parseInt(s / (24 * 60 * 60)); //计算整数天数

			var afterDay = s - day * 24 * 60 * 60; //取得算出天数后剩余的秒数

			var hour = parseInt(afterDay / (60 * 60)); //计算整数小时数

			var afterHour = s - day * 24 * 60 * 60 - hour * 60 * 60; //取得算出小时数后剩余的秒数

			var min = parseInt(afterHour / 60); //计算整数分

			var afterMin = s - day * 24 * 60 * 60 - hour * 60 * 60 - min * 60; //取得算出分后剩余的秒数
			this.setState({
				gameInfo: res.data.data,
				eT:
					hour < 0 || min < 0
						? '已开奖'
						: hour + ':' + (min < 10 ? '0' + min : min),
			});
		});
	};
	GetGame = (type = 1) => {
		http({
			method: 'get',
			url: 'personal/getNewGamePeriod?gameType=' + type,
		}).then((res) => {
			console.log(res);
			let s =
				(new Date(res.data.data.endTime).getTime() -
					new Date().getTime()) /
				1000;
			var day = parseInt(s / (24 * 60 * 60)); //计算整数天数

			var afterDay = s - day * 24 * 60 * 60; //取得算出天数后剩余的秒数

			var hour = parseInt(afterDay / (60 * 60)); //计算整数小时数

			var afterHour = s - day * 24 * 60 * 60 - hour * 60 * 60; //取得算出小时数后剩余的秒数

			var min = parseInt(afterHour / 60); //计算整数分

			var afterMin = s - day * 24 * 60 * 60 - hour * 60 * 60 - min * 60; //取得算出分后剩余的秒数
			this.setState({
				gameInfo: res.data.data,
				eT:
					hour < 0 || min < 0
						? '已开奖'
						: hour + ':' + (min < 10 ? '0' + min : min),
			});
		});
	};
	Buy = (con) => {
		console.log(this.state.type, con);
		if (this.state.type == 2) {
			console.log(this.state.arr);
			if (this.state.arr.length < 3) {
				this.setState({
					arr: [...this.state.arr, con],
				});
			}
		} else {
			this.setState({
				con: con,
			});
		}
	};
	Clear = () => {
		this.setState({
			arr: [],
		});
	};
	GotoPay = (type = 1) => {
		if (this.state.type == 1) {
			if (!this.state.con) {
				Alert.alert('提示', '请选择下注内容', [
					{
						text: '确定',
						onPress: () => {},
					},
				]);
				return;
			}
		} else {
			if (this.state.arr.length < 3) {
				Alert.alert('提示', '请选择下注内容', [
					{
						text: '确定',
						onPress: () => {},
					},
				]);
				return;
			}
		}
		console.log(this.state.num);
		if (!this.state.num) {
			Alert.alert('提示', '请选择下注数', [
				{
					text: '确定',
					onPress: () => {},
				},
			]);
			return;
		}
		if (
			new Date(this.state.gameInfo.endTime).getTime() * 1000 -
				this.state.pz.gameEndTime * 1000 <=
			0
		) {
			Alert.alert('提示', '该期已停止下注，请稍后', [
				{
					text: '确定',
					onPress: () => {},
				},
			]);
			return;
		}
		http({
			method: 'get',
			url:
				'personal/buyGameOrder?memberId=' +
				this.state.userInfo.id +
				'&gameType=' +
				this.state.type +
				'&periodId=' +
				this.state.gameInfo.id +
				'&betMoney=' +
				this.state.num * 10 * 100 +
				'&buyContent=' +
				this.state.con,
		}).then((res) => {
			console.log(res);
			Alert.alert('提示', res.data.msg, [
				{
					text: '确定',
					onPress: () => {},
				},
			]);
		});
	};
	Add = () => {
		this.setState({
			num: String(Number(this.state.num) + 1),
		});
	};
	De = () => {
		if (this.state.num > 1) {
			this.setState({
				num: String(Number(this.state.num) - 1),
			});
		}
	};
	GotoR = () => {
		if (this.state.type == 1) {
			this.props.navigation.navigate('GameResultScreen', {type: 1});
		} else {
			this.props.navigation.navigate('GameResultScreen', {type: 2});
		}
	};
	GetUser = async () => {
		let userInfo = JSON.parse(await AsyncStorage.getItem('userInfo'));
		console.log(userInfo);
		this.setState({
			userInfo: userInfo,
		});
		console.log(this.state.userInfo);
	};
	GetPz = () => {
		http({
			method: 'get',
			url: 'personal/getGameConfig?gameType=1',
		}).then((res) => {
			console.log(res);
			this.setState({
				pz: res.data.data,
			});
		});
	};
	componentDidMount() {
		// 获取用户数据
		this.GetUser();
		this.GetGame('1');
		this.GetPz();
	}
	render() {
		return (
			<View style={{backgroundColor: '#fff', flex: 1}}>
				<ScrollView>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-around',
							alignItems: 'center',
							height: pxSize(50),
							backgroundColor: '#fff',
						}}>
						<TouchableHighlight onPress={() => this.SwitchTab('1')}>
							<Text
								style={[
									{
										fontSize: 16,
										color: '#989898',
										fontWeight: 'bold',
									},
									this.state.type == '1'
										? styles.current
										: '',
								]}>
								生肖夺宝
							</Text>
						</TouchableHighlight>
						<TouchableHighlight onPress={() => this.SwitchTab('2')}>
							<Text
								style={[
									{
										fontSize: 16,
										color: '#989898',
										fontWeight: 'bold',
									},
									this.state.type == '2'
										? styles.current
										: '',
								]}>
								猜数字
							</Text>
						</TouchableHighlight>
					</View>
					<View
						style={{
							flexDirection: 'row',
							height: pxSize(50),
							alignItems: 'center',
							backgroundColor: '#F9F9F9',
						}}>
						{this.state.gameInfo.state == 0 ? (
							<View style={{flexDirection: 'row'}}>
								<Text
									style={{
										fontSize: 15,
										color: '#989898',
										marginLeft: pxSize(15),
									}}>
									第{this.state.gameInfo.periodsNumber}期
								</Text>
								{this.state.gameInfo.state == 0 ? (
									<Text
										style={{
											fontSize: 15,
											color: '#F12210',
											marginLeft: 10,
										}}>
										已开奖
									</Text>
								) : (
									<>
										<Text
											style={{
												fontSize: 15,
												color: '#989898',
												marginLeft: pxSize(15),
											}}>
											距离开奖还有：
										</Text>
										<Text
											style={{
												fontSize: 15,
												color: '#F12210',
											}}>
											{this.state.eT}
										</Text>
									</>
								)}
							</View>
						) : (
							<Text style={{paddingLeft: 15}}>
								本期已完成，敬请期待下期
							</Text>
						)}

						<TouchableHighlight onPress={() => this.GotoR()}>
							<Text
								style={{
									fontSize: 15,
									color: '#fff',
									marginLeft: pxSize(15),
									width: pxSize(85),
									height: pxSize(25),
									backgroundColor: '#4CDBC5',
									textAlign: 'center',
									borderRadius: 20,
									paddingTop: pxSize(2),
									justifyContent: 'center',
								}}>
								开奖记录
							</Text>
						</TouchableHighlight>
					</View>
					{/* 猜生肖 */}
					<View>
						{this.state.type == '1' ? (
							<View
								style={{
									backgroundColor: '#fff',
									paddingBottom: pxSize(20),
									borderBottomColor: '#f5f5f5',
									borderBottomWidth: 1,
									paddingTop: pxSize(20),
								}}>
								<View
									style={{
										flexDirection: 'row',
										flexWrap: 'wrap',
										justifyContent: 'space-between',
										alignItems: 'center',
										paddingLeft: pxSize(15),
										paddingBottom: pxSize(18),
									}}>
									<TouchableHighlight
										onPress={() => this.Buy('鼠')}>
										<Text
											style={[
												styles.txt,
												this.state.con == '鼠'
													? {color: '#4CDBC5'}
													: '',
											]}>
											鼠
										</Text>
									</TouchableHighlight>
									<TouchableHighlight
										onPress={() => this.Buy('牛')}>
										<Text
											style={[
												styles.txt,
												this.state.con == '牛'
													? {color: '#4CDBC5'}
													: '',
											]}>
											牛
										</Text>
									</TouchableHighlight>
									<TouchableHighlight
										onPress={() => this.Buy('虎')}>
										<Text
											style={[
												styles.txt,
												this.state.con == '虎'
													? {color: '#4CDBC5'}
													: '',
											]}>
											虎
										</Text>
									</TouchableHighlight>
									<TouchableHighlight
										onPress={() => this.Buy('兔')}>
										<Text
											style={[
												styles.txt,
												this.state.con == '兔'
													? {color: '#4CDBC5'}
													: '',
											]}>
											兔
										</Text>
									</TouchableHighlight>
									<TouchableHighlight
										onPress={() => this.Buy('龙')}>
										<Text
											style={[
												styles.txt,
												this.state.con == '龙'
													? {color: '#4CDBC5'}
													: '',
											]}>
											龙
										</Text>
									</TouchableHighlight>
									<TouchableHighlight
										onPress={() => this.Buy('蛇')}>
										<Text
											style={[
												styles.txt,
												this.state.con == '蛇'
													? {color: '#4CDBC5'}
													: '',
											]}>
											蛇
										</Text>
									</TouchableHighlight>
									<TouchableHighlight
										onPress={() => this.Buy('马')}>
										<Text
											style={[
												styles.txt,
												this.state.con == '马'
													? {color: '#4CDBC5'}
													: '',
											]}>
											马
										</Text>
									</TouchableHighlight>
									<TouchableHighlight
										onPress={() => this.Buy('羊')}>
										<Text
											style={[
												styles.txt,
												this.state.con == '羊'
													? {color: '#4CDBC5'}
													: '',
											]}>
											羊
										</Text>
									</TouchableHighlight>
									<TouchableHighlight
										onPress={() => this.Buy('猴')}>
										<Text
											style={[
												styles.txt,
												this.state.con == '猴'
													? {color: '#4CDBC5'}
													: '',
											]}>
											猴
										</Text>
									</TouchableHighlight>
									<TouchableHighlight
										onPress={() => this.Buy('鸡')}>
										<Text
											style={[
												styles.txt,
												this.state.con == '鸡'
													? {color: '#4CDBC5'}
													: '',
											]}>
											鸡
										</Text>
									</TouchableHighlight>
									<TouchableHighlight
										onPress={() => this.Buy('狗')}>
										<Text
											style={[
												styles.txt,
												this.state.con == '狗'
													? {color: '#4CDBC5'}
													: '',
											]}>
											狗
										</Text>
									</TouchableHighlight>
									<TouchableHighlight
										onPress={() => this.Buy('猪')}>
										<Text
											style={[
												styles.txt,
												this.state.con == '猪'
													? {color: '#4CDBC5'}
													: '',
											]}>
											猪
										</Text>
									</TouchableHighlight>
								</View>
								<View>
									<Text
										style={{
											fontSize: 18,
											color: '#000000',
											marginLeft: pxSize(16),
											marginBottom: pxSize(16),
										}}>
										选中生肖：{this.state.con}
									</Text>
								</View>
								<View
									style={{
										marginLeft: pxSize(16),
										marginRight: pxSize(16),
										marginBottom: pxSize(16),
										flexDirection: 'row',
										alignItems: 'center',
									}}>
									<Text
										style={{
											fontSize: 18,
											color: '#000000',
										}}>
										试试手气：
									</Text>
									<TouchableHighlight
										onPress={() => this.De()}>
										<Icon
											name="remove-circle-outline"
											size={18}
											color="#4BD9C3"
										/>
									</TouchableHighlight>
									<TextInput
										value={this.state.num}
										onChangeText={(value) =>
											this.onChangeNum(value)
										}
										style={{
											borderColor: '#DDDDDD',
											borderWidth: 1,
											width: pxSize(75),
											height: pxSize(28),
											textAlign: 'center',
											fontSize: 18,
											padding: 0,
											marginLeft: pxSize(15),
											marginRight: pxSize(15),
										}}
									/>
									<TouchableHighlight
										onPress={() => this.Add()}>
										<Icon
											name="add-circle-outline"
											size={20}
											color="#4BD9C3"
										/>
									</TouchableHighlight>
									<Text
										style={{
											fontSize: 18,
											color: '#000000',
										}}>
										注
									</Text>
								</View>
								<View
									style={{
										marginLeft: pxSize(15),
										marginRight: pxSize(15),
										marginTop: pxSize(15),
									}}>
									<Text
										style={{
											fontSize: 18,
											color: '#000000',
											marginBottom: pxSize(10),
										}}>
										游戏说明：
									</Text>
									<Text
										style={{
											fontSize: 18,
											color: '#000000',
											marginBottom: pxSize(10),
										}}>
										1.选择任意生肖进行投注，10元宝一次
									</Text>
									<Text
										style={{
											fontSize: 18,
											color: '#000000',
											marginBottom: pxSize(10),
										}}>
										2.与当期开奖生肖相同，则中奖
									</Text>
								</View>
							</View>
						) : (
							<View>
								<View>
									<View
										style={{
											flexDirection: 'row',
											flexWrap: 'wrap',
											justifyContent: 'space-between',
											alignItems: 'center',
											paddingLeft: pxSize(45),
											paddingRight: pxSize(30),
											paddingBottom: pxSize(18),
											paddingTop: pxSize(15),
										}}>
										<TouchableHighlight
											onPress={() => this.Buy('1')}>
											<Text
												style={[
													styles.numTxt,
													this.state.arr.indexOf(
														'1',
													) >= 0
														? {color: '#4CDBC5'}
														: '',
												]}>
												1
											</Text>
										</TouchableHighlight>
										<TouchableHighlight
											onPress={() => this.Buy('2')}>
											<Text
												style={[
													styles.numTxt,
													this.state.arr.indexOf(
														'2',
													) >= 0
														? {color: '#4CDBC5'}
														: '',
												]}>
												2
											</Text>
										</TouchableHighlight>
										<TouchableHighlight
											onPress={() => this.Buy('3')}>
											<Text
												style={[
													styles.numTxt,
													this.state.arr.indexOf(
														'3',
													) >= 0
														? {color: '#4CDBC5'}
														: '',
												]}>
												3
											</Text>
										</TouchableHighlight>
										<TouchableHighlight
											onPress={() => this.Buy('4')}>
											<Text
												style={[
													styles.numTxt,
													this.state.arr.indexOf(
														'4',
													) >= 0
														? {color: '#4CDBC5'}
														: '',
												]}>
												4
											</Text>
										</TouchableHighlight>
										<TouchableHighlight
											onPress={() => this.Buy('5')}>
											<Text
												style={[
													styles.numTxt,
													this.state.arr.indexOf(
														'5',
													) >= 0
														? {color: '#4CDBC5'}
														: '',
												]}>
												5
											</Text>
										</TouchableHighlight>
										<TouchableHighlight
											onPress={() => this.Buy('6')}>
											<Text
												style={[
													styles.numTxt,
													this.state.arr.indexOf(
														'6',
													) >= 0
														? {color: '#4CDBC5'}
														: '',
												]}>
												6
											</Text>
										</TouchableHighlight>
										<TouchableHighlight
											onPress={() => this.Buy('7')}>
											<Text
												style={[
													styles.numTxt,
													this.state.arr.indexOf(
														'7',
													) >= 0
														? {color: '#4CDBC5'}
														: '',
												]}>
												7
											</Text>
										</TouchableHighlight>
										<TouchableHighlight
											onPress={() => this.Buy('8')}>
											<Text
												style={[
													styles.numTxt,
													this.state.arr.indexOf(
														'8',
													) >= 0
														? {color: '#4CDBC5'}
														: '',
												]}>
												8
											</Text>
										</TouchableHighlight>
										<TouchableHighlight
											onPress={() => this.Buy('9')}>
											<Text
												style={[
													styles.numTxt,
													this.state.arr.indexOf(
														'9',
													) >= 0
														? {color: '#4CDBC5'}
														: '',
												]}>
												9
											</Text>
										</TouchableHighlight>
										<TouchableHighlight
											onPress={() => this.Buy('0')}>
											<Text
												style={[
													styles.numTxt,
													this.state.arr.indexOf(
														'0',
													) >= 0
														? {color: '#4CDBC5'}
														: '',
												]}>
												0
											</Text>
										</TouchableHighlight>
									</View>
								</View>
								{/* 猜数字 */}
								<View>
									<Text
										style={{
											fontSize: 18,
											color: '#000000',
											marginLeft: pxSize(16),
											marginBottom: pxSize(16),
										}}>
										投注内容：{this.state.arr}
									</Text>
									<Text
										style={{
											fontSize: 13,
											color: '#989898',
											marginLeft: pxSize(16),
											marginBottom: pxSize(16),
										}}>
										提示: 请确定数字的顺序，影响中奖金额哟。
									</Text>
									<TouchableHighlight
										onPress={() => this.Clear()}>
										<Text
											style={{
												fontSize: 18,
												marginLeft: pxSize(16),
												marginBottom: pxSize(16),
												backgroundColor: '#4CDBC5',
												color: '#fff',
												width: pxSize(120),
												textAlign: 'center',
											}}>
											清除选中数据
										</Text>
									</TouchableHighlight>
								</View>
								<View
									style={{
										marginLeft: pxSize(16),
										marginRight: pxSize(16),
										marginBottom: pxSize(16),
										flexDirection: 'row',
										alignItems: 'center',
									}}>
									<Text
										style={{
											fontSize: 18,
											color: '#000000',
										}}>
										试试手气：
									</Text>
									<TouchableHighlight
										onPress={() => this.De()}>
										<Icon
											name="remove-circle-outline"
											size={18}
											color="#4BD9C3"
										/>
									</TouchableHighlight>
									<TextInput
										value={this.state.num}
										onChangeText={(value) =>
											this.onChangeNum(value)
										}
										style={{
											borderColor: '#DDDDDD',
											borderWidth: 1,
											width: pxSize(75),
											height: pxSize(28),
											textAlign: 'center',
											fontSize: 18,
											padding: 0,
											marginLeft: pxSize(15),
											marginRight: pxSize(15),
										}}
									/>
									<TouchableHighlight
										onPress={() => this.Add()}>
										<Icon
											name="add-circle-outline"
											size={20}
											color="#4BD9C3"
										/>
									</TouchableHighlight>
									<Text
										style={{
											fontSize: 18,
											color: '#000000',
										}}>
										注
									</Text>
								</View>
								<View
									style={{
										marginLeft: pxSize(15),
										marginRight: pxSize(15),
										marginTop: pxSize(15),
									}}>
									<Text
										style={{
											fontSize: 18,
											color: '#000000',
											marginBottom: pxSize(10),
										}}>
										游戏说明：
									</Text>
									<Text
										style={{
											fontSize: 18,
											color: '#000000',
											marginBottom: pxSize(10),
										}}>
										1.选择任意数字进行投注，10元宝一次
									</Text>
									<Text
										style={{
											fontSize: 18,
											color: '#000000',
											marginBottom: pxSize(10),
										}}>
										2.与当期开奖数字相同，则中奖
									</Text>
								</View>
							</View>
						)}
					</View>
				</ScrollView>
				<TouchableHighlight onPress={() => this.GotoPay()}>
					<View style={styles.footerBox}>
						<Text style={styles.footerBtn}>立即下注</Text>
					</View>
				</TouchableHighlight>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	current: {
		color: '#F12210',
	},
	txt: {
		width: pxSize(45),
		height: pxSize(45),
		borderWidth: 1,
		borderColor: '#E6E6E6',
		borderRadius: 50,
		textAlign: 'center',
		alignSelf: 'center',
		textAlignVertical: 'center',
		marginRight: pxSize(15),
		marginBottom: pxSize(16),
		color: '#000000',
		fontSize: 20,
	},
	numTxt: {
		width: pxSize(45),
		height: pxSize(45),
		borderWidth: 1,
		borderColor: '#E6E6E6',
		borderRadius: 50,
		textAlign: 'center',
		alignSelf: 'center',
		textAlignVertical: 'center',
		marginRight: pxSize(14),
		marginBottom: pxSize(16),
		color: '#000000',
		fontSize: 20,
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
});
