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
Icon.loadFont();
AntDesign.loadFont();
export default class Invite extends React.Component {
	render() {
		const deviceWidthDp = Dimensions.get('window').height;
		return (
			<View style={{flex: 1}}>
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
						resizeMode: 'stretch',
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
							marginTop: pxSize(310),
						}}
						source={require('../../assets/image/1.jpeg')}
					/>
					<Text>{deviceWidthDp}</Text>
				</View>
			</View>
		);
	}
}
