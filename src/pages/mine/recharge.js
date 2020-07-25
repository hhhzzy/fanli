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
Icon.loadFont();
AntDesign.loadFont();
export default class Recharge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnabled: false,
    };
  }
  GotoOrderInfo = () => {
    this.props.navigation.navigate('OrderDetailScreen');
  };
  toggleSwitch = () => {
    this.setState({isEnabled: !this.isEnabled});
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            style={{height: pxSize(80)}}
            colors={['#4CDBC5', '#4edac4']}>
            <View style={styles.topHeader}>
              <Image
                style={styles.headerImg}
                source={require('../../assets/image/header.png')}
              />
              <View style={styles.headerName}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#fff',
                    height: pxSize(28),
                    alignItems: 'center',
                    marginTop: pxSize(2),
                  }}>
                  我爱老虎油
                </Text>
                <Text style={{fontSize: 14, color: '#fff'}}>
                  我的元宝：1200个
                </Text>
              </View>
            </View>
          </LinearGradient>
          <View style={styles.payList}>
            <Text
              style={{
                color: '#3A3A3A',
                fontSize: 14,
                fontWeight: 'bold',
                paddingTop: pxSize(10),
                paddingBottom: pxSize(10),
                paddingLeft: pxSize(15),
                borderBottomWidth: 1,
                borderBottomColor: '#F5F5F5',
              }}>
              推荐支付
            </Text>
            <View style={styles.list}>
              <AntDesign name="bank" size={25} color="#4CDBC5" />
              <Text
                style={{
                  color: '#3A3A3A',
                  fontSize: 18,
                  fontWeight: 'bold',
                  marginLeft: pxSize(5),
                }}>
                银行转账
              </Text>
              <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={this.state.isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={this.toggleSwitch}
                value={this.state.isEnabled}
                style={{marginLeft: pxSize(180)}}
              />
            </View>
            <View style={styles.list}>
              <AntDesign name="alipay-circle" size={25} color="#1678ff" />
              <Text
                style={{
                  color: '#3A3A3A',
                  fontSize: 18,
                  fontWeight: 'bold',
                  marginLeft: pxSize(5),
                }}>
                银行转账
              </Text>
              <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={this.state.isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={this.toggleSwitch}
                value={this.state.isEnabled}
                style={{marginLeft: pxSize(180)}}
              />
            </View>
          </View>
          <View
            style={{
              paddingTop: pxSize(15),
              paddingBottom: pxSize(15),
              backgroundColor: '#fff',
              borderRadius: 3,
              marginTop: 5,
              marginLeft: pxSize(15),
              marginRight: pxSize(15),
            }}>
            <Text
              style={{
                color: '#3A3A3A',
                fontSize: 14,
                fontWeight: 'bold',
                paddingTop: pxSize(10),
                paddingBottom: pxSize(10),
                paddingLeft: pxSize(15),
                borderBottomWidth: 1,
                borderBottomColor: '#F5F5F5',
              }}>
              存款金额
            </Text>

            <Text style={{paddingLeft: pxSize(10), fontSize: 20, marginTop: 5}}>
              ￥500.00
            </Text>
          </View>
          <View
            style={{
              paddingTop: pxSize(15),
              paddingBottom: pxSize(15),
              backgroundColor: '#fff',
              borderRadius: 3,
              marginTop: 5,
              marginLeft: pxSize(15),
              marginRight: pxSize(15),
              marginBottom: pxSize(20),
            }}>
            <Text style={{paddingLeft: pxSize(10), fontSize: 14}}>
              工时费涩分数干啥子刚分手是个啥工时费涩分数干啥子刚分手是个啥工时费涩分数干啥子刚分手是个啥工时费涩分数干啥子刚分手是个啥工时费涩分数干啥子刚分手是个啥工时费涩分数干啥子刚分手是个啥工时费涩分数干啥子刚分手是个啥工时费涩分数干啥子刚分手是个啥工时费涩分数干啥子刚分手是个啥工时费涩分数干啥子刚分手是个啥
              工时费涩分数干啥子刚分手是个啥工时费涩分数干啥子刚分手是个啥工时费涩分数干啥子刚分手是个啥工时费涩分数干啥子刚分手是个啥工时费涩分数干啥子刚分手是个啥工时费涩分数干啥子刚分手是个啥工时费涩分数干啥子刚分手是个啥工时费涩分数干啥子刚分手是个啥工时费涩分数干啥子刚分手是个啥工时费涩分数干啥子刚分手是个啥
              工时费涩分数干啥子刚分手是个啥工时费涩分数干啥子刚分手是个啥工时费涩分数干啥子刚分手是个啥工时费涩分数干啥子刚分手是个啥工时费涩分数干啥子刚分手是个啥工时费涩分数干啥子刚分手是个啥工时费涩分数干啥子刚分手是个啥工时费涩分数干啥子刚分手是个啥工时费涩分数干啥子刚分手是个啥工时费涩分数干啥子刚分手是个啥
            </Text>
          </View>
        </ScrollView>
        <TouchableHighlight>
          <View style={styles.footerBox}>
            <Text style={styles.footerBtn}>立即充值</Text>
          </View>
        </TouchableHighlight>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  topHeader: {
    flexDirection: 'row',
    marginLeft: pxSize(15),
    marginRight: pxSize(15),
  },
  headerImg: {
    width: pxSize(52),
    height: pxSize(52),
    marginLeft: pxSize(20),
  },
  headerName: {
    marginLeft: pxSize(10),
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
  payList: {
    marginLeft: pxSize(15),
    marginRight: pxSize(15),
    backgroundColor: '#fff',
    paddingTop: pxSize(10),
    paddingBottom: pxSize(10),
    marginTop: pxSize(5),
    borderRadius: 5,
  },
  list: {
    paddingLeft: pxSize(15),
    flexDirection: 'row',
    paddingTop: pxSize(10),
    paddingBottom: pxSize(10),
  },
});
