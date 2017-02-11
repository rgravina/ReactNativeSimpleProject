import React, { Component } from 'react';
import { Container, Content, View } from 'native-base';
import {Scene, Router} from 'react-native-router-flux';

import Login from './components/Login';

export default class App extends Component {
  render() {
    return (
    <Router>
      <Scene key="root">
        <Scene key="login" component={Login} title="Login"/>
      </Scene>
    </Router>
    );
  }
}
