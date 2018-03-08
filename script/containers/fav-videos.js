import React, { Component } from 'react';
import { connect } from 'react-redux';
import {StyleSheet, View, Button, ImageBackground} from 'react-native';
import { FetchVideosSuccess } from '../actions/actions'
import styles from '../style.js';

import VideoList from '../components/video-list';

class FavouriteVideos extends React.Component {
    constructor(props){
        super(props);

        this.getVideoList = this.getVideoList.bind(this);
    }

    static navigationOptions = {
        title: 'Fav Videos'
    };

    getVideoList(id){
        let url = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCshZEMSvUmkJxZUpusBlfsZKg03xl0jLo&channelId=summerrayneoakes&part=snippet,id&order=date&maxResults=20';
        fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => {
            res.json().then((res) => {
                this.props.dispatch(FetchVideosSuccess(res.items));
            })
        })
    }

    componentDidMount() {
        this.getVideoList();
    }

    render() {
        return (
            <ImageBackground style={styles.container} source={require('../../images/bg.jpeg')}>
                <View style={styles.wrapper}>
                    <Button title="Add more videos" onPress={() => this.props.navigation.navigate('Home')}/>
                    <VideoList videos={this.props.videos} />

                </View>
            </ImageBackground>
        )
    }
}

const mapStateToProps = state => {
    return {
        videos: state.videoReducer.videos,
        loading: state.videoReducer.loading
    }
};

module.exports = connect(mapStateToProps)(FavouriteVideos);

