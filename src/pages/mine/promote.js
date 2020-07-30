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
Icon.loadFont();

export default class Promote extends React.Component {
	constructor(props) {
		super(props);
	}
	clear = () => {
		console.log(1);
	};
	render() {
		return (
			<>
				<LinearGradient
					start={{x: 0, y: 0}}
					end={{x: 0, y: 1}}
					style={{height: pxSize(80)}}
					colors={['#4CDBC5', '#4edac4']}>
					<View style={styles.topHeader}>
						<Image
							style={styles.headerImg}
							source={require('../../assets/image/header.png')}
						/>
						<View style={styles.headerName}>
							<Text
								style={{
									fontSize: 20,
									fontWeight: 'bold',
									color: '#fff',
									height: pxSize(28),
									alignItems: 'center',
									marginTop: pxSize(2),
								}}>
								我爱老虎油
							</Text>
							<Text style={{fontSize: 14, color: '#fff'}}>
								我的推荐码
							</Text>
						</View>
						<Image
							style={{
								width: pxSize(20),
								height: pxSize(20),
								marginLeft: 'auto',
								marginTop: pxSize(5),
							}}
							source={require('../../assets/image/share.png')}
						/>
					</View>
				</LinearGradient>
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
							直推会员
						</Text>
						<Text style={{color: '#222222', fontSize: 14}}>
							130人
						</Text>
					</View>
					<View>
						<View
							style={{
								width: pxSize(335),
								marginLeft: pxSize(20),
								marginTop: pxSize(10),
							}}>
							<SearchBar
								onCancel={this.clear}
								style={{
									height: pxSize(34),
									borderWidth: 0,
									backgroundColor: '#efeff4',
								}}
								placeholder="输入好友手机号进行搜索"
							/>
						</View>
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
									flex: 2,
								}}>
								手机号
							</Text>
							<Text
								style={{
									flex: 1,
									textAlign: 'center',
								}}>
								消费金额
							</Text>
							<Text
								style={{
									flex: 1,
									textAlign: 'center',
								}}>
								下级总数
							</Text>
							<Text
								style={{
									flex: 1.5,
									textAlign: 'center',
								}}>
								消费总金额
							</Text>
						</View>
						<View style={styles.listBox}>
							<Text
								style={{
									width: pxSize(100),
									textAlign: 'center',
									flex: 2,
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
							<Text
								style={{
									flex: 1.5,
									textAlign: 'center',
								}}>
								26156.55
							</Text>
						</View>
						<View style={styles.listBox}>
							<Text
								style={{
									width: pxSize(100),
									textAlign: 'center',
									flex: 2,
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
							<Text
								style={{
									flex: 1.5,
									textAlign: 'center',
								}}>
								26156.55
							</Text>
						</View>
						<View style={styles.listBox}>
							<Text
								style={{
									width: pxSize(100),
									textAlign: 'center',
									flex: 2,
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
							<Text
								style={{
									flex: 1.5,
									textAlign: 'center',
								}}>
								26156.55
							</Text>
						</View>
						<View style={styles.listBox}>
							<Text
								style={{
									width: pxSize(100),
									textAlign: 'center',
									flex: 2,
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
							<Text
								style={{
									flex: 1.5,
									textAlign: 'center',
								}}>
								26156.55
							</Text>
						</View>
						<View style={styles.listBox}>
							<Text
								style={{
									width: pxSize(100),
									textAlign: 'center',
									flex: 2,
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
							<Text
								style={{
									flex: 1.5,
									textAlign: 'center',
								}}>
								26156.55
							</Text>
						</View>
						<View style={styles.listBox}>
							<Text
								style={{
									width: pxSize(100),
									textAlign: 'center',
									flex: 2,
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
							<Text
								style={{
									flex: 1.5,
									textAlign: 'center',
								}}>
								26156.55
							</Text>
						</View>
						<View style={styles.listBox}>
							<Text
								style={{
									width: pxSize(100),
									textAlign: 'center',
									flex: 2,
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
							<Text
								style={{
									flex: 1.5,
									textAlign: 'center',
								}}>
								26156.55
							</Text>
						</View>
						<View style={styles.listBox}>
							<Text
								style={{
									width: pxSize(100),
									textAlign: 'center',
									flex: 2,
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
							<Text
								style={{
									flex: 1.5,
									textAlign: 'center',
								}}>
								26156.55
							</Text>
						</View>
						<View style={styles.listBox}>
							<Text
								style={{
									width: pxSize(100),
									textAlign: 'center',
									flex: 2,
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
							<Text
								style={{
									flex: 1.5,
									textAlign: 'center',
								}}>
								26156.55
							</Text>
						</View>
						<View style={styles.listBox}>
							<Text
								style={{
									width: pxSize(100),
									textAlign: 'center',
									flex: 2,
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
							<Text
								style={{
									flex: 1.5,
									textAlign: 'center',
								}}>
								26156.55
							</Text>
						</View>
					</View>
				</ScrollView>
			</>
		);
	}
}
const styles = StyleSheet.create({
	topHeader: {
		flexDirection: 'row',
		marginLeft: pxSize(15),
		marginRight: pxSize(15),
	},
	headerImg: {
		width: pxSize(52),
		height: pxSize(52),
		marginLeft: pxSize(20),
	},
	headerName: {
		marginLeft: pxSize(10),
	},
	tjBox: {
		height: pxSize(110),
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
