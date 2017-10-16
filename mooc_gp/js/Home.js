import React, {Component} from 'React';
import {
    View,
    Text
} from 'react-native';


export default class Home extends Component {
    render() {
        return(
            <View style={{flex: 1}}>
                <Text style={{fontSize: 18, color: '#ff0'}}>
                    欢迎来到Home页面
                </Text>
            </View>
        )
    }
}