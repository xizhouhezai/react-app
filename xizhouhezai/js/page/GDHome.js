import React, { Component } from 'react';
import {
    View,
    Image,
    TouchableOpacity,
} from 'react-native';

import NavigationBar from '../component/NavigationBar';

export default class Home extends Component {
    render() {
        return(
            <View style={{flex: 1}}>
                <NavigationBar
                    titleView={<Image style={{width: 66, height: 20}} source={{uri: 'navtitle_home_down_66x20'}}/>}
                    style={{backgroundColor:'#fff',borderBottomWidth: 1,borderBottomColor: '#eee'}}
                    leftButton={<TouchableOpacity style={{padding: 8}} onPress={() => {
                        this.props.getNavigation.navigate('HalfHour')
                    }
                }><Image style={{width: 26, height: 26,tintColor:'green'}} source={{uri: 'hot_icon_20x20'}}/></TouchableOpacity>}
                    rightButton = {<TouchableOpacity style={{padding: 8}}><Image style={{width: 26, height: 26,tintColor:'green'}} source={{uri: 'search_icon_20x20'}}/></TouchableOpacity>}
                />
            </View>
        )
    }
}