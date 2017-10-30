import React, {Component, PropTypes} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Platform,
    StatusBar,
    Image
} from 'react-native';


const NAV_BAR_HEIGHT_IOS = 44;
const NAV_BAR_HEIGHT_ANDROID = 50;
const STATUS_BAR_HEIGHT = 20;
const StatusBarShape = {
    barStyle: PropTypes.oneOf(['light-content', 'default',]),
    hidden: PropTypes.bool,
    backgroundColor: PropTypes.string,
}

/**
 * @param propTypes设置NavigationBar的一些属性和约束
 *        style是NavigationBar的样式属性
 */

export default class NavigationBar extends Component {
    static propTypes = {
        style: View.propTypes.style,
        title: PropTypes.string,
        titleView: PropTypes.element,
        hide: PropTypes.bool,
        statusBar: PropTypes.shape(StatusBarShape),
        leftButton: PropTypes.element,
        rightButton: PropTypes.element,
    };
    static defaultProps = {
        statusBar: {
            barStyle: 'light-content',
            hidden: false,
        }
    }
    constructor(props){
        super(props);
        this.state={
            title: '',
            hide: false
        }
    }
    render() {
        let statusBar = !this.props.statusBar.hidden?
                <View style={styles.statusBar}>
                    <StatusBar {...this.props.statusBar} />
                </View>: null;
        let titleView = this.props.titleView ? this.props.titleView : 
                        <Text style={styles.title}>{this.props.title}</Text>;
        let content = <View style={styles.navBar}>
            {this.props.leftButton}
            <View style={styles.navBarTitleContainer}>
                {titleView}
            </View>
            {this.props.rightButton}
        </View>
        return(
            <View style={[styles.container, this.props.style]}>
                {statusBar}
                {content}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'gray',
    },
    title: {
        fontSize: 20,
        color: '#FFFFFF',
    },
    navBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: Platform.OS === 'ios' ? NAV_BAR_HEIGHT_IOS : NAV_BAR_HEIGHT_ANDROID,
    },
    navBarTitleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 40,
        right: 40,
        top: 0,
        bottom: 0,
    },
    statusBar: {
        height: Platform.OS === 'ios' ? STATUS_BAR_HEIGHT:0,
        backgroundColor:'#F08080',
    },
})