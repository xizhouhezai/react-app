 import React, { Component } from 'react';
 import {
     Text,
     View,
     Button,
     StyleSheet
 } from 'react-native';
 import { StackNavigator } from 'react-navigation';
 import { List, ListItem } from 'react-native-elements';

import Feed from './config/Feed';
import Touch from './config/Touch';


class HomeScreen extends Component {
    render() {
        const list = [
            {
                'routeName': 'Chat'
            },
            {
                'routeName': 'Feed'
            },
            {
                'routeName': 'Touch'
            },
        ]
        return (
            <List containerStyle={{marginBottom: 20}}>
                {
                    list.map((data,i) => (
                        <ListItem
                            roundAvatar={true}
                            key={i}
                            title={data.routeName}
                            hideChevron={true}
                            rightIcon={{name: 'chevron-right'}}
                            onPress={() => this.props.navigation.navigate(data.routeName)}
                        />
                    )) 
                }
            </List>
        );
    }
}

class ChatScreen extends Component {
    render() {
      return (
        <View>
          <Text>Chat with Lucy</Text>
        </View>
      );
    }
}

const Root = StackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            title: 'Home',
        },
    },
    Chat: {
        screen: ChatScreen,
        navigationOptions: {
            title: 'Chat',
        },
    },
    Feed: {
        screen: Feed,
        navigationOptions: {
            title: 'Feed',
        },
    },
    Touch: {
        screen: Touch,
        navigationOptions: {
            title: 'Touch',
        },
    },
  },{
      headerMode: 'none'
  });

  export default Root;
