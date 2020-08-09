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
import LinearGradient from 'react-native-linear-gradient';
import http from '../../assets/js/http';
Icon.loadFont();
AntDesign.loadFont();
export default class Yj extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isEnabled: false,
			list: [],
		};
	}
	GetList = () => {
		http({
			method: 'get',
			url: 'personal/queryMessage?messageType=2',
		}).then((res) => {
			console.log(res);
			this.setState({
				list: res.data.data,
			});
		});
	};
	GotoDetail = (id) => {
		this.props.navigation.navigate('InfoScreen', {id: id});
	};
	async componentDidMount() {
		// 获取数据
		this.GetList();
	}
	render() {
		return (
			<SafeAreaView style={{flex: 1}}>
				<ScrollView>
					{this.state.list.map((item) => (
						<TouchableHighlight
							onPress={() => this.GotoDetail(item.id)}
							key={item.id}>
							<View style={styles.messageList}>
								<Text style={{fontSize: 16, color: '#000'}}>
									{item.titleName}
								</Text>
								<Text
									style={{
										fontSize: 14,
										color: '#BEBDBD',
										marginTop: pxSize(2),
									}}>
									{item.createTime}
								</Text>
							</View>
						</TouchableHighlight>
					))}
				</ScrollView>
			</SafeAreaView>
		);
	}
}
const styles = StyleSheet.create({
	messageList: {
		justifyContent: 'space-between',
		backgroundColor: '#fff',
		padding: pxSize(15),
		marginLeft: pxSize(15),
		marginRight: pxSize(15),
		marginTop: pxSize(12),
	},
});
