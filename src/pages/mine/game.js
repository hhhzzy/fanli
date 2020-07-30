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
export default class Game extends React.Component {
	render() {
		return (
			<>
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
								borderRightColor: '#f5f5f5',
								borderRightWidth: 1,
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
				<View>
					<View
						style={{
							flexDirection: 'row',
							flexWrap: 'wrap',
							justifyContent: 'space-around',
							backgroundColor: '#fff',
						}}>
						<Text
							style={{
								width: pxSize(45),
								height: pxSize(45),
								borderWidth: 1,
								borderColor: '#E6E6E6',
								borderRadius: 50,
								textAlign: 'center',
								alignSelf: 'center',
								backgroundColor: 'red',
								justifyContent: 'center',
							}}>
							鼠
						</Text>
						<Text>牛</Text>
						<Text>虎</Text>
						<Text>兔</Text>
						<Text>龙</Text>
						<Text>蛇</Text>
						<Text>马</Text>
						<Text>羊</Text>
						<Text>猴</Text>
						<Text>鸡</Text>
						<Text>狗</Text>
						<Text>猪</Text>
					</View>
				</View>
			</>
		);
	}
}
const styles = StyleSheet.create({
	current: {
		color: '#F12210',
	},
});
