import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    Button,
View
} from 'react-native';


export default class Btn extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>Pressed: {this.props.pressRate}</Text>
                <Button onPress={this.props.press} title={this.props.title} />
            </View>

        );
    }
}