import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    Dimensions,
} from 'react-native';

const { width,height } = Dimensions.get('window');

export default class LauncherPage extends Component {
    render() {
        return(
            <Image source={{uri: 'launchimage'}} style={styles.imageStyle} />
        )
    }
}

const styles = StyleSheet.create({
    imageStyle: {
        width: width,
        height: height,
    }
})
