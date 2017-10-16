/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
  Image,
  ScrollView,
  FlatList,
  TextInput,
  SectionList,
  TouchableHighlight,
  View
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import FixedDimensionsBasics from './js/FixedDimensionsBasics.js';
import {
  StackNavigator,
  addNavigationHelpers,
  DrawerNavigator
} from 'react-navigation';

export default class mooc_gp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'tb_popular',
      text: '',
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tb_popular'}
            selectedTitleStyle={{color:'red'}}
            title="最热"
            renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_polular.png')}/>}
            renderSelectedIcon={() =><Image style={[styles.image,{tintColor:'red'}]} source={require('./res/images/ic_polular.png')}/>}
            onPress={() => this.setState({selectedTab: 'tb_popular'})}>
            <ScrollView>
              <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
              <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
              <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
              <View style={{padding: 10}}>
                <TextInput 
                  onChangeText={(text) => this.setState({text})}
                  style={{height: 40}}
                  placeholder="Type here to translate!"
                />
                <Text style={{padding: 10, fontSize: 42}}>
                  {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>
              </View>
              <MyButton />
            </ScrollView>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tb_trending'}
            title="趋势"
            selectedTitleStyle={{color:'yellow'}}
            renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_trending.png')}/>}
            renderSelectedIcon={() =><Image style={[styles.image,{tintColor:'yellow'}]} source={require('./res/images/ic_trending.png')}/>}
            onPress={() => this.setState({selectedTab: 'tb_trending'})}>
            <View style={{flex: 1, flexDirection: 'column'}}>
              <View style={{height: 50,width: 50, backgroundColor: 'powderblue'}} />
              <View style={{height: 50,width: 50, backgroundColor: 'skyblue'}} />
              <View style={{height: 50,width: 50, backgroundColor: 'steelblue'}} />
              <FlatList
                data = {[
                  {key: 'Devin'},
                  {key: 'Jackson'},
                  {key: 'James'},
                  {key: 'Joel'},
                  {key: 'John'},
                  {key: 'Jillian'},
                  {key: 'Jimmy'},
                  {key: 'Julie'},
                  {key: 'zhangsan'},
                  {key: 'zhangsanq'},
                  {key: 'zhangsana'},
                  {key: 'zhangsanz'},
                  {key: 'zhangsanc'},
                  {key: 'zhangsand'},
                  {key: 'zhangsanx'},
                  {key: 'zhangsane'},
                ]}
                renderItem = {({item}) => <Text style={styles.item}>{item.key}</Text>}
              />
            </View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tb_favorite'}
            title="收藏"
            selectedTitleStyle={{color:'green'}}
            renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_favorite.png')}/>}
            renderSelectedIcon={() =><Image style={[styles.image,{tintColor:'green'}]} source={require('./res/images/ic_favorite.png')}/>}
            onPress={() => this.setState({selectedTab: 'tb_favorite'})}>
            <View style={{
              flex:1,
              flexDirection: 'row',
              justifyContent: 'center'
            }}>
              <View style={{height: 50,width: 50, backgroundColor: 'powderblue'}} />
              <View style={{height: 50,width: 50, backgroundColor: 'skyblue'}} />
              <View style={{height: 50,width: 50, backgroundColor: 'steelblue'}} />
            </View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tb_my'}
            title="我的"
            selectedTitleStyle={{color:'blue'}}
            renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_my.png')}/>}
            renderSelectedIcon={() =><Image style={[styles.image,{tintColor:'blue'}]} source={require('./res/images/ic_my.png')}/>}
            onPress={() => this.setState({selectedTab: 'tb_my'})}>
            <View style={{
              flex: 1
            }}>
            </View>
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

class MyButton extends Component {
  _onPressButton() {
    console.log("You tapped the button!");
    alert("You tapped the button!");
  }

  render() {
    return (
      <TouchableHighlight onPress={this._onPressButton}>
        <Text>Button</Text>
      </TouchableHighlight>
    );
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
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

AppRegistry.registerComponent('mooc_gp', () => mooc_gp);
