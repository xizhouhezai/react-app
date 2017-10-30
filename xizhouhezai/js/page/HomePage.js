import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Button
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

// 底部的分页
import Home from './GDHome';
import Ht from './GDHt';
import HourList from './GDHourList';


export default class HomePage extends Component {
    selectedTabNavigator(selectedTab, title, iconImage, SelectedIconImage, component) {
        return(
            <TabNavigator.Item
                selected={this.state.selectedTab === selectedTab}
                title={title}
                renderIcon={() => <Image source={{uri: iconImage}} style={styles.image}/>}
                renderSelectedIcon={() => <Image source={{uri: SelectedIconImage}} style={styles.image}/>}
                badgeText=""
                selectedTitleStyle={{color: '#000'}}
                onPress={() => this.setState({ selectedTab: selectedTab }) }>
                {component}
            </TabNavigator.Item>
        )
    }

    constructor(props) {
        super(props)
        this.state = {
            selectedTab: 'home'
        }
    }

    render() {
        return(
            <TabNavigator>
                {/* 首页 */}
                {this.selectedTabNavigator('home', 'Home', 'tabbar_home_30x30', 'tabbar_home_selected_30x30', <Home getNavigation={this.props.navigation}/>)}
                {/* 海淘 */}
                {this.selectedTabNavigator('ht', '海淘', 'tabbar_abroad_30x30', 'tabbar_abroad_selected_30x30', <Ht />)}
                {/* 小时风云榜 */}
                {this.selectedTabNavigator('hourlist', '小时风云榜', 'tabbar_rank_30x30', 'tabbar_rank_selected_30x30', <HourList />)}
            </TabNavigator>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        height: 25,
        width: 25,
    }
})
