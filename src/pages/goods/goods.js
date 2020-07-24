import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableHighlight,
} from 'react-native';
import React from 'react';

import pxSize from '../../assets/js/pxSize';

import Swiper from 'react-native-swiper';
export default class Goods extends React.Component {
  GotoDetail = () => {
    this.props.navigation.navigate('GoodsDetailScreen');
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
              <Swiper
                height={pxSize(200)} // 指定高度
                loop={true} // 是否开启循环
                showsButtons={false} // 设置控制按钮(左右两侧的箭头)是否可见
                index={0}
                autoplay={true} // 是否自动跳转
                horizontal={true} // 是否水平滚动
              >
                <View
                  style={[
                    styles.containerHorizontal,
                    {backgroundColor: 'blue'},
                  ]}>
                  <Text>Carousel 1</Text>
                </View>
                <View
                  style={[
                    styles.containerHorizontal,
                    {backgroundColor: 'blue'},
                  ]}>
                  <Text>Carousel 2</Text>
                </View>
                <View
                  style={[
                    styles.containerHorizontal,
                    {backgroundColor: 'yellow'},
                  ]}>
                  <Text>Carousel 3</Text>
                </View>
                <View
                  style={[
                    styles.containerHorizontal,
                    {backgroundColor: 'aqua'},
                  ]}>
                  <Text>Carousel 4</Text>
                </View>
              </Swiper>
            </View>
          </View>
          <ScrollView horizontal={true}>
            <View style={styles.navBox}>
              <Text style={[styles.navTxt, styles.textCurrent]}>全部</Text>
              <Text style={styles.navTxt}>类别一</Text>
              <Text style={styles.navTxt}>类别二</Text>
              <Text style={styles.navTxt}>类别二</Text>
              <Text style={styles.navTxt}>类别二</Text>
              <Text style={styles.navTxt}>类别二</Text>
              <Text style={styles.navTxt}>类别二</Text>
              <Text style={styles.navTxt}>类别二</Text>
              <Text style={styles.navTxt}>类别二</Text>
            </View>
          </ScrollView>
          <View style={styles.goodsBox}>
            <View style={styles.goodsList}>
              <TouchableHighlight onPress={() => this.GotoDetail()}>
                <View style={styles.goods}>
                  <Image
                    style={styles.goodsImg}
                    source={require('../../assets/image/1.jpeg')}
                  />
                  <Text style={styles.goodsName}>biaoti</Text>
                  <Text
                    style={[
                      styles.goodsName,
                      {color: '#F12210', fontWeight: 'bold'},
                    ]}>
                    biaoti
                  </Text>
                </View>
              </TouchableHighlight>
              <View style={styles.goods}>
                <Image
                  style={styles.goodsImg}
                  source={require('../../assets/image/1.jpeg')}
                />
                <Text style={styles.goodsName}>biaoti</Text>
              </View>
              <View style={styles.goods}>
                <Image
                  style={styles.goodsImg}
                  source={require('../../assets/image/1.jpeg')}
                />
                <Text style={styles.goodsName}>biaoti</Text>
              </View>
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
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: pxSize(500),
    height: pxSize(100),
  },
  navBox: {
    marginLeft: pxSize(15),
    marginRight: pxSize(15),
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
  },
});
