import React, {Component} from 'react';
import {Text, StyleSheet, View, Alert} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import storage from '../src_17_AsyncStorage/storage';

export default class index extends Component {
  async componentDidMount() {
    const location = await storage.get('coords');
    // alert(JSON.stringify(location));
    // 如果本地存储中，没有位置信息，则获取地理位置
    if (location === undefined || location == '') {
      // 组件加载时，获取地理位置信息
      Geolocation.getCurrentPosition(
        async info => {
          // console.log(info);
          // alert(JSON.stringify(info.coords));
          // // 获取地理位置成功后，将其保存下来
          await storage.set('coords', JSON.stringify(info.coords));
        },
        error => Alert.alert('报错', JSON.stringify(error)),
        {
          timeout: 20000,
        },
      );
    }
  }

  getMyData = async () => {
    try {
      const value = await storage.get('coords');
      if (value !== null) {
        const coords = JSON.stringify(value);
        alert(coords);
      }
    } catch (e) {
      // error reading value
    }
  };

  render() {
    return (
      <View>
        <Text onPress={this.getMyData}> 获取地理位置信息 </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
