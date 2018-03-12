import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import globalStyles from '../style.js';

export default class PlaceholderText extends React.PureComponent {
    render() {
        return (
            <View  style={styles.wrap}>
                <Text style={styles.text}>{this.props.text}</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    wrap: {
        padding: 10,
        alignItems: 'center'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 17
    }
})