import React, { Component } from 'react';
import { Container, Content, View } from 'native-base';
import {Scene, Router} from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

import Login from './components/Login';
import routes from './redux/routes';

const reducers = combineReducers({routes});
const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

const RouterWithRedux = connect()(Router);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="root">
            <Scene key="login" component={Login} title="Login"/>
          </Scene>
        </RouterWithRedux>
      </Provider>
    );
  }
}
