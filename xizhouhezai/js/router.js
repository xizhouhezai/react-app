import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';

// 自定义组件
// import NavBar from './component/NavBar'

import HomePage from './page/HomePage';

class Index extends Component {

    render() {
        const list = [
            {
                'name': '逛丢',
                'routeName': 'HomePage'
            }
        ]
        return(
            <View style={styles.container}>
                {/* <NavBar
                    titleItems='西洲何在'
                /> */}
                <List>
                    {
                        list.map((data,i) => (
                            <ListItem
                                roundAvatar={true}
                                key={i}
                                title={data.name}
                                hideChevron={true}
                                rightIcon={{name: 'chevron-right'}}
                                onPress={()=>this.props.navigation.navigate(data.routeName)}
                            />
                        )) 
                    }
                </List>
            </View>
        )
    }
}

const Root = StackNavigator({
    Home: {
        screen: Index,
        navigationOptions: {
            title: 'Index'
        }
    },
    HomePage: {
        screen: HomePage,
        navigationOptions: {
            title: '逛丢'
        } 
    }
},{
    headerMode: 'none',
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 300,
    },
    titleSytle: {
        fontSize: 20
    }
})

export default Root
