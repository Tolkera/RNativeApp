import React, { Component } from 'react';
import { StyleSheet,Text,View,  ScrollView, ImageBackground,  WebView } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import VideoFeed from './script/containers/video-feed';
import {videos} from './script/reducers/video-reducer';
import {pressRate, depressRate} from './script/reducers/pressing-reducer';

const todoApp = combineReducers({
  videos
});


let store = createStore(todoApp);

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {

    return (

        <Provider store={store}>
          <ImageBackground style={styles.container} source={require('./images/bg.jpeg')}>
          <View style={styles.wrapper}>
          <View style={[ styles.header]}>
            <Text>Header</Text>
          </View>


          <View style={[ styles.main]}>
            <View style={styles.content}>
              <VideoFeed />
            </View>
          </View>
          <View style={[ styles.footer]}>
            <Text>Footer</Text>
          </View>
        </View>
          </ImageBackground>
      </Provider>

    );
  }
}

const styles = StyleSheet.create({
  content: {
      flex:1
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 20

  },

  wrapper: {
    backgroundColor: 'rgba(175,83,246,.15)',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'rgba(175,83,246,.2)',
    flex: 1
  },

  header: {
    flex: 0.5
  },
  main: {
    flex: 4,
    padding: 20
  },
  footer: {
    flex: 0.5
  },
  text: {
    fontSize: 16
  },

  textOutput: {
    marginTop: 10,
    fontSize: 12
  },
  input: {
    marginTop: 20,
    height: 50,
    borderRadius: 4,
    borderWidth: 0.5,
    padding: 10,
    fontSize: 16,
    borderColor: 'rgba(255,255,255,.8)',
    backgroundColor: 'rgba(255,255,255,.6)'
  }
});

