import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import NavigationBar from './component/NavigationBar'

class Girl extends Component {
    render() {
        return(
            <View>
                <NavigationBar
                    title='Girl'
                    style={{backgroundColor:'#F08080'}}
                    leftButton = {<TouchableOpacity style={{padding: 8}} onPress={()=>{this.props.navigation.navigate('Home');}}><Image style={{width: 26, height: 26,tintColor:'yellow'}} source={require('../res/images/ic_arrow_back_white_36pt.png')}/></TouchableOpacity>}
                    rightButton = {<TouchableOpacity style={{padding: 8}}><Image style={{width: 26, height: 26,tintColor:'yellow'}} source={require('../res/images/ic_star.png')}/></TouchableOpacity>}
                />
                <Text>
                    Hi! Boy
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
    },
    tips: {
        fontSize: 18
    }
})

export default Girl;