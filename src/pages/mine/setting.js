import {
	Text,
	SafeAreaView,
	ScrollView,
	Image,
	View,
	StyleSheet,
	TouchableHighlight,
	TextInput,
	Switch,
} from 'react-native';
import {Button, Modal, Provider} from '@ant-design/react-native';
import React from 'react';
import pxSize from '../../assets/js/pxSize';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
Icon.loadFont();
export default class Setting extends React.Component {
	// 进入银行卡
	GotoBankCard = () => {
		this.props.navigation.navigate('BankCardScreen');
	};
	// 进入支付面膜
	GotoPayPassword = () => {
		this.props.navigation.navigate('PayPassowrdScreen');
	};
	// 进入登录密码
	GotoPassword = () => {
		this.props.navigation.navigate('PassowrdScreen');
	};
	render() {
		return (
			<View
				style={{
					backgroundColor: '#fff',
				}}>
				<View style={styles.listBox}>
					<Text>头像</Text>
					<Image
						style={{
							width: pxSize(50),
							height: pxSize(50),
							borderRadius: 50,
						}}
						source={require('../../assets/image/1.jpeg')}
					/>
				</View>
				<View style={styles.listBox}>
					<Text>昵称</Text>
					<Text style={{}}>我爱老虎油</Text>
				</View>
				<View style={styles.listBox}>
					<Text>绑定手机号</Text>
					<Text style={{}}>15223681474</Text>
				</View>
				<View style={styles.listBox}>
					<Text>真实姓名</Text>
					<Text style={{}}>老张</Text>
				</View>
				<View style={styles.listBox}>
					<Text>支付宝账号</Text>
					<Text style={{}}>wwww@qq.com</Text>
				</View>
				<View style={styles.listBox}>
					<Text>银行卡绑定</Text>
					<TouchableHighlight onPress={() => this.GotoBankCard()}>
						<Icon name="chevron-forward" size={20} color="#000" />
					</TouchableHighlight>
				</View>
				<View style={styles.listBox}>
					<Text>登录密码修改</Text>
					<TouchableHighlight onPress={() => this.GotoPassword()}>
						<Icon name="chevron-forward" size={20} color="#000" />
					</TouchableHighlight>
				</View>
				<View style={styles.listBox}>
					<Text>支付密码</Text>
					<TouchableHighlight onPress={() => this.GotoPayPassword()}>
						<Icon name="chevron-forward" size={20} color="#000" />
					</TouchableHighlight>
				</View>
				<View style={[styles.listBox]}>
					<Text>退出登录</Text>
					<Icon name="chevron-forward" size={20} color="#000" />
				</View>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	listBox: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: pxSize(15),
		paddingRight: pxSize(15),
		alignItems: 'center',
		paddingTop: pxSize(10),
		paddingBottom: pxSize(10),
		borderBottomWidth: 1,
		borderBottomColor: '#f5f5f5',
	},
});
