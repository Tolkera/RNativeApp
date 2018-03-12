import React from 'react';
import { Button } from 'react-native';

export default class ActionBtn extends React.PureComponent {
    render() {
        return (
            <Button title={this.props.title}
                    onPress={()=>{this.props.onPress(this.props.item)}}>
            </Button>
        );
    }
}
