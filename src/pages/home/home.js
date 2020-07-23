import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {Carousel} from '@ant-design/react-native';
import Swiper from 'react-native-swiper';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import pxSize from '../../assets/js/pxSize';

Icon.loadFont();
export default class Home extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.box}>
        <ScrollView>
          <ImageBackground
            source={{uri: 'https://zh-hans.reactjs.org/logo-og.png'}}
            style={[styles.backImage, {position: 'absolute', left: 0}]}
          />
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
          <View style={styles.nav}>
            <View style={styles.navList}>
              <Image
                style={styles.navImg}
                source={require('../../assets/image/nav1.png')}
              />
              <Text>社区联盟</Text>
            </View>
            <View style={styles.navList}>
              <Image
                style={styles.navImg}
                source={require('../../assets/image/nav2.png')}
              />
              <Text>新人手册</Text>
            </View>
            <View style={styles.navList}>
              <Image
                style={styles.navImg}
                source={require('../../assets/image/nav3.png')}
              />
              <Text>分享邀请</Text>
            </View>
            <View style={styles.navList}>
              <Image
                style={styles.navImg}
                source={require('../../assets/image/nav4.png')}
              />
              <Text>玉石链圈</Text>
            </View>
          </View>
          <View style={styles.announce}>
            <View
              style={{
                width: pxSize(345),
                height: pxSize(28),
                backgroundColor: '#fff',
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 10,
                marginLeft: 15,
                marginRight: 15,
              }}>
              <AntDesignIcon
                name="sound"
                size={17}
                color="#F8908A"
                style={{marginRight: 10}}
              />
              <Text>55555</Text>
            </View>
          </View>
          <View style={styles.goodsBox}>
            <View>
              <Text style={styles.title}>为你推荐</Text>
            </View>
            <View style={styles.goodsList}>
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
  backImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: pxSize(500),
    height: pxSize(100),
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: pxSize(20),
    height: pxSize(65),
  },
  navList: {
    width: pxSize(60),
    height: pxSize(65),
    fontSize: pxSize(12),
    alignItems: 'center',
  },
  navImg: {
    width: pxSize(36),
    height: pxSize(32),
    alignItems: 'center',
    marginBottom: pxSize(10),
  },
  announce: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: pxSize(20),
  },
  title: {
    color: '#1A1A1A',
    fontSize: 20,
    fontWeight: 'bold',
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
