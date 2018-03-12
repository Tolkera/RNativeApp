import React, { Component } from 'react';
import { connect } from 'react-redux';
import {StyleSheet, View, Button, ImageBackground, TextInput, Text} from 'react-native';
import { FetchVideosSuccess, FetchVideos, NoSearchTerm, NoFetchedVideos, SearchVideos, AddVideoToFav } from '../actions/actions'
import styles from '../style.js';
import {isItemInFavs} from '../utils/video';
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

    getVideoList(id){
        if (id){
            this.props.dispatch(SearchVideos());
            this.props.dispatch(FetchVideos());
            let url = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCshZEMSvUmkJxZUpusBlfsZKg03xl0jLo&channelId=UCQVqKlgU_BcrWl8RWuoi8ig&part=snippet,id&order=date&maxResults=5';
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
            <ImageBackground style={styles.container} source={require('../../images/bg.jpeg')}>
                <View style={styles.wrapper}>
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
                </View>
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

