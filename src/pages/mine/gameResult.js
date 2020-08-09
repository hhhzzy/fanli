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
export default class GameResult extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isEnabled: false,
			list: [],
			type: this.props.route.params.type,
		};
	}
	GetList = () => {
		http({
			method: 'get',
			url:
				'personal/getGamePeriodList?offset=1&limit=1500&gameType=' +
				this.state.type,
		}).then((res) => {
			console.log(res);
			this.setState({
				list: res.data.rows,
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
							key={item.id}
							onPress={() => this.GotoDetail(item.id)}>
							<View style={styles.messageList}>
								<Text style={{fontSize: 16, color: '#000'}}>
									第{item.periodsNumber}期
								</Text>
								<Text
									style={{
										fontSize: 16,
										color: '#000',
										marginTop: pxSize(2),
									}}>
									{item.openResult ? item.openResult : '---'}
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
		flexDirection: 'row',
		padding: pxSize(15),
		marginLeft: pxSize(15),
		marginRight: pxSize(15),
		marginTop: pxSize(12),
	},
});
