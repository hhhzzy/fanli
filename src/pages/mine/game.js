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
} from 'react-native';
import React from 'react';
import {SearchBar} from '@ant-design/react-native';
import pxSize from '../../assets/js/pxSize';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import DateTimePicker from '@react-native-community/datetimepicker';
Icon.loadFont();
AntDesign.loadFont();
export default class Game extends React.Component {
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
						<Text
							style={[
								{
									fontSize: 16,
									color: '#989898',
									fontWeight: 'bold',
								},
								styles.current,
							]}>
							生肖夺宝
						</Text>
						<Text
							style={{
								fontSize: 16,
								color: '#989898',
								fontWeight: 'bold',
							}}>
							猜数字
						</Text>
					</View>
					<View
						style={{
							flexDirection: 'row',
							height: pxSize(50),
							alignItems: 'center',
							backgroundColor: '#F9F9F9',
						}}>
						<Text
							style={{
								fontSize: 15,
								color: '#989898',
								marginLeft: pxSize(15),
							}}>
							第20200730期
						</Text>
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
							05:30
						</Text>
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
					</View>
					{/* 猜生肖 */}
					<View>
						<View
							style={{
								backgroundColor: '#fff',
								paddingBottom: pxSize(20),
								borderBottomColor: '#f5f5f5',
								borderBottomWidth: 1,
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
								<Text style={styles.txt}>鼠</Text>
								<Text style={styles.txt}>牛</Text>
								<Text style={styles.txt}>虎</Text>
								<Text style={styles.txt}>兔</Text>
								<Text style={styles.txt}>龙</Text>
								<Text style={styles.txt}>蛇</Text>
								<Text style={styles.txt}>马</Text>
								<Text style={styles.txt}>羊</Text>
								<Text style={styles.txt}>猴</Text>
								<Text style={styles.txt}>鸡</Text>
								<Text style={styles.txt}>狗</Text>
								<Text style={styles.txt}>猪</Text>
							</View>
							<View>
								<Text
									style={{
										fontSize: 18,
										color: '#000000',
										marginLeft: pxSize(16),
										marginBottom: pxSize(16),
									}}>
									选中生肖：虎
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
								<Icon
									name="remove-circle-outline"
									size={18}
									color="#4BD9C3"
								/>
								<TextInput
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
								<Icon
									name="add-circle-outline"
									size={20}
									color="#4BD9C3"
								/>
								<Text
									style={{
										fontSize: 18,
										color: '#000000',
									}}>
									注
								</Text>
							</View>
						</View>
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
								}}>
								<Text style={styles.numTxt}>1</Text>
								<Text style={styles.numTxt}>2</Text>
								<Text style={styles.numTxt}>3</Text>
								<Text style={styles.numTxt}>4</Text>
								<Text style={styles.numTxt}>5</Text>
								<Text style={styles.numTxt}>6</Text>
								<Text style={styles.numTxt}>7</Text>
								<Text style={styles.numTxt}>8</Text>
								<Text style={styles.numTxt}>9</Text>
								<Text style={styles.numTxt}>0</Text>
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
								投注内容：3 2 9
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
							<Icon
								name="remove-circle-outline"
								size={18}
								color="#4BD9C3"
							/>
							<TextInput
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
							<Icon
								name="add-circle-outline"
								size={20}
								color="#4BD9C3"
							/>
							<Text
								style={{
									fontSize: 18,
									color: '#000000',
								}}>
								注
							</Text>
						</View>
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
				</ScrollView>
				<TouchableHighlight onPress={() => this.GotoPay()}>
					<View style={styles.footerBox}>
						<Text style={styles.footerBtn}>立即充值</Text>
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
