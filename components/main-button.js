import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increaseCounter } from '../actions/actions'

import {
    Alert
} from 'react-native';

import Btn from './button'


const mapStateToProps = state => {
    return {
        ...state.pressRate,
        title: 'TTTs'
    }
};

const mapDispatchToProps = dispatch => {
    return {
        press: () => {
            Alert.alert('You tapped the button!');
            dispatch(increaseCounter('pressed'))
        }
    }
};

const MainBtn = connect(
    mapStateToProps,
    mapDispatchToProps
)(Btn);

export default MainBtn