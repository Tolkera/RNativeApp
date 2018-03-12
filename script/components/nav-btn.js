import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class NavButton extends React.PureComponent {
    render() {
        return (
            <TouchableOpacity style={styles.button}
                    onPress={this.props.onPress}>
                    <Text style={styles.text}> {this.props.title}</Text>
            </TouchableOpacity>
        );
    }
}



const styles = StyleSheet.create({
    button: {
        padding: 10,
        backgroundColor: '#37ae82',
        alignItems: 'center'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#fff'
    }
});