import {
	View,
	StyleSheet,
	Text,
	SafeAreaView,
	ScrollView,
	Image,
	TouchableHighlight,
	ImageBackground,
} from 'react-native';
import React from 'react';

import pxSize from '../../assets/js/pxSize';

import Swiper from 'react-native-swiper';
import http from '../../assets/js/http';
import url from '../../assets/js/url';

export default class Goods extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			bannerList: [],
			goodsType: [],
			currentId: '',
			goodsList: [],
			bannerVisible: false,
		};
	}
	// 获取商品页轮播图
	GetBannerList = () => {
		http({
			method: 'get',
			url: 'index/getRoundPicture?type=2',
		}).then((res) => {
			console.log(res);
			if (res.data.data && res.data.data.length) {
				res.data.data.map((item) => {
					item.imgUrl =
						url +
						'service/upload/getImg?imgUrl=' +
						encodeURIComponent(item.imgUrl);
					return item;
				});
			}
			this.setState({
				bannerList: res.data.data,
			});
			setTimeout(() => {
				this.setState({bannerVisible: true});
			}, 10);
		});
	};
	// 获取商品类别
	GetGoodsType = () => {
		http({
			method: 'get',
			url: 'index/getProductType',
		}).then((res) => {
			console.log(res);
			this.setState({
				goodsType: res.data.data,
			});
		});
	};
	// 获取商品列表
	GetGoods = (id = 0) => {
		this.setState({
			currentId: id,
		});
		http({
			method: 'get',
			url: 'index/getProductList?offset=1&limit=100&productTypeId=' + id,
		}).then((res) => {
			console.log(res);
			if (res.data.rows && res.data.rows.length) {
				res.data.rows.map((item) => {
					item.imgUrl =
						url +
						'service/upload/getImg?imgUrl=' +
						encodeURIComponent(item.imgUrl);
					return item;
				});
			}

			console.log(res.data.rows);
			this.setState({goodsList: res.data.rows});
		});
	};
	componentDidMount() {
		// 获取首页轮播图
		this.GetBannerList();
		// 获取商品类别
		this.GetGoodsType();
		// 获取商品列表
		this.GetGoods();
	}

	GotoDetail = (item) => {
		this.props.navigation.navigate('GoodsDetailScreen', {id: item.id});
	};
	render() {
		return (
			<SafeAreaView>
				<ScrollView>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'center',
							height: pxSize(140),
						}}>
						<View style={{width: pxSize(345), height: pxSize(140)}}>
							{this.state.bannerVisible ? (
								<Swiper
									height={pxSize(200)} // 指定高度
									loop={true} // 是否开启循环
									showsButtons={false} // 设置控制按钮(左右两侧的箭头)是否可见
									index={0}
									autoplay={true} // 是否自动跳转
									horizontal={true} // 是否水平滚动
								>
									{this.state.bannerList.length !== 0 ? (
										this.state.bannerList.map((item) => (
											<View
												style={[
													styles.containerHorizontal,
												]}
												key={item.id}>
												<ImageBackground
													source={{uri: item.imgUrl}}
													style={{
														width: pxSize(345),
														height: pxSize(200),
													}}
												/>
											</View>
										))
									) : (
										<View />
									)}
								</Swiper>
							) : (
								<Text />
							)}
						</View>
					</View>
					<ScrollView
						horizontal={true}
						style={{
							marginLeft: pxSize(15),
							marginRight: pxSize(15),
						}}>
						<View style={styles.navBox}>
							<TouchableHighlight
								onPress={() => this.GetGoods(0)}>
								<Text
									style={[
										styles.navTxt,
										this.state.currentId == 0
											? styles.textCurrent
											: '',
									]}>
									全部
								</Text>
							</TouchableHighlight>
							{this.state.goodsType.map((item) => (
								<TouchableHighlight
									key={item.id}
									onPress={() => this.GetGoods(item.id)}>
									<Text
										style={[
											styles.navTxt,
											this.state.currentId == item.id
												? styles.textCurrent
												: '',
										]}>
										{item.productTypeName}
									</Text>
								</TouchableHighlight>
							))}
						</View>
					</ScrollView>
					<View style={styles.goodsBox}>
						<View style={styles.goodsList}>
							{this.state.goodsList.map((item) => (
								<TouchableHighlight
									onPress={() => this.GotoDetail(item)}
									key={item.id}>
									<View style={styles.goods}>
										<Image
											style={styles.goodsImg}
											source={{uri: item.imgUrl}}
										/>
										<Text style={styles.goodsName}>
											{item.productName}
										</Text>
										<Text
											style={[
												styles.goodsName,
												{
													color: '#F12210',
													fontWeight: 'bold',
													fontSize: 14,
												},
											]}>
											￥{item.productMoney / 100}
										</Text>
									</View>
								</TouchableHighlight>
							))}
						</View>
					</View>
				</ScrollView>
			</SafeAreaView>
		);
	}
}
const styles = StyleSheet.create({
	box: {
		backgroundColor: '#f5f5f5',
	},
	wrapper: {
		backgroundColor: '#000',
	},
	containerHorizontal: {
		height: pxSize(200),
		width: pxSize(350),
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	image: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'center',
		width: pxSize(500),
		height: pxSize(100),
	},
	navBox: {
		flexDirection: 'row',
		marginTop: pxSize(15),
		height: pxSize(28),
		alignItems: 'center',
	},
	navTxt: {
		fontSize: 15,
		color: '#4D4D4D',
		fontWeight: 'bold',
		marginRight: pxSize(28),
	},
	textCurrent: {
		fontSize: 20,
	},
	goodsBox: {
		marginTop: pxSize(15),
		marginLeft: pxSize(15),
		marginRight: pxSize(15),
		marginBottom: pxSize(14),
	},
	goodsList: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		flexWrap: 'wrap',
		marginTop: pxSize(14),
	},
	goodsImg: {
		width: pxSize(166),
		height: pxSize(160),
	},
	goods: {
		width: pxSize(166),
		height: pxSize(210),
		backgroundColor: '#fff',
		marginBottom: pxSize(12),
		borderRadius: pxSize(5),
	},
	goodsName: {
		color: '#2B2B2B',
		fontSize: 12,
		paddingLeft: pxSize(10),
		marginTop: pxSize(5),
		overflow: 'hidden',
		height: pxSize(18),
	},
});
