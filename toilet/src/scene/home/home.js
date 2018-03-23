import React, { PureComponent } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'

type Props = {}

type State = {}

export default class Home extends PureComponent<Props, State> {
  static navigationOptions = () => ({
    headerTitle: (
      <View style={{ flex: 1}}>
        <Text style={{ textAlign: 'center' }}>团购</Text>
      </View>
    ),
    headerLeft: (
      <View>
        <Text style={{ marginLeft: 8 }}>定位</Text>
      </View>
    ),
    headerRight: (
      <View>
        <Text style={{ marginRight: 8 }}>定位</Text>
      </View>
    )
  })
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => {
          alert('123')
          this.props.navigation.navigate('WebScene')
        }}>
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({})