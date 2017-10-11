/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class FirstApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

// export default class FirstApp extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.ios.js
//         </Text>
//         <Text style={styles.instructions}>
//           Press Cmd+R to reload,{'\n'}
//           Cmd+D or shake for dev menu
//         </Text>
//         <Bananas />
//         <LotsOfGreetings></LotsOfGreetings>
//         <BlinkApp />
//       </View>
//     );
//   }
// }
// class Bananas extends Component {
//   render() {
//     let pic = {
//       uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//     };
//     return (
//       <Image source={pic} style={{width: 193, height: 110}} />
//     );
//   }
// }

// class Greeting extends Component {
//   render() {
//     return (
//       <Text style={styles.instructions}>Hello {this.props.name}!</Text>
//     );
//   }
// }

// class LotsOfGreetings extends Component {
//   render() {
//     return (
//       <View>
//         <Greeting name='Rexxar' />
//         <Greeting name='Jaina' />
//         <Greeting name='Valeera' />
//       </View>
//     );
//   }
// };

// class Blink extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { showText: true };
//     let that = this;
//     // 每1000毫秒对showText状态做一次取反操作
//     setInterval(() => {
//       that.setState(previousState => {
//         return { showText: !previousState.showText };
//       });
//     }, 1000);
//   }

//   render() {
//     let display = this.state.showText ? this.props.text : ' ';
//     console.log(this.state.showText);
//     return (
//       <Text>{display}</Text>
//     )
//   }
// };

// class BlinkApp extends Component {
//   render() {
//     return (
//       <View>
//         <Blink text='闪瞎你的眼' />
//         <Blink text='钛合金狗眼一闪瞎' />
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#00f',
//     fontSize: 30,
//     marginBottom: 5,
//   },
// });

AppRegistry.registerComponent('FirstApp', () => FirstApp);
