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
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();

export default class OrderList extends React.Component {
	render() {
		return (
			<SafeAreaView style={{flex: 1}}>
				<ScrollView>
					<View style={styles.addressBox}>
						<Image
							style={{
								width: pxSize(28),
								height: pxSize(28),
								marginTop: pxSize(13),
								marginLeft: pxSize(13),
								marginRight: pxSize(13),
							}}
							source={require('../../assets/image/address.png')}
						/>
						<View>
							<View
								style={{
									flexDirection: 'row',
									alignItems: 'flex-end',
								}}>
								<Text style={{color: '#3A3A3A', fontSize: 14}}>
									王大头
								</Text>
								<Text
									style={{
										fontSize: 12,
										color: '#989898',
										marginLeft: 2,
									}}>
									13187490192
								</Text>
							</View>
							<Text
								style={{
									flexWrap: 'wrap',
									width: pxSize(250),
									fontSize: 12,
									color: '#3A3A3A',
								}}>
								重庆市北碚区那山政格力富丽雅重庆市北碚区那
								山政格力富丽雅
							</Text>
						</View>
						<Icon
							style={{
								color: '#000000',
								alignSelf: 'center',
							}}
							name="ios-chevron-forward"
							size={20}
							color="#000000"
						/>
					</View>
					<View style={styles.orderList}>
						<Text
							style={{
								color: '#3A3A3A',
								fontSize: 14,
								fontWeight: 'bold',
								paddingTop: pxSize(10),
								paddingBottom: pxSize(10),
								paddingLeft: pxSize(15),
								borderBottomWidth: 1,
								borderBottomColor: '#F5F5F5',
							}}>
							共五件商品
						</Text>
						<View style={styles.list}>
							<Image
								style={{
									width: pxSize(76),
									height: pxSize(62),
									marginRight: pxSize(5),
								}}
								source={require('../../assets/image/1.jpeg')}
							/>
							<View>
								<Text
									style={{
										width: pxSize(215),
										color: '#3A3A3A',
										fontSize: 14,
									}}>
									重庆市北碚区那山政格力富丽雅那山政格力富丽
								</Text>
								<View
									style={{
										flexDirection: 'row',
										justifyContent: 'space-between',
										marginTop: pxSize(6),
									}}>
									<Text
										style={{
											fontSize: 14,
											color: '#F12210',
											fontWeight: 'bold',
										}}>
										￥3900.00
									</Text>
									<Text
										style={{
											color: '#9D9D9D',
											fontSize: 14,
										}}>
										X1
									</Text>
								</View>
							</View>
						</View>
						<View style={styles.list}>
							<Image
								style={{
									width: pxSize(76),
									height: pxSize(62),
									marginRight: pxSize(5),
								}}
								source={require('../../assets/image/1.jpeg')}
							/>
							<View>
								<Text
									style={{
										width: pxSize(215),
										color: '#3A3A3A',
										fontSize: 14,
									}}>
									重庆市北碚区那山政格力富丽雅那山政格力富丽
								</Text>
								<View
									style={{
										flexDirection: 'row',
										justifyContent: 'space-between',
										marginTop: pxSize(6),
									}}>
									<Text
										style={{
											fontSize: 14,
											color: '#F12210',
											fontWeight: 'bold',
										}}>
										￥3900.00
									</Text>
									<Text
										style={{
											color: '#9D9D9D',
											fontSize: 14,
										}}>
										X1
									</Text>
								</View>
							</View>
						</View>
						<View style={styles.list}>
							<Image
								style={{
									width: pxSize(76),
									height: pxSize(62),
									marginRight: pxSize(5),
								}}
								source={require('../../assets/image/1.jpeg')}
							/>
							<View>
								<Text
									style={{
										width: pxSize(215),
										color: '#3A3A3A',
										fontSize: 14,
									}}>
									重庆市北碚区那山政格力富丽雅那山政格力富丽
								</Text>
								<View
									style={{
										flexDirection: 'row',
										justifyContent: 'space-between',
										marginTop: pxSize(6),
									}}>
									<Text
										style={{
											fontSize: 14,
											color: '#F12210',
											fontWeight: 'bold',
										}}>
										￥3900.00
									</Text>
									<Text
										style={{
											color: '#9D9D9D',
											fontSize: 14,
										}}>
										X1
									</Text>
								</View>
							</View>
						</View>
						<View style={styles.list}>
							<Image
								style={{
									width: pxSize(76),
									height: pxSize(62),
									marginRight: pxSize(5),
								}}
								source={require('../../assets/image/1.jpeg')}
							/>
							<View>
								<Text
									style={{
										width: pxSize(215),
										color: '#3A3A3A',
										fontSize: 14,
									}}>
									重庆市北碚区那山政格力富丽雅那山政格力富丽
								</Text>
								<View
									style={{
										flexDirection: 'row',
										justifyContent: 'space-between',
										marginTop: pxSize(6),
									}}>
									<Text
										style={{
											fontSize: 14,
											color: '#F12210',
											fontWeight: 'bold',
										}}>
										￥3900.00
									</Text>
									<Text
										style={{
											color: '#9D9D9D',
											fontSize: 14,
										}}>
										X1
									</Text>
								</View>
							</View>
						</View>
						<View style={styles.list}>
							<Image
								style={{
									width: pxSize(76),
									height: pxSize(62),
									marginRight: pxSize(5),
								}}
								source={require('../../assets/image/1.jpeg')}
							/>
							<View>
								<Text
									style={{
										width: pxSize(215),
										color: '#3A3A3A',
										fontSize: 14,
									}}>
									重庆市北碚区那山政格力富丽雅那山政格力富丽
								</Text>
								<View
									style={{
										flexDirection: 'row',
										justifyContent: 'space-between',
										marginTop: pxSize(6),
									}}>
									<Text
										style={{
											fontSize: 14,
											color: '#F12210',
											fontWeight: 'bold',
										}}>
										￥3900.00
									</Text>
									<Text
										style={{
											color: '#9D9D9D',
											fontSize: 14,
										}}>
										X1
									</Text>
								</View>
							</View>
						</View>
						<View style={styles.list}>
							<Image
								style={{
									width: pxSize(76),
									height: pxSize(62),
									marginRight: pxSize(5),
								}}
								source={require('../../assets/image/1.jpeg')}
							/>
							<View>
								<Text
									style={{
										width: pxSize(215),
										color: '#3A3A3A',
										fontSize: 14,
									}}>
									重庆市北碚区那山政格力富丽雅那山政格力富丽
								</Text>
								<View
									style={{
										flexDirection: 'row',
										justifyContent: 'space-between',
										marginTop: pxSize(6),
									}}>
									<Text
										style={{
											fontSize: 14,
											color: '#F12210',
											fontWeight: 'bold',
										}}>
										￥3900.00
									</Text>
									<Text
										style={{
											color: '#9D9D9D',
											fontSize: 14,
										}}>
										X1
									</Text>
								</View>
							</View>
						</View>
						<View style={styles.list}>
							<Image
								style={{
									width: pxSize(76),
									height: pxSize(62),
									marginRight: pxSize(5),
								}}
								source={require('../../assets/image/1.jpeg')}
							/>
							<View>
								<Text
									style={{
										width: pxSize(215),
										color: '#3A3A3A',
										fontSize: 14,
									}}>
									重庆市北碚区那山政格力富丽雅那山政格力富丽
								</Text>
								<View
									style={{
										flexDirection: 'row',
										justifyContent: 'space-between',
										marginTop: pxSize(6),
									}}>
									<Text
										style={{
											fontSize: 14,
											color: '#F12210',
											fontWeight: 'bold',
										}}>
										￥3900.00
									</Text>
									<Text
										style={{
											color: '#9D9D9D',
											fontSize: 14,
										}}>
										X1
									</Text>
								</View>
							</View>
						</View>
					</View>
					<View style={styles.bottomBox}>
						<Text style={{fontSize: 12, color: '#989898'}}>
							共5件
						</Text>
						<Text
							style={{
								fontSize: 12,
								color: '#3A3A3A',
								marginLeft: pxSize(3),
								marginRight: pxSize(1),
							}}>
							小计：
						</Text>
						<Text
							style={{
								fontSize: 12,
								color: '#F12210',
								fontWeight: 'bold',
							}}>
							￥1900.00
						</Text>
					</View>
				</ScrollView>
				<TouchableHighlight onPress={() => this.NowBuy()}>
					<View style={styles.footerBox}>
						<Text style={styles.footerBtn}>提交订单</Text>
					</View>
				</TouchableHighlight>
			</SafeAreaView>
		);
	}
}
const styles = StyleSheet.create({
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
	addressBox: {
		flexDirection: 'row',
		paddingTop: pxSize(15),
		paddingBottom: pxSize(15),
		marginLeft: pxSize(15),
		marginRight: pxSize(15),
		marginTop: pxSize(10),
		backgroundColor: '#fff',
		borderRadius: 5,
	},
	orderList: {
		marginLeft: pxSize(15),
		marginRight: pxSize(15),
		backgroundColor: '#fff',
		borderRadius: 5,
		marginTop: pxSize(12),
		borderTopRightRadius: 5,
		borderTopLeftRadius: 5,
	},
	list: {
		paddingLeft: pxSize(15),
		paddingRight: pxSize(10),
		paddingBottom: pxSize(15),
		paddingTop: pxSize(15),
		flexDirection: 'row',
		borderBottomColor: '#F5F5F5',
		borderBottomWidth: 1,
	},
	bottomBox: {
		height: pxSize(40),
		backgroundColor: '#fff',
		marginLeft: pxSize(15),
		marginRight: pxSize(15),
		borderBottomRightRadius: 5,
		borderBottomLeftRadius: 5,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		paddingRight: pxSize(18),
	},
});
