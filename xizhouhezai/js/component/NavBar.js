import React,{ Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Dimensions
} from 'react-native';
import PropTypes from 'prop-types';

const { width,height } = Dimensions.get('window');

export default class NavBar extends Component{
    static propTypes = {
        leftItems: PropTypes.element,
        titleItems: PropTypes.string,
        rightItems: PropTypes.element,
    };

    constructor(props){
        super(props);
    }

    render() {
        return(
            <View style = {styles.container}>
                // 左边的视图
                <View>
                    {this.props.leftItems}
                </View>
                
                {/* 中间的视图 */}
                <View>
                    <Text>
                        {this.props.titleItems}
                    </Text>
                </View>

                {/* 右边的视图 */}
                <View>
                    {this.props.rightItems}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width,
        height: 66,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    }
})
