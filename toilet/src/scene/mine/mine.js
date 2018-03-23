import React, { PureComponent } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

type Props = {}

type State = {}

export default class Mine extends PureComponent<Props, State> {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Mine</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({})