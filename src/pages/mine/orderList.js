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

export default class OrderList extends React.Component {
	GotoOrderInfo = () => {
		this.props.navigation.navigate('OrderDetailScreen');
	};
	render() {
		return (
			<SafeAreaView>
				<View style={styles.navBox}>
					<Text style={[styles.navTxt, styles.textCurrent]}>
						全部
					</Text>
					<Text style={styles.navTxt}>已付款</Text>
					<Text style={styles.navTxt}>已完成</Text>
					<Text style={styles.navTxt}>返利单</Text>
				</View>
				<ScrollView>
					<TouchableHighlight onPress={() => this.GotoOrderInfo()}>
						<View style={styles.orderList}>
							<View>
								<Text
									style={{
										fontSize: 16,
										fontWeight: 'bold',
										color: '#000',
										width: pxSize(220),
									}}>
									BOSE音箱一对发冯绍峰是粉送祝福
									BOSE音箱一对发冯绍峰是粉送祝福
								</Text>
								<Text
									style={{
										fontSize: 12,
										color: '#666',
										marginTop: pxSize(2),
									}}>
									NO.1809332273{' '}
								</Text>
								<Text
									style={{
										fontSize: 12,
										color: '#666',
										marginTop: pxSize(2),
									}}>
									2018-10-03 10:34:32
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
									800.00元
								</Text>
								<Text style={{color: '#50DBC6'}}>代发货</Text>
							</View>
						</View>
					</TouchableHighlight>
					<View style={styles.orderList}>
						<View>
							<Text
								style={{
									fontSize: 16,
									fontWeight: 'bold',
									color: '#000',
									width: pxSize(220),
								}}>
								BOSE音箱一对
							</Text>
							<Text
								style={{
									fontSize: 12,
									color: '#666',
									marginTop: pxSize(2),
								}}>
								NO.1809332273{' '}
							</Text>
							<Text
								style={{
									fontSize: 12,
									color: '#666',
									marginTop: pxSize(2),
								}}>
								2018-10-03 10:34:32
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
								800.00元
							</Text>
							<Text style={{color: '#989898'}}>代发货</Text>
						</View>
					</View>
					<View style={styles.orderList}>
						<View>
							<Text style={{fontSize: 16, color: '#000'}}>
								BOSE音箱一对
							</Text>
							<Text
								style={{
									fontSize: 12,
									color: '#666',
									marginTop: pxSize(2),
								}}>
								NO.1809332273{' '}
							</Text>
							<Text
								style={{
									fontSize: 12,
									color: '#666',
									marginTop: pxSize(2),
								}}>
								2018-10-03 10:34:32
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
								800.00元
							</Text>
							<Text style={{color: '#666'}}>代发货</Text>
						</View>
					</View>
					<View style={styles.orderList}>
						<View>
							<Text style={{fontSize: 16, color: '#000'}}>
								BOSE音箱一对
							</Text>
							<Text
								style={{
									fontSize: 12,
									color: '#666',
									marginTop: pxSize(2),
								}}>
								NO.1809332273{' '}
							</Text>
							<Text
								style={{
									fontSize: 12,
									color: '#666',
									marginTop: pxSize(2),
								}}>
								2018-10-03 10:34:32
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
								800.00元
							</Text>
							<Text style={{color: '#666'}}>代发货</Text>
						</View>
					</View>
					<View style={styles.orderList}>
						<View>
							<Text style={{fontSize: 16, color: '#000'}}>
								BOSE音箱一对
							</Text>
							<Text
								style={{
									fontSize: 12,
									color: '#666',
									marginTop: pxSize(2),
								}}>
								NO.1809332273{' '}
							</Text>
							<Text
								style={{
									fontSize: 12,
									color: '#666',
									marginTop: pxSize(2),
								}}>
								2018-10-03 10:34:32
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
								800.00元
							</Text>
							<Text style={{color: '#666'}}>代发货</Text>
						</View>
					</View>
					<View style={styles.orderList}>
						<View>
							<Text style={{fontSize: 16, color: '#000'}}>
								BOSE音箱一对
							</Text>
							<Text
								style={{
									fontSize: 12,
									color: '#666',
									marginTop: pxSize(2),
								}}>
								NO.1809332273{' '}
							</Text>
							<Text
								style={{
									fontSize: 12,
									color: '#666',
									marginTop: pxSize(2),
								}}>
								2018-10-03 10:34:32
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
								800.00元
							</Text>
							<Text style={{color: '#666'}}>代发货</Text>
						</View>
					</View>
					<View style={styles.orderList}>
						<View>
							<Text style={{fontSize: 16, color: '#000'}}>
								BOSE音箱一对
							</Text>
							<Text
								style={{
									fontSize: 12,
									color: '#666',
									marginTop: pxSize(2),
								}}>
								NO.1809332273{' '}
							</Text>
							<Text
								style={{
									fontSize: 12,
									color: '#666',
									marginTop: pxSize(2),
								}}>
								2018-10-03 10:34:32
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
								800.00元
							</Text>
							<Text style={{color: '#666'}}>代发货</Text>
						</View>
					</View>
					<View style={styles.orderList}>
						<View>
							<Text style={{fontSize: 16, color: '#000'}}>
								BOSE音箱一对
							</Text>
							<Text
								style={{
									fontSize: 12,
									color: '#666',
									marginTop: pxSize(2),
								}}>
								NO.1809332273{' '}
							</Text>
							<Text
								style={{
									fontSize: 12,
									color: '#666',
									marginTop: pxSize(2),
								}}>
								2018-10-03 10:34:32
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
								800.00元
							</Text>
							<Text style={{color: '#666'}}>代发货</Text>
						</View>
					</View>
					<View style={styles.orderList}>
						<View>
							<Text style={{fontSize: 16, color: '#000'}}>
								BOSE音箱一对
							</Text>
							<Text
								style={{
									fontSize: 12,
									color: '#666',
									marginTop: pxSize(2),
								}}>
								NO.1809332273{' '}
							</Text>
							<Text
								style={{
									fontSize: 12,
									color: '#666',
									marginTop: pxSize(2),
								}}>
								2018-10-03 10:34:32
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
								800.00元
							</Text>
							<Text style={{color: '#666'}}>代发货</Text>
						</View>
					</View>
					<View style={[styles.orderList, {marginBottom: 70}]}>
						<View>
							<Text style={{fontSize: 16, color: '#000'}}>
								BOSE音箱一对
							</Text>
							<Text
								style={{
									fontSize: 12,
									color: '#666',
									marginTop: pxSize(2),
								}}>
								NO.1809332273{' '}
							</Text>
							<Text
								style={{
									fontSize: 12,
									color: '#666',
									marginTop: pxSize(2),
								}}>
								2018-10-03 10:34:32
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
								800.00
							</Text>
							<Text style={{color: '#666'}}>代发货</Text>
						</View>
					</View>
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
