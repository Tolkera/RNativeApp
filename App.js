import React, { Component } from 'react';
import { StyleSheet,Text,View,  ScrollView, ImageBackground,  WebView } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import Routes from './script/containers/routes'
import {videos} from './script/reducers/video-reducer';
import {pressRate, depressRate} from './script/reducers/pressing-reducer';


const todoApp = combineReducers({
  videos
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

