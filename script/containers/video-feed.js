import React, { Component } from 'react';
import { connect } from 'react-redux';
import {StyleSheet, ScrollView, View, Button, ImageBackground, TextInput, Text} from 'react-native';
import { FetchVideosSuccess, FetchVideos, NoSearchTerm, NoFetchedVideos, SearchVideos, AddVideoToFav } from '../actions/actions'
import styles from '../style.js';
import {isItemInFavs} from '../utils/video';
import {transformToQuery} from '../utils/url';
import VideoList from '../components/video-list';
import PlaceholderText from '../components/placeholder';
import NavButton from '../components/nav-btn';
import debounce from 'debounce';

class VideoFeed extends React.Component {
    constructor(props){
        super(props);

        this.getVideoList = this.getVideoList.bind(this);
        this.getVideoList = debounce(this.getVideoList, 1000);
        this.addVideoToFav = this.addVideoToFav.bind(this);
        this.isItemInactive = this.isItemInactive.bind(this);
    }

    static navigationOptions = {
        title: 'Fetch video'
    };


    getVideoList(query){

        let basicUrl = 'https://www.googleapis.com/youtube/v3/search?';

        let basicQuery = {
            key: 'AIzaSyCshZEMSvUmkJxZUpusBlfsZKg03xl0jLo',
            maxResults: 5,
            order: 'date',
            part: 'snippet,id'
        };

        if (query){

            let url = basicUrl + transformToQuery(Object.assign(basicQuery, {q: query}));

            this.props.dispatch(SearchVideos());
            this.props.dispatch(FetchVideos());
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

    addVideoToFav(item){
        this.props.dispatch(AddVideoToFav(item))
    }

    componentDidMount(){
        this.getVideoList()
    }

    isItemInactive(i){
        return isItemInFavs(i, this.props.favVideos);
    }


    render() {

        let actionBtn = {
            shouldBeVariable: true,
            onPress: this.addVideoToFav,
            text: "Add to favs",
            replacementText: "Added",
            isItemInactive: "isInFavs"
        };


        return (
            <ImageBackground style={[styles.container, StyleSheet.absoluteFill]} source={require('../../images/bg.jpeg')}>
                <ScrollView style={styles.wrapper}>
                    <NavButton title="Go to My Fav Videos" onPress={()=>{ this.props.navigation.navigate('Fav')}}/>
                    <TextInput style={styles.input}  onChangeText={this.getVideoList} />

                    {
                        this.props.isSearching ?

                            <VideoList videos={this.props.videos}
                                       favVideos={this.props.favVideos}
                                       loading={this.props.loading}
                                       noVideosText="No videos were found :/"
                                       actionBtn={actionBtn}/>
                            :
                            <PlaceholderText text="Type in channel id"/>
                    }
                </ScrollView>
            </ImageBackground>


        )
    }
}

const mapStateToProps = state => {
    return {
        videos: state.videoReducer.videos,
        loading: state.videoReducer.loading,
        favVideos: state.videoReducer.favVideos,
        isSearching: state.videoReducer.isSearching
    }
};


module.exports = connect(mapStateToProps)(VideoFeed);

