import React, {Component} from 'React';
import {
    View,
    Text
} from 'react-native';


export default class Home extends Component {
    render() {
        return(
            <View>
                <Text style={{fontSize: 18, color: '#ff0'}}>
                    欢迎来到Home页面
                </Text>
            </View>
        )
    }
}