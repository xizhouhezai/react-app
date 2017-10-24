import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
import {
    StackNavigator
  } from 'react-navigation';
import NavigationBar from './component/NavigationBar';

class Boy extends Component {
    render() {
        return(
            <View>
                <NavigationBar
                    title='Boy'
                    style={{backgroundColor:'#F08080'}}
                />
                <Text>
                    Hi! Boy
                </Text>
                <Button
                    title="Hi"
                    onPress={() => {
                        this.props.navigation.navigate('Feed');
                    }}
                />
            </View>
        )
    }
}

export default Boy;