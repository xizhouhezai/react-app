import React, { PureComponent } from 'react'
import {
  View,
  Text
} from 'react-native'

type props = {}
type state = {}

class WebScene extends PureComponent<props, state> {
  render () {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Web</Text>
      </View>
    )
  }
}

export default WebScene