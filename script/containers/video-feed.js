import React, { Component } from 'react';
import { connect } from 'react-redux';
import {StyleSheet, View, Button, ImageBackground, TextInput, Text} from 'react-native';
import { FetchVideosSuccess, FetchVideos, NoSearchTerm, NoFetchedVideos, SearchVideos } from '../actions/actions'
import styles from '../style.js';

import VideoList from '../components/video-list';
import debounce from 'debounce';

class VideoFeed extends React.Component {
    constructor(props){
        super(props);

        this.getVideoList = this.getVideoList.bind(this);
        this.getVideoList = debounce(this.getVideoList, 1000);
        this.changeRoute = this.changeRoute.bind(this);
    }

    static navigationOptions = {
        title: 'Fetch video'
    };

    getVideoList(id){

        if (id){
            this.props.dispatch(SearchVideos());
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

                        if (res.items) {
                            this.props.dispatch(FetchVideosSuccess(res.items));
                        } else {
                            this.props.dispatch(NoFetchedVideos())
                        }
                    })
            })
        }

        else {
            this.props.dispatch(NoSearchTerm());
        }
    }

    componentDidMount(){
        this.getVideoList()
    }

    changeRoute(){
        this.props.navigation.navigate('Fav');
        this.props.dispatch(NoSearchTerm());
    }

    render() {
        console.log('rendering VideoFeed, isSearching:', this.props.isSearching);

        return (
            <ImageBackground style={styles.container} source={require('../../images/bg.jpeg')}>
                <View style={styles.wrapper}>
                    <Button title="Go to My Fav Videos" onPress={this.changeRoute}/>

                    <TextInput style={styles.input}  onChangeText={this.getVideoList} />

                    {
                        this.props.isSearching ?

                        <VideoList videos={this.props.videos}
                                   loading={this.props.loading}
                                   noVideosText="No videos were found :/" />

                        :   <Text style={styles.placeholder}>Type in channel id</Text>
                    }
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

