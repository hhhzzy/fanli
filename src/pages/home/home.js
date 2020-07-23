import {Text, View, StyleSheet, ImageBackground, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {Carousel} from '@ant-design/react-native';
import Swiper from 'react-native-swiper';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.box}>
        <ImageBackground
          source={{uri: 'https://zh-hans.reactjs.org/logo-og.png'}}
          style={[styles.image, {position: 'absolute'}]}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            height: 140,
          }}>
          <View style={{width: 345, height: 140}}>
            <Swiper
              height={200} // 指定高度
              loop={true} // 是否开启循环
              showsButtons={false} // 设置控制按钮(左右两侧的箭头)是否可见
              index={0}
              autoplay={true} // 是否自动跳转
              horizontal={true} // 是否水平滚动
            >
              <View
                style={[styles.containerHorizontal, {backgroundColor: 'blue'}]}>
                <Text>Carousel 1</Text>
              </View>
              <View
                style={[styles.containerHorizontal, {backgroundColor: 'blue'}]}>
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
                style={[styles.containerHorizontal, {backgroundColor: 'aqua'}]}>
                <Text>Carousel 4</Text>
              </View>
            </Swiper>
          </View>
        </View>
        <View style={styles.nav}>
          <View style={styles.navList}>
            <Image
              style={styles.tinyLogo}
              source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            />
            <Text>社区联盟</Text>
          </View>
          <View style={styles.navList}>
            <Image
              style={styles.tinyLogo}
              source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            />
            <Text>新人手册</Text>
          </View>
          <View style={styles.navList}>
            <Image
              style={styles.tinyLogo}
              source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            />
            <Text>分享邀请</Text>
          </View>
          <View style={styles.navList}>
            <Image
              style={styles.tinyLogo}
              source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            />
            <Text>玉石链圈</Text>
          </View>
        </View>
        <View style={styles.announce}>
          <View
            style={{
              width: 345,
              height: 28,
              backgroundColor: '#fff',
              flexDirection: 'row',
              alignItems: 'center',
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
      </View>
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
    height: 200,
    width: 350,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: 500,
    height: 100,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    height: 65,
  },
  navList: {
    width: 60,
    height: 65,
    fontSize: 12,
    backgroundColor: 'red',
  },
  announce: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
  },
});
