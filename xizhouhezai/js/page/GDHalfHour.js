import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity,
} from 'react-native';

import NavigationBar from '../component/NavigationBar';

export default class HalfHour extends Component {
    render() {
        return(
            <View style={{flex: 1,}}>
                <NavigationBar
                    titleView={<Text style={{color: 'black',fontSize: 18,}}>近半小时热门</Text>}
                    style={{backgroundColor:'#fff',borderBottomWidth: 1,borderBottomColor: '#eee'}}
                    leftButton={<View></View>}
                    rightButton = {<TouchableOpacity style={{padding: 8}}><Text style={{color: 'green'}}>关闭</Text></TouchableOpacity>}
                />
            </View>
        )
    }
}