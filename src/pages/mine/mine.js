import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React from 'react';
import pxSize from '../../assets/js/pxSize';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
export default class Mine extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            style={{flex: 1}}
            colors={['#9BD6D2', '#4CDBC5']}>
            <View style={styles.topBox}>
              <Text>ffefe</Text>
            </View>
          </LinearGradient>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  topBox: {
    height: pxSize(140),
  },
});
