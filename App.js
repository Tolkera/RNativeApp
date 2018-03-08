import React, { Component } from 'react';
import { StyleSheet,Text,View,  ScrollView, ImageBackground,  WebView } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import Routes from './script/containers/routes'
import {videoReducer} from './script/reducers/video-reducer';


const todoApp = combineReducers({
  videoReducer
});


let store = createStore(todoApp);

export default class App extends Component {

  render() {

    return (

        <Provider store={store} >
            <Routes  />
      </Provider>

    );
  }
}

