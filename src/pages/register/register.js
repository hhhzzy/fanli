import {
	Text,
	Button,
	View,
	TouchableHighlight,
	SafeAreaView,
	StyleSheet,
	Image,
	TextInput,
	Platform,
	KeyboardAvoidingView,
	ScrollView,
} from 'react-native';
import React from 'react';
import {AuthContext} from '../../assets/js/Context';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import pxSize from '../../assets/js/pxSize';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
Icon.loadFont();
export default class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// userToken: props.userToken,
		};
		console.log(props, '222');
	}
	login = () => {
		console.log(11111);
	};
	render() {
		return (
			<View style={{flex: 1}}>
				<KeyboardAwareScrollView>
					<LinearGradient
						start={{x: 0, y: 0}}
						end={{x: 0, y: 1}}
						style={{height: pxSize(140)}}
						colors={['#9BD6D2', '#4CDBC5']}>
						<View style={styles.topHeader}>
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
									账号注册
								</Text>
								<Text style={{fontSize: 14, color: '#fff'}}>
									请输入您的身份信息
								</Text>
							</View>
						</View>
					</LinearGradient>
					<View style={{backgroundColor: '#fff', flex: 1}}>
						<View style={styles.listInput}>
							<Text style={styles.txt}>手机号</Text>
							<TextInput
								style={styles.ipt}
								placeholder="你的手机号"
							/>
						</View>
						<View style={styles.listInput}>
							<Text style={styles.txt}>昵称</Text>
							<TextInput
								style={styles.ipt}
								placeholder="请输入昵称"
							/>
						</View>
						<View style={styles.listInput}>
							<Text style={styles.txt}>登录密码</Text>
							<TextInput
								style={styles.ipt}
								placeholder="6-12位字母、数字或组合"
							/>
						</View>
						<View style={styles.listInput}>
							<Text style={styles.txt}>确认登录密码</Text>
							<TextInput
								style={styles.ipt}
								placeholder="6-12位字母、数字或组合"
							/>
						</View>
						<View style={styles.listInput}>
							<Text style={styles.txt}>交易密码</Text>
							<TextInput
								style={styles.ipt}
								placeholder="6-12位字母、数字或组合"
							/>
						</View>
						<View style={styles.listInput}>
							<Text style={styles.txt}>确认交易密码</Text>
							<TextInput
								style={styles.ipt}
								placeholder="6-12位字母、数字或组合"
							/>
						</View>
						<View style={styles.listInput}>
							<Text style={styles.txt}>邀请码</Text>
							<TextInput
								style={styles.ipt}
								placeholder="请输入邀请码"
							/>
						</View>
					</View>
				</KeyboardAwareScrollView>
				<TouchableHighlight onPress={() => this.login()}>
					<View style={styles.footerBox}>
						<Text style={styles.footerBtn}>立即注册</Text>
					</View>
				</TouchableHighlight>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	topHeader: {
		flexDirection: 'row',
		marginLeft: pxSize(15),
		marginRight: pxSize(15),
		marginTop: pxSize(60),
	},
	headerImg: {
		width: pxSize(52),
		height: pxSize(52),
		marginLeft: pxSize(20),
	},
	headerName: {
		marginLeft: pxSize(10),
	},
	listInput: {
		paddingLeft: pxSize(25),
		paddingRight: pxSize(25),
	},
	txt: {
		fontSize: 14,
		color: '#222222',
		marginTop: pxSize(14),
		marginBottom: pxSize(5),
	},
	ipt: {
		borderBottomColor: '#F5F5F5',
		borderBottomWidth: 1,
		height: pxSize(35),
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
