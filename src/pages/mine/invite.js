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
	ImageBackground,
	Dimensions,
} from 'react-native';
import {Button, Modal, Provider} from '@ant-design/react-native';
import React from 'react';

import pxSize from '../../assets/js/pxSize';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import http from '../../assets/js/http';
import AsyncStorage from '@react-native-community/async-storage';
Icon.loadFont();
AntDesign.loadFont();
export default class Invite extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userInfo: {},
		};
	}
	GetUser = async () => {
		let usr = JSON.parse(await AsyncStorage.getItem('userInfo'));
		http({
			method: 'get',
			url: 'personal/getMemberInfo?memberId=' + usr.id,
		}).then((res) => {
			console.log(res, 999);
			this.setState({
				userInfo: res.data.data,
			});
		});
	};
	componentDidMount() {
		// 获取用户数据
		this.GetUser();
	}
	render() {
		return (
			<View style={{flex: 1, backgroundColor: '#63cc94'}}>
				{/* <ImageBackground
					style={{
						height: '100%',
						resizeMode: 'stretch',
						backgroundColor: 'transparent',
					}}
					source={require('../../assets/image/tj_bk.png')}
				/> */}
				<Image
					style={{
						resizeMode: 'cover',
						backgroundColor: 'transparent',
						position: 'absolute',
						width: '100%',
						height: pxSize(622),
					}}
					source={require('../../assets/image/tj_bk.png')}
				/>
				<View>
					<Image
						style={{
							width: pxSize(132),
							height: pxSize(132),
							marginLeft: pxSize(120),
							marginTop: pxSize(290),
						}}
						source={require('../../assets/image/1.jpeg')}
					/>
					<View
						style={{
							borderBottomColor: '#85D9AB',
							borderBottomWidth: 1,
							borderStyle: 'solid',
							marginTop: pxSize(10),
							width: pxSize(274),
							marginLeft: pxSize(52),
						}}
					/>
					<ImageBackground
						style={{
							width: pxSize(221),
							height: pxSize(42),
							marginLeft: pxSize(78),
							marginTop: pxSize(10),
						}}
						source={require('../../assets/image/bk.png')}>
						<Text
							style={{
								color: '#F5AB1D',
								fontSize: 30,
								textAlign: 'center',
							}}>
							{this.state.userInfo.recommendCode}
						</Text>
					</ImageBackground>
					<Text
						style={{
							textAlign: 'center',
							fontSize: 15,
							color: '#333333',
							marginTop: pxSize(5),
						}}>
						我的推广码
					</Text>
				</View>
				<View
					style={{
						position: 'absolute',
						bottom: 0,
						width: pxSize(350),
						height: pxSize(52),
						backgroundColor: '#fff',
						marginLeft: pxSize(13),
						alignItems: 'center',
						flexDirection: 'row',
						justifyContent: 'space-around',
					}}>
					<Text style={{fontSize: 19, color: '#137139'}}>
						我的链接
					</Text>
					<Text
						style={{
							width: pxSize(88),
							height: pxSize(34),
							borderStyle: 'solid',
							borderColor: '#137139',
							borderWidth: 1,
							borderRadius: 10,
							textAlign: 'center',
							fontSize: 19,
							color: '#137139',
							paddingTop: pxSize(5),
						}}>
						复制
					</Text>
				</View>
			</View>
		);
	}
}
