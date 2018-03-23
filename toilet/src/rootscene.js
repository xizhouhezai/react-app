import React, { PureComponent } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native'
import {TabNavigator, TabBarBottom, StackNavigator} from 'react-navigation'

import Home from './scene/home/home'
import Nearby from './scene/nearby/nearby'
import Order from './scene/order/order'
import Mine from './scene/mine/mine'
import TabBarItem from './weget/tabBarItem'
import WebScene from './web/webscene'

import Color from './weget/color'

type Props = {}

type State = {}

export default class RootScence extends PureComponent<Props, State> {
  render() {
    return (
      <Navigator />
    );
  }
}

const Tab = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      tabBarLabel: '首页',
      tabBarIcon: ({focused, tintColor}) => (
        <TabBarItem
          tintColor={tintColor}
          focused={focused}
          normalImage={require('./img/tabbar/tabbar_homepage.png')}
          selectedImage={require('./img/tabbar/tabbar_homepage_selected.png')}
        />
      )
    })
  },
  Nearby: {
    screen: Nearby,
    navigationOptions: () => ({
      tabBarLabel: '附近',
      tabBarIcon: ({ focused, tintColor }) => (
        <TabBarItem
          tintColor={tintColor}
          focused={focused}
          normalImage={require('./img/tabbar/tabbar_merchant.png')}
          selectedImage={require('./img/tabbar/tabbar_merchant_selected.png')}
        />
      )
    })
  },
  Order: {
    screen: Order,
    navigationOptions: () => ({
      tabBarLabel: '订单',
      tabBarIcon: ({ focused, tintColor }) => (
        <TabBarItem
          tintColor={tintColor}
          focused={focused}
          normalImage={require('./img/tabbar/tabbar_order.png')}
          selectedImage={require('./img/tabbar/tabbar_order_selected.png')}
        />
      )
    })
  },
  Mine: {
    screen: Mine,
    navigationOptions: () => ({
      tabBarLabel: '我的',
      tabBarIcon: ({ focused, tintColor }) => (
        <TabBarItem
          tintColor={tintColor}
          focused={focused}
          normalImage={require('./img/tabbar/tabbar_mine.png')}
          selectedImage={require('./img/tabbar/tabbar_mine_selected.png')}
        />
      )
    })
  }
}, {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    lazy: true,
    animationEnabled: true, //页面跳转是否有过度动画，Android默认为true，iOS默认为false
    swipeEnabled: true, //是否可以滑动页面，Android默认为true，iOS默认为false
    tabBarOptions: {
      activeTintColor: Color.primary, //tab is selected that is color
      inactiveTintColor: Color.gray,
      style: {backgroundColor: 'white'}
    }
  })

const Navigator = StackNavigator({
  Tab: {screen: Tab},
  WebScene: {screen: WebScene}
},{
  navigationOptions: {
    headerTintColor: '#333333',
    headerBackTitle: null,
  }
})
const styles = StyleSheet.create({})