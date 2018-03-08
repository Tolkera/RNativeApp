import React, { Component } from 'react';
import { connect } from 'react-redux';
import {StyleSheet, View, Button, ImageBackground, TextInput} from 'react-native';
import { FetchVideosSuccess, FetchVideos, NoSearchTerm } from '../actions/actions'
import styles from '../style.js';

import VideoList from '../components/video-list';
import debounce from 'debounce';

class VideoFeed extends React.Component {
    constructor(props){
        super(props);

        this.getVideoList = this.getVideoList.bind(this);
        this.getVideoList = debounce(this.getVideoList, 1000)
    }

    static navigationOptions = {
        title: 'Fetch video'
    };

    getVideoList(id){

        if (id){

            this.props.dispatch(FetchVideos());
            let url = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCshZEMSvUmkJxZUpusBlfsZKg03xl0jLo&channelId=UCQVqKlgU_BcrWl8RWuoi8ig&part=snippet,id&order=date&maxResults=20';
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

        else {
            this.props.dispatch(NoSearchTerm());
        }
    }


    render() {

        return (
            <ImageBackground style={styles.container} source={require('../../images/bg.jpeg')}>
                <View style={styles.wrapper}>
                    <Button title="Go to My Fav Videos" onPress={() => this.props.navigation.navigate('Fav')}/>

                    <TextInput style={styles.input}  onChangeText={this.getVideoList} />
                    <VideoList videos={this.props.videos}
                               loading={this.props.loading}
                                isSearching = {this.props.isSearching}/>
                </View>
            </ImageBackground>
        )
    }
}

const mapStateToProps = state => {
    return {
        videos: state.videoReducer.videos,
        loading: state.videoReducer.loading,
        isSearching: state.videoReducer.isSearching
    }
};

module.exports = connect(mapStateToProps)(VideoFeed);

