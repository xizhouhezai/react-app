/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Platform,
} from 'react-native';
// import { Navigator } from 'react-native-deprecated-custom-components';

import LauncherPage from './js/main/LauncherPage';
import Root from './js/router';


export default class App extends Component {
  launch() {
    if (Platform.OS === 'ios') {
      return (
        <Root />
      )
    } else {
      return (
        <LauncherPage />
      )
    }
  }
  render() {
    return (
      <View style={{flex: 1}}>
        {this.launch()}
      </View>
    );
  }
}
