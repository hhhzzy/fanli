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
import {SearchBar} from '@ant-design/react-native';
import pxSize from '../../assets/js/pxSize';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import DateTimePicker from '@react-native-community/datetimepicker';
Icon.loadFont();

export default class Commission extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: new Date(),
			showDate: false,
			beginDate: '请选择开始时间',
			endDate: '请选择结束时间',
		};
	}
	clear = () => {
		console.log(1);
	};
	onChange = (event, selectedDate) => {};
	ShowTime = () => {
		console.log(33);
		this.setState({showDate: true});
	};
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
							130人
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
							团队总业绩
						</Text>
						<Text style={{color: '#222222', fontSize: 14}}>
							15156156
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
									onPress={() => this.ShowTime()}>
									<Text style={{color: '#666'}}>
										{this.state.beginDate}
									</Text>
								</TouchableHighlight>
								{this.state.showDate && (
									<DateTimePicker
										testID="dateTimePicker"
										value={this.state.value}
										mode="mode"
										is24Hour={true}
										display="default"
										onChange={() => this.onChange()}
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
							<View style={{}}>
								<TouchableHighlight
									onPress={() => this.ShowTime()}>
									<Text style={{color: '#666'}}>
										{this.state.endDate}
									</Text>
								</TouchableHighlight>
								{this.state.showDate && (
									<DateTimePicker
										testID="dateTimePicker"
										value={this.state.value}
										mode="mode"
										is24Hour={true}
										display="default"
										onChange={() => this.onChange()}
										style={{
											flex: 1,
											height: 50,
											backgroundColor: 'red',
										}}
										locale="zh"
									/>
								)}
							</View>
						</View>
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
							团长佣金
						</Text>
						<Text style={{color: '#222222', fontSize: 14}}>
							15156156
						</Text>
					</View>
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
								团队佣金
							</Text>
							<Text
								style={{
									flex: 1,
									textAlign: 'center',
								}}>
								我的佣金
							</Text>
						</View>
						<View style={styles.listBox}>
							<Text
								style={{
									width: pxSize(100),
									textAlign: 'center',
									flex: 1.5,
								}}>
								15223681474
							</Text>
							<Text
								style={{
									flex: 1,
									textAlign: 'center',
								}}>
								522.00
							</Text>
							<Text
								style={{
									flex: 1,
									textAlign: 'center',
								}}>
								262626
							</Text>
						</View>
						<View style={styles.listBox}>
							<Text
								style={{
									width: pxSize(100),
									textAlign: 'center',
									flex: 1.5,
								}}>
								15223681474
							</Text>
							<Text
								style={{
									flex: 1,
									textAlign: 'center',
								}}>
								522.00
							</Text>
							<Text
								style={{
									flex: 1,
									textAlign: 'center',
								}}>
								262626
							</Text>
						</View>
						<View style={styles.listBox}>
							<Text
								style={{
									width: pxSize(100),
									textAlign: 'center',
									flex: 1.5,
								}}>
								15223681474
							</Text>
							<Text
								style={{
									flex: 1,
									textAlign: 'center',
								}}>
								522.00
							</Text>
							<Text
								style={{
									flex: 1,
									textAlign: 'center',
								}}>
								262626
							</Text>
						</View>
						<View style={styles.listBox}>
							<Text
								style={{
									width: pxSize(100),
									textAlign: 'center',
									flex: 1.5,
								}}>
								15223681474
							</Text>
							<Text
								style={{
									flex: 1,
									textAlign: 'center',
								}}>
								522.00
							</Text>
							<Text
								style={{
									flex: 1,
									textAlign: 'center',
								}}>
								262626
							</Text>
						</View>
						<View style={styles.listBox}>
							<Text
								style={{
									width: pxSize(100),
									textAlign: 'center',
									flex: 1.5,
								}}>
								15223681474
							</Text>
							<Text
								style={{
									flex: 1,
									textAlign: 'center',
								}}>
								522.00
							</Text>
							<Text
								style={{
									flex: 1,
									textAlign: 'center',
								}}>
								262626
							</Text>
						</View>
						<View style={styles.listBox}>
							<Text
								style={{
									width: pxSize(100),
									textAlign: 'center',
									flex: 1.5,
								}}>
								15223681474
							</Text>
							<Text
								style={{
									flex: 1,
									textAlign: 'center',
								}}>
								522.00
							</Text>
							<Text
								style={{
									flex: 1,
									textAlign: 'center',
								}}>
								262626
							</Text>
						</View>
						<View style={styles.listBox}>
							<Text
								style={{
									width: pxSize(100),
									textAlign: 'center',
									flex: 1.5,
								}}>
								15223681474
							</Text>
							<Text
								style={{
									flex: 1,
									textAlign: 'center',
								}}>
								522.00
							</Text>
							<Text
								style={{
									flex: 1,
									textAlign: 'center',
								}}>
								262626
							</Text>
						</View>
						<View style={styles.listBox}>
							<Text
								style={{
									width: pxSize(100),
									textAlign: 'center',
									flex: 1.5,
								}}>
								15223681474
							</Text>
							<Text
								style={{
									flex: 1,
									textAlign: 'center',
								}}>
								522.00
							</Text>
							<Text
								style={{
									flex: 1,
									textAlign: 'center',
								}}>
								262626
							</Text>
						</View>
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
