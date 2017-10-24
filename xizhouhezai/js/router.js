import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';


class HomePage extends Component {
    render() {
        const list = [
            {
                'routeName': 'Mooc_gp'
            },
            {
                'routeName': 'Props'
            },
            {
                'routeName': 'State'
            },
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
        screen: HomePage,
        navigationOptions: {
            title: 'Home'
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
