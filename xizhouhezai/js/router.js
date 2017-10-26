import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';

import HomePage from './page/HomePage';

class Index extends Component {
    render() {
        const list = [
            {
                'routeName': 'HomePage'
            }
        ]
        return(
            <View style={styles.container}>
                <List>
                    {
                        list.map((data,i) => (
                            <ListItem
                                roundAvatar={true}
                                key={i}
                                title={data.routeName}
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
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 300,
    }
})

export default Root
