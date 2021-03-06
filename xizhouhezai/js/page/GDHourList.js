import React, { Component } from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    Text,
} from 'react-native';

import NavigationBar from '../component/NavigationBar';

export default class HourList extends Component {
    render() {
        return(
            <View style={{flex: 1}}>
                <NavigationBar
                    titleView={<Image style={{width: 107, height: 20}} source={{uri: 'navtitle_rank_107x20'}}/>}
                    style={{backgroundColor:'#fff',borderBottomWidth: 1,borderBottomColor: '#eee'}}
                    leftButton={<View></View>}
                    rightButton = {<TouchableOpacity style={{padding: 8}}><Text style={{color: 'green'}}>设置</Text></TouchableOpacity>}
                />
            </View>
        )
    }
}