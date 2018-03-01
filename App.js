import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, TextInput, Alert, Button, TouchableHighlight, Dimensions, ScrollView, ImageBackground, Image, Slider,
    Switch, Picker,AlertIOS, DatePickerIOS, ActivityIndicator
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

var { height, width } = Dimensions.get('window');

var box_count = 3;
var box_height = height / box_count;
var box_width = width / box_count;


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {text: ''};

    this.changeToPizza = this.changeToPizza.bind(this);
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    Alert.alert('You tapped the button!')
  }
  tweakText(){

    return this.state.text.split(' ').map((word) => word && 'kvark').join(' ')
  }

  changeToPizza(){


  }

  render() {

    return (

      <ImageBackground style={styles.container} source={require('./images/bg.jpeg')}>
        <View style={styles.wrapper}>
          <View style={[styles.box, styles.header]}>
          </View>
          <View style={[styles.box, styles.main]}>
            <ScrollView style={styles.content}>
              <Text style={styles.text}>
                1 Lorem ipsum item
              </Text>
              <Text style={styles.text}>
                2 Lorem ipsum item 22
              </Text>
              <Text style={styles.text}>
                3 Lorem ipsum item
              </Text>

              <TextInput
                  style={styles.input}
                  placeholder="Type here to translate!"
                  onChangeText={(text) => this.setState({text})}
              />

              <Text style={styles.textOutput}>
                {this.tweakText()}
              </Text>

              <ActivityIndicator size="large" color="#0000ff" />
              <Slider></Slider>
              <Switch></Switch>


              <Picker
                  selectedValue={this.state.language}
                  onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
                <Picker.Item label="Golang" value="go" />
              </Picker>

              <DatePickerIOS date={new Date()} onDateChange={()=>{}}></DatePickerIOS>
            </ScrollView>

          </View>
          <View style={[styles.box, styles.footer]}></View>
        </View>


    </ImageBackground>


    );
  }
}




const styles = StyleSheet.create({
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
    //flexDirection: 'column',
    //alignItems: 'center',
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