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
import Root from './js/router'


export default class App extends Component {
  launch() {
    
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <Root />
      </View>
    );
  }
}
