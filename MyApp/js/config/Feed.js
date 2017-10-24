import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { List, ListItem } from 'react-native-elements';

const list = [
    {
      "name": "Amy Farha",
      "subtitle": "Vice President"
    },
    {
      "name": "Chris Jackson",
      "subtitl": "Vice Chairman"
    },
  ]
class Feed extends Component {
    render() {
        const data = this.props.navigation.state.params;
        return (
            <List containerStyle={{marginBottom: 20}}>
                {
                    list.map((l, i) => (
                    <ListItem
                        roundAvatar={true}
                        key={i}
                        title={l.name}
                        hideChevron={true}
                        rightIcon={{name: 'chevron-right'}}
                    />
                    ))
                }
            </List>
        )
    }
}

export default Feed;
