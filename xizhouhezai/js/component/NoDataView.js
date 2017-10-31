import React,{ Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

export default class NoDataView extends Component{
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.textStyle}>
                    网络中断，没有数据
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        fontSize: 21,
        color: 'gray',
    }
})
