import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableNativeFeedback,
    Animated,
    StyleSheet
} from 'react-native';

class MyButton extends Component {
    _onPressButton() {
      alert("You tapped the button!");
    }
  
    render() {
      return (
        <TouchableNativeFeedback onPress={this._onPressButton}>
          <Text>Button</Text>
        </TouchableNativeFeedback>
      );
    }
}

class FadeInView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(0),
        }
    }
    componentDidMount() {
        setInterval(()=>{
            Animated.timing(
                this.state.fadeAnim,
                {
                    toValue: 1
                }
            ).start();
        },1000);
    }
    render() {
        console.log(this.state.fadeAnim);
        return(
            <Animated.View style={
                {
                    ...this.props.style,
                    opacity: this.state.fadeAnim, 
                }
            }>
                {this.props.children}
            </Animated.View>
        )
    }
}

export default class Touch extends Component{
    render() {
        return (
            <View style={{flex: 1}}>
                <MyButton />
                <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
                    <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
                </FadeInView>
            </View>
           
        );
    }
}