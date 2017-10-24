/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
// import TabNavigator from 'react-native-tab-navigator';
import {
  StackNavigator
} from 'react-navigation';


import Girl from './js/Girl';
import Boy from './js/Boy';

const Root = StackNavigator({
  Home: {
    screen: Boy,
    navigationOptions: {
      title: 'Boy'
    }
  },
  Feed: {
    screen: Girl,
    navigationOptions: {
      title: 'Girl'
    }
  }
},{
  headerMode: 'none'
})

export default class mooc_gp extends Component {
  render() {
    return(
      <Root />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  image: {
    height: 22,
    width: 22,
  },
});

AppRegistry.registerComponent('mooc_gp', () => mooc_gp);
