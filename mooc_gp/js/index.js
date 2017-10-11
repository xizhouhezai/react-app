import React, { Components } from 'react';
import { Text } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Home from './Home';

const App = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene
                    key='home'
                    component={ Home }
                    title='Home'
                />
            </Scene>
        </Router>
    )
}

export default App;
