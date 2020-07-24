import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import React from 'react';
import pxSize from '../../assets/js/pxSize';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {Progress} from '@ant-design/react-native';
export default class Rebate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      bool: true,
    };
  }
  SwitchTab = (value) => {
    console.log(value);
  };
  render() {
    return (
      <SafeAreaView>
        <TouchableHighlight onPress={() => this.SwitchTab('88')}>
          <View style={styles.navBox}>
            <Text
              style={[
                styles.navTxt,
                this.state.bool ? styles.currentTxt : '',
                {borderColor: '#cfcfcf', borderRightWidth: 1},
              ]}>
              聚宝中
            </Text>
            <Text style={styles.navTxt}>已完成</Text>
          </View>
        </TouchableHighlight>
        <View style={styles.tip}>
          <Text style={{color: '#989898', fontSize: 15}}>待返订单</Text>
          <Text style={{color: '#989898', fontSize: 15}}>378个</Text>
        </View>
        <ScrollView>
          <View style={styles.listView}>
            <Text style={styles.listTitle}>返现列表</Text>
            <View style={styles.listBox}>
              <View>
                <Image
                  style={{width: pxSize(78), height: pxSize(78)}}
                  source={require('../../assets/image/1.jpeg')}
                />
                <Text style={styles.name}>国宝熊猫</Text>
              </View>
              <View style={styles.infoBox}>
                <Text style={{marginBottom: pxSize(2)}}>商品价值: 300元宝</Text>
                <Text style={{marginBottom: pxSize(2)}}>商品价值: 300元宝</Text>
                <Text style={{marginBottom: pxSize(2)}}>商品价值: 300元宝</Text>
                <Text style={{marginBottom: pxSize(2)}}>商品价值: 300元宝</Text>
                <View style={{flexDirection: 'row', width: pxSize(300)}}>
                  <Text>进度：</Text>
                  <View
                    style={{
                      backgroundColor: 'red',
                      height: 8,
                      borderRadius: 3,
                      width: pxSize(180),
                      marginTop: pxSize(6),
                    }}>
                    <Progress
                      percent={20}
                      barStyle={{
                        borderColor: '#4CDBC5',
                        height: 8,
                        backgroundColor: '#4CDBC5',
                        borderRadius: 3,
                      }}
                    />
                  </View>
                  <Text
                    style={{
                      marginLeft: pxSize(3),
                      color: '#FF2C20',
                      fontSize: 14,
                    }}>
                    7/22
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.listBox}>
              <View>
                <Image
                  style={{width: pxSize(78), height: pxSize(78)}}
                  source={require('../../assets/image/1.jpeg')}
                />
                <Text style={styles.name}>国宝熊猫</Text>
              </View>
              <View style={styles.infoBox}>
                <Text style={{marginBottom: pxSize(2)}}>商品价值: 300元宝</Text>
                <Text style={{marginBottom: pxSize(2)}}>商品价值: 300元宝</Text>
                <Text style={{marginBottom: pxSize(2)}}>商品价值: 300元宝</Text>
                <Text style={{marginBottom: pxSize(2)}}>商品价值: 300元宝</Text>
                <View style={{flexDirection: 'row', width: pxSize(300)}}>
                  <Text>进度：</Text>
                  <View
                    style={{
                      backgroundColor: 'red',
                      height: 8,
                      borderRadius: 3,
                      width: pxSize(180),
                      marginTop: pxSize(6),
                    }}>
                    <Progress
                      percent={20}
                      barStyle={{
                        borderColor: '#4CDBC5',
                        height: 8,
                        backgroundColor: '#4CDBC5',
                        borderRadius: 3,
                      }}
                    />
                  </View>
                  <Text
                    style={{
                      marginLeft: pxSize(3),
                      color: '#FF2C20',
                      fontSize: 14,
                    }}>
                    7/22
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.listBox}>
              <View>
                <Image
                  style={{width: pxSize(78), height: pxSize(78)}}
                  source={require('../../assets/image/1.jpeg')}
                />
                <Text style={styles.name}>国宝熊猫</Text>
              </View>
              <View style={styles.infoBox}>
                <Text style={{marginBottom: pxSize(2)}}>商品价值: 300元宝</Text>
                <Text style={{marginBottom: pxSize(2)}}>商品价值: 300元宝</Text>
                <Text style={{marginBottom: pxSize(2)}}>商品价值: 300元宝</Text>
                <Text style={{marginBottom: pxSize(2)}}>商品价值: 300元宝</Text>
                <View style={{flexDirection: 'row', width: pxSize(300)}}>
                  <Text>进度：</Text>
                  <View
                    style={{
                      backgroundColor: 'red',
                      height: 8,
                      borderRadius: 3,
                      width: pxSize(180),
                      marginTop: pxSize(6),
                    }}>
                    <Progress
                      percent={20}
                      barStyle={{
                        borderColor: '#4CDBC5',
                        height: 8,
                        backgroundColor: '#4CDBC5',
                        borderRadius: 3,
                      }}
                    />
                  </View>
                  <Text
                    style={{
                      marginLeft: pxSize(3),
                      color: '#FF2C20',
                      fontSize: 14,
                    }}>
                    7/22
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.listBox}>
              <View>
                <Image
                  style={{width: pxSize(78), height: pxSize(78)}}
                  source={require('../../assets/image/1.jpeg')}
                />
                <Text style={styles.name}>国宝熊猫</Text>
              </View>
              <View style={styles.infoBox}>
                <Text style={{marginBottom: pxSize(2)}}>商品价值: 300元宝</Text>
                <Text style={{marginBottom: pxSize(2)}}>商品价值: 300元宝</Text>
                <Text style={{marginBottom: pxSize(2)}}>商品价值: 300元宝</Text>
                <Text style={{marginBottom: pxSize(2)}}>商品价值: 300元宝</Text>
                <View style={{flexDirection: 'row', width: pxSize(300)}}>
                  <Text>进度：</Text>
                  <View
                    style={{
                      backgroundColor: 'red',
                      height: 8,
                      borderRadius: 3,
                      width: pxSize(180),
                      marginTop: pxSize(6),
                    }}>
                    <Progress
                      percent={20}
                      barStyle={{
                        borderColor: '#4CDBC5',
                        height: 8,
                        backgroundColor: '#4CDBC5',
                        borderRadius: 3,
                      }}
                    />
                  </View>
                  <Text
                    style={{
                      marginLeft: pxSize(3),
                      color: '#FF2C20',
                      fontSize: 14,
                    }}>
                    7/22
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  navBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: pxSize(50),
    backgroundColor: '#fff',
  },
  navTxt: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    color: '#989898',
  },
  currentTxt: {
    color: '#F12210',
  },
  tip: {
    paddingLeft: pxSize(15),
    paddingRight: pxSize(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: pxSize(50),
  },
  listView: {
    marginBottom: pxSize(100),
  },
  listTitle: {
    fontWeight: 'bold',
    color: '#222',
    fontSize: 16,
    backgroundColor: '#fff',
    paddingTop: pxSize(10),
    paddingBottom: pxSize(10),
    paddingLeft: pxSize(15),
    paddingRight: pxSize(15),
    borderBottomColor: '#f9f9f9',
    borderStyle: 'solid',
    borderBottomWidth: 1,
  },
  listBox: {
    paddingLeft: pxSize(15),
    paddingRight: pxSize(15),
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingTop: pxSize(15),
    paddingBottom: pxSize(15),
    marginBottom: pxSize(8),
  },
  name: {
    fontSize: 13,
    color: '#222222',
    marginTop: pxSize(6),
    textAlign: 'center',
  },
  infoBox: {
    marginLeft: pxSize(10),
    fontSize: 14,
    color: '#222222',
  },
});
