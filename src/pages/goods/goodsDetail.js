import {
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  View,
  StyleSheet,
  TouchableHighlight,
  TextInput,
} from 'react-native';
import React from 'react';
import pxSize from '../../assets/js/pxSize';
import {Button, Modal, Provider} from '@ant-design/react-native';

import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();
export default class GoodsDtail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popupVisible: false,
    };
  }
  NowBuy = () => {
    console.log(2);
    this.setState({popupVisible: true});
  };
  onClose2 = () => {
    this.setState({popupVisible: false});
  };
  render() {
    return (
      <Provider>
        <SafeAreaView style={{flex: 1}}>
          <ScrollView>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                height: pxSize(370),
                backgroundColor: 'red',
              }}>
              <View
                style={{
                  height: pxSize(370),
                }}>
                <Swiper
                  height={pxSize(370)} // 指定高度
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
            <View style={styles.tips}>
              <Text
                style={{color: '#F12210', fontSize: 24, fontWeight: 'bold'}}>
                2356
              </Text>
              <Text
                style={{color: '#F12210', fontSize: 16, fontWeight: 'bold'}}>
                (元宝)
              </Text>
            </View>
            <View style={styles.infoBox}>
              <Text
                style={{
                  fontSize: 18,
                  color: '#000000',
                  fontWeight: 'bold',
                  paddingTop: pxSize(12),
                  paddingBottom: pxSize(5),
                }}>
                产品介绍
              </Text>
              <Text style={{fontSize: 14, color: '#4D4D4D'}}>
                购买天猫商品时选择购买“延保服务”后，在服务保障期内如消费者购买的商品发生故障，由天猫负责委派第三方服务商在消费者的服务保障额度范围内为消费者提供维修的保障服务项目。
                购买天猫商品时选择购买“延保服务”后，在服务保障期内如消费者购买的商品发生故障，由天猫负责委派第三方服务商在消费者的服务保障额度范围内为消费者提供维修的保障服务项目。
                购买天猫商品时选择购买“延保服务”后，在服务保障期内如消费者购买的商品发生故障，由天猫负责委派第三方服务商在消费者的服务保障额度范围内为消费者提供维修的保障服务项目。
                购买天猫商品时选择购买“延保服务”后，在服务保障期内如消费者购买的商品发生故障，由天猫负责委派第三方服务商在消费者的服务保障额度范围内为消费者提供维修的保障服务项目。
                购买天猫商品时选择购买“延保服务”后，在服务保障期内如消费者购买的商品发生故障，由天猫负责委派第三方服务商在消费者的服务保障额度范围内为消费者提供维修的保障服务项目。
              </Text>
            </View>
          </ScrollView>

          <TouchableHighlight onPress={() => this.NowBuy()}>
            <View style={styles.footerBox}>
              <Text style={styles.footerBtn}>立即抢购</Text>
            </View>
          </TouchableHighlight>
          <Modal
            title="弹窗"
            popup
            closable
            maskClosable
            visible={this.state.popupVisible}
            animationType="slide-up"
            onClose={this.onClose2}>
            <View style={styles.popupBox}>
              <View>
                <Image
                  style={{width: pxSize(70), height: pxSize(66)}}
                  source={require('../../assets/image/1.jpeg')}
                />
              </View>
              <View style={{justifyContent: 'space-around'}}>
                <Icon name="close-circle-sharp" size={30} color="#878787" />
                <Text
                  style={{fontSize: 16, fontWeight: 'bold', color: '#F12210'}}>
                  3000.00
                </Text>
              </View>
            </View>
            <View style={styles.numBox}>
              <View>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: '#000000',
                    fontSize: 18,
                  }}>
                  数量
                </Text>
                <View style={styles.nums}>
                  <Text style={styles.numIcon}>
                    <Icon name="remove" color="979797" size={25} />
                  </Text>
                  <TextInput
                    style={{
                      height: pxSize(28),
                      borderColor: '#F2F3F5',
                      backgroundColor: '#F2F3F5',
                      borderWidth: 0,
                      marginLeft: pxSize(1),
                      marginRight: pxSize(1),
                      padding: 0,
                      fontSize: 16,
                      width: pxSize(70),
                      textAlign: 'center',
                    }}
                  />
                  <Text style={styles.numIcon}>
                    <Icon name="add" color="979797" size={25} />
                  </Text>
                </View>
              </View>
              <View>
                <Text>元宝</Text>
                <Text>300000.00</Text>
              </View>
            </View>
            <TouchableHighlight>
              <View style={styles.footerBox}>
                <Text style={styles.footerBtn}>立即抢购</Text>
              </View>
            </TouchableHighlight>
          </Modal>
        </SafeAreaView>
      </Provider>
    );
  }
}
const styles = StyleSheet.create({
  containerHorizontal: {
    height: pxSize(370),
  },
  tips: {
    height: pxSize(65),
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: pxSize(15),
    color: '#F12210',
    borderBottomLeftRadius: pxSize(5),
    borderBottomRightRadius: pxSize(5),
    flex: 1,
  },
  infoBox: {
    backgroundColor: '#fff',
    marginTop: pxSize(10),
    paddingLeft: pxSize(15),
    paddingRight: pxSize(15),
    paddingBottom: pxSize(20),
    marginBottom: pxSize(10),
  },
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
  popupBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: pxSize(16),
    paddingTop: pxSize(22),
    paddingLeft: pxSize(15),
    paddingRight: pxSize(15),
    borderBottomColor: '#F5F5F5',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  numBox: {
    paddingLeft: pxSize(15),
    paddingRight: pxSize(15),
    paddingBottom: pxSize(25),
    paddingTop: pxSize(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nums: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  numIcon: {
    width: pxSize(28),
    height: pxSize(28),
    backgroundColor: '#F2F3F5',
    color: '#979797',
    justifyContent: 'center',
    textAlign: 'center',
  },
});
