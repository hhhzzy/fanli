import {
	Text,
	Button,
	View,
	TouchableHighlight,
	SafeAreaView,
	StyleSheet,
	Image,
	TextInput,
} from 'react-native';
import React from 'react';
import {AuthContext} from '../../assets/js/Context';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import pxSize from '../../assets/js/pxSize';
Icon.loadFont();
export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// userToken: props.userToken,
		};
	}

	static contextType = AuthContext; // 才可以使用 this.context
	login = () => {
		const {signIn} = this.context;
		// 把用户名和密码传到app.js中
		signIn({userName: 'hzy', password: 'hzy'});
	};
	// 去注册
	GotoReg = () => {
		this.props.navigation.navigate('Register');
	};
	render() {
		return (
			<View style={{flex: 1}}>
				<View style={{backgroundColor: '#fff', flex: 1}}>
					<View style={styles.listInput}>
						<Text style={styles.txt}>手机号</Text>
						<TextInput
							style={styles.ipt}
							placeholder="你的手机号"
						/>
					</View>
					<View style={styles.listInput}>
						<Text style={styles.txt}>登录密码</Text>
						<TextInput
							style={styles.ipt}
							placeholder="6-12位字母、数字或组合"
						/>
					</View>
					<TouchableHighlight onPress={() => this.GotoReg()}>
						<Text
							style={{
								color: '#666',
								fontSize: 12,
								textAlign: 'right',
								paddingRight: pxSize(25),
								marginTop: pxSize(5),
							}}>
							没用账户，立即注册
						</Text>
					</TouchableHighlight>
				</View>
				<TouchableHighlight onPress={() => this.login()}>
					<View style={styles.footerBox}>
						<Text style={styles.footerBtn}>立即登录</Text>
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
