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
import HTMLView from 'react-native-htmlview';
Icon.loadFont();
AntDesign.loadFont();
export default class Info extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isEnabled: false,
			info: {},
			id: this.props.route.params.id,
		};
	}
	GetInfo = () => {
		http({
			method: 'get',
			url: 'personal/queryMessageDetail?messageId=' + this.state.id,
		}).then((res) => {
			console.log(res);
			this.setState({
				info: res.data.data,
			});
		});
	};
	async componentDidMount() {
		// 获取数据
		this.GetInfo();
	}
	render() {
		return (
			<SafeAreaView
				style={{
					flex: 1,
					backgroundColor: '#fff',
					paddingLeft: pxSize(15),
					paddingRight: pxSize(15),
				}}>
				<Text
					style={{
						fontSize: 18,
						fontWeight: 'bold',
						marginBottom: 10,
						marginTop: 10,
					}}>
					{this.state.info.titleName}
				</Text>
				<HTMLView value={this.state.info.titleContent} />
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
