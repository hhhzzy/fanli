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
export default class BankCard extends React.Component {
	render() {
		return (
			<View style={{flex: 1}}>
				<ScrollView>
					<View style={styles.addressBox}>
						<Text style={{fontSize: 16, width: pxSize(100)}}>
							银行名称：
						</Text>
						<TextInput
							style={{
								fontSize: 16,
								padding: 0,
							}}
							placeholder="请输入银行名称"
						/>
					</View>
					<View style={styles.addressBox}>
						<Text style={{fontSize: 16, width: pxSize(100)}}>
							银行卡号：
						</Text>
						<TextInput
							style={{
								fontSize: 16,
								padding: 0,
							}}
							placeholder="请输入银行卡号"
						/>
					</View>
					<View style={styles.addressBox}>
						<Text style={{fontSize: 16, width: pxSize(100)}}>
							户名：
						</Text>
						<TextInput
							style={{
								fontSize: 16,
								padding: 0,
							}}
							placeholder="请输入户名"
						/>
					</View>
					<View style={styles.addressBox}>
						<Text style={{fontSize: 16, width: pxSize(100)}}>
							开户行名称：
						</Text>
						<TextInput
							style={{
								fontSize: 16,
								padding: 0,
							}}
							placeholder="请输入开户行名称"
						/>
					</View>
					<Text style={{padding: pxSize(15), color: '#9D9D9D'}}>
						请填写真实资料，有助于提升账户安全性
					</Text>
				</ScrollView>
				<TouchableHighlight>
					<View style={styles.footerBox}>
						<Text style={styles.footerBtn}>保存</Text>
					</View>
				</TouchableHighlight>
			</View>
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
		paddingLeft: pxSize(15),
		paddingRight: pxSize(15),
		backgroundColor: '#fff',
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: '#f5f5f5',
		height: pxSize(50),
	},
});
