import React, {Component} from 'react';
import {Text} from 'react-native';
import {WebView} from 'react-native-webview';

class MyWeb extends Component {
  render() {
    return (
      <WebView source={{uri: 'https://m.baidu.com'}} style={{marginTop: 20}} />
      // <Text>MyWeb</Text>
    );
  }
}

export default MyWeb;
