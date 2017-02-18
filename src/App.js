import React, { Component } from 'react';
import {Scene, Router} from 'react-native-router-flux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { connect, Provider } from 'react-redux';
import thunk from 'redux-thunk';

import HomeContainer from './containers/HomeContainer';
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
          <Scene key="root" hideNavBar={true}>
            <Scene key="home" component={HomeContainer}/>
          </Scene>
        </RouterWithRedux>
      </Provider>
    );
  }
}
