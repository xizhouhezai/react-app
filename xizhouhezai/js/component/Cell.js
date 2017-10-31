import React,{ Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';

const { width, height } = Dimensions.get('window');

export default class Cell extends Component {
    static proptypes = {
        imageUrl: PropTypes.string,
        category: PropTypes.string,
    }
    render(){
        return(
            <View style={styles.container}>
                {/* 左面图片 */}
                <Image 
                    source={{uri: this.props.imageUrl == '' ? 'defaullt_thumb_250x250' : this.props.imageUrl}} 
                    style={styles.imageStyle}/>
                {/* 中间商品详情描述 */}
                <View style={styles.CategoryStyles}>
                    <Text style={styles.CategoryStyle}>
                        {this.props.category}
                    </Text>
                </View>
                {/* 右面箭头 */}
                <View>
                    <Image source={{uri: 'icon_cell_rightarrow'}} style={styles.arrowStyle}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 100,
        marginLeft: 15,
        marginRight: 15,
        borderBottomWidth: 0.5,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        overflow: 'hidden',
    },
    imageStyle: {
        width: 70,
        height: 70,
    },
    CategoryStyle: {
        width: width*0.7,
        paddingLeft: 10,
        paddingRight: 10,
        overflow: 'hidden',
    },
    arrowStyle: {
        width: 10,
        height: 15,
    }
})
