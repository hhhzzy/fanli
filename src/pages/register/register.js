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
	Alert,
} from 'react-native';
import React from 'react';
import {AuthContext} from '../../assets/js/Context';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import pxSize from '../../assets/js/pxSize';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import http from '../../assets/js/http';
Icon.loadFont();
export default class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			telePhone: '15223681474',
			nickName: '黄照阳',
			loginPassWord: '123456',
			reLoginPassword: '123456',
			tranPassWord: '123456',
			reTranPassWord: '123456',
			recommendCode: '1111',
		};
		console.log(props, '222');
	}
	onChangeTel = (value) => {
		this.setState({
			telePhone: value,
		});
	};
	onChangePwd = (value) => {
		this.setState({
			loginPassWord: value,
		});
	};
	onChangeRePwd = (value) => {
		this.setState({
			reLoginPassword: value,
		});
	};
	onChangeNick = (value) => {
		this.setState({
			nickName: value,
		});
	};

	onChangeReTrPwd = (value) => {
		this.setState({
			tranPassWord: value,
		});
	};
	onChangeReReTrPwd = (value) => {
		this.setState({
			reTranPassWord: value,
		});
	};
	onChangeReRec = (value) => {
		this.setState({
			recommendCode: value,
		});
	};
	register = () => {
		if (!/^1[3456789]\d{9}$/.test(this.state.telePhone)) {
			Alert.alert('提示', '请输入正确手机号', [
				{
					text: '确定',
				},
			]);
			return;
		}
		http({
			method: 'post',
			url: 'regist',
			data: this.state,
		}).then((res) => {
			if (res.data.code == 1) {
				Alert.alert('提示', '注册成功，去登录', [
					{
						text: '确定',
						onPress: () => {
							this.props.navigation.navigate('Login');
						},
					},
				]);
			}
		});
		console.log(this.state);
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
								value={this.state.telePhone}
								onChangeText={(value) =>
									this.onChangeTel(value)
								}
							/>
						</View>
						<View style={styles.listInput}>
							<Text style={styles.txt}>昵称</Text>
							<TextInput
								style={styles.ipt}
								placeholder="请输入昵称"
								value={this.state.nickName}
								onChangeText={(value) =>
									this.onChangeNick(value)
								}
							/>
						</View>
						<View style={styles.listInput}>
							<Text style={styles.txt}>登录密码</Text>
							<TextInput
								style={styles.ipt}
								placeholder="6-12位字母、数字或组合"
								value={this.state.loginPassWord}
								onChangeText={(value) =>
									this.onChangePwd(value)
								}
							/>
						</View>
						<View style={styles.listInput}>
							<Text style={styles.txt}>确认登录密码</Text>
							<TextInput
								style={styles.ipt}
								placeholder="6-12位字母、数字或组合"
								value={this.state.reLoginPassword}
								onChangeText={(value) =>
									this.onChangeRePwd(value)
								}
							/>
						</View>
						<View style={styles.listInput}>
							<Text style={styles.txt}>交易密码</Text>
							<TextInput
								style={styles.ipt}
								placeholder="6-12位字母、数字或组合"
								value={this.state.tranPassWord}
								onChangeText={(value) =>
									this.onChangeReTrPwd(value)
								}
							/>
						</View>
						<View style={styles.listInput}>
							<Text style={styles.txt}>确认交易密码</Text>
							<TextInput
								style={styles.ipt}
								placeholder="6-12位字母、数字或组合"
								value={this.state.reTranPassWord}
								onChangeText={(value) =>
									this.onChangeReReTrPwd(value)
								}
							/>
						</View>
						<View style={styles.listInput}>
							<Text style={styles.txt}>邀请码</Text>
							<TextInput
								style={styles.ipt}
								placeholder="请输入邀请码"
								value={this.state.recommendCode}
								onChangeText={(value) =>
									this.onChangeReRec(value)
								}
							/>
						</View>
					</View>
				</KeyboardAwareScrollView>
				<TouchableHighlight onPress={() => this.register()}>
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
