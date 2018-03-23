import React, { PureComponent } from 'react'
import {
  View,
  Image
} from 'react-native'

type props = {
  tintColor: any,
  normalImage: any,
  selectedImage: any,
  focused: boolean
}

type state = {}

export default class TabBarItem extends PureComponent <props, state> {
  render() {
    return(
      <View>
        <Image
          source={this.props.focused ? this.props.selectedImage : this.props.normalImage}
          style={{tintColor: this.props.tintColor, width: 25, height: 25}}
        />
      </View>
    )
  }
}