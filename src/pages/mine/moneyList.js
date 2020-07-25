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

export default class MoneyList extends React.Component {
  GotoOrderInfo = () => {
    this.props.navigation.navigate('OrderDetailScreen');
  };
  render() {
    return (
      <SafeAreaView>
        <ScrollView horizontal={true} style={{backgroundColor: '#fff'}}>
          <View style={styles.navBox}>
            <Text style={[styles.navTxt, styles.textCurrent]}>全部</Text>
            <Text style={styles.navTxt}>充值</Text>
            <Text style={styles.navTxt}>消费</Text>
            <Text style={styles.navTxt}>收益</Text>
            <Text style={styles.navTxt}>提现</Text>
          </View>
        </ScrollView>
        <ScrollView>
          <TouchableHighlight onPress={() => this.GotoOrderInfo()}>
            <View style={styles.orderList}>
              <View>
                <Text style={{fontSize: 16, color: '#000'}}>BOSE音箱一对</Text>
                <Text
                  style={{fontSize: 12, color: '#666', marginTop: pxSize(2)}}>
                  NO.1809332273{' '}
                </Text>
                <Text
                  style={{fontSize: 12, color: '#666', marginTop: pxSize(2)}}>
                  2018-10-03 10:34:32
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: '#000',
                    marginBottom: 3,
                  }}>
                  800.00元
                </Text>
                <Text style={{color: '#666'}}>代发货</Text>
              </View>
            </View>
          </TouchableHighlight>
          <View style={styles.orderList}>
            <View>
              <Text style={{fontSize: 16, color: '#000'}}>BOSE音箱一对</Text>
              <Text style={{fontSize: 12, color: '#666', marginTop: pxSize(2)}}>
                NO.1809332273{' '}
              </Text>
              <Text style={{fontSize: 12, color: '#666', marginTop: pxSize(2)}}>
                2018-10-03 10:34:32
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 20,
                  color: '#000',
                  marginBottom: 3,
                }}>
                800.00元
              </Text>
              <Text style={{color: '#666'}}>代发货</Text>
            </View>
          </View>
          <View style={styles.orderList}>
            <View>
              <Text style={{fontSize: 16, color: '#000'}}>BOSE音箱一对</Text>
              <Text style={{fontSize: 12, color: '#666', marginTop: pxSize(2)}}>
                NO.1809332273{' '}
              </Text>
              <Text style={{fontSize: 12, color: '#666', marginTop: pxSize(2)}}>
                2018-10-03 10:34:32
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 20,
                  color: '#000',
                  marginBottom: 3,
                }}>
                800.00元
              </Text>
              <Text style={{color: '#666'}}>代发货</Text>
            </View>
          </View>
          <View style={styles.orderList}>
            <View>
              <Text style={{fontSize: 16, color: '#000'}}>BOSE音箱一对</Text>
              <Text style={{fontSize: 12, color: '#666', marginTop: pxSize(2)}}>
                NO.1809332273{' '}
              </Text>
              <Text style={{fontSize: 12, color: '#666', marginTop: pxSize(2)}}>
                2018-10-03 10:34:32
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 20,
                  color: '#000',
                  marginBottom: 3,
                }}>
                800.00元
              </Text>
              <Text style={{color: '#666'}}>代发货</Text>
            </View>
          </View>
          <View style={styles.orderList}>
            <View>
              <Text style={{fontSize: 16, color: '#000'}}>BOSE音箱一对</Text>
              <Text style={{fontSize: 12, color: '#666', marginTop: pxSize(2)}}>
                NO.1809332273{' '}
              </Text>
              <Text style={{fontSize: 12, color: '#666', marginTop: pxSize(2)}}>
                2018-10-03 10:34:32
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 20,
                  color: '#000',
                  marginBottom: 3,
                }}>
                800.00元
              </Text>
              <Text style={{color: '#666'}}>代发货</Text>
            </View>
          </View>
          <View style={styles.orderList}>
            <View>
              <Text style={{fontSize: 16, color: '#000'}}>BOSE音箱一对</Text>
              <Text style={{fontSize: 12, color: '#666', marginTop: pxSize(2)}}>
                NO.1809332273{' '}
              </Text>
              <Text style={{fontSize: 12, color: '#666', marginTop: pxSize(2)}}>
                2018-10-03 10:34:32
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 20,
                  color: '#000',
                  marginBottom: 3,
                }}>
                800.00元
              </Text>
              <Text style={{color: '#666'}}>代发货</Text>
            </View>
          </View>
          <View style={styles.orderList}>
            <View>
              <Text style={{fontSize: 16, color: '#000'}}>BOSE音箱一对</Text>
              <Text style={{fontSize: 12, color: '#666', marginTop: pxSize(2)}}>
                NO.1809332273{' '}
              </Text>
              <Text style={{fontSize: 12, color: '#666', marginTop: pxSize(2)}}>
                2018-10-03 10:34:32
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 20,
                  color: '#000',
                  marginBottom: 3,
                }}>
                800.00元
              </Text>
              <Text style={{color: '#666'}}>代发货</Text>
            </View>
          </View>
          <View style={styles.orderList}>
            <View>
              <Text style={{fontSize: 16, color: '#000'}}>BOSE音箱一对</Text>
              <Text style={{fontSize: 12, color: '#666', marginTop: pxSize(2)}}>
                NO.1809332273{' '}
              </Text>
              <Text style={{fontSize: 12, color: '#666', marginTop: pxSize(2)}}>
                2018-10-03 10:34:32
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 20,
                  color: '#000',
                  marginBottom: 3,
                }}>
                800.00元
              </Text>
              <Text style={{color: '#666'}}>代发货</Text>
            </View>
          </View>
          <View style={styles.orderList}>
            <View>
              <Text style={{fontSize: 16, color: '#000'}}>BOSE音箱一对</Text>
              <Text style={{fontSize: 12, color: '#666', marginTop: pxSize(2)}}>
                NO.1809332273{' '}
              </Text>
              <Text style={{fontSize: 12, color: '#666', marginTop: pxSize(2)}}>
                2018-10-03 10:34:32
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 20,
                  color: '#000',
                  marginBottom: 3,
                }}>
                800.00元
              </Text>
              <Text style={{color: '#666'}}>代发货</Text>
            </View>
          </View>
          <View style={[styles.orderList, {marginBottom: 70}]}>
            <View>
              <Text style={{fontSize: 16, color: '#000'}}>BOSE音箱一对</Text>
              <Text style={{fontSize: 12, color: '#666', marginTop: pxSize(2)}}>
                NO.1809332273{' '}
              </Text>
              <Text style={{fontSize: 12, color: '#666', marginTop: pxSize(2)}}>
                2018-10-03 10:34:32
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 20,
                  color: '#000',
                  marginBottom: 3,
                }}>
                800.00
              </Text>
              <Text style={{color: '#666'}}>代发货</Text>
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
    marginTop: pxSize(15),
    marginBottom: pxSize(15),
    height: pxSize(28),
    alignItems: 'center',
    marginLeft: pxSize(15),
    marginRight: pxSize(15),
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
  orderList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: pxSize(5),
    paddingLeft: pxSize(15),
    paddingRight: pxSize(15),
    marginTop: pxSize(5),
  },
});
