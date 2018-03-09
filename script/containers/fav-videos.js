import React, { Component } from 'react';
import { connect } from 'react-redux';
import {StyleSheet, View, Button, ImageBackground} from 'react-native';
import { FetchVideosSuccess, NoFetchedVideos,NoSearchTerm  } from '../actions/actions'
import styles from '../style.js';

import VideoList from '../components/video-list';

class FavouriteVideos extends React.Component {
    constructor(props){
        super(props);

     //   this.getVideoList = this.getVideoList.bind(this);
    }

    static navigationOptions = {
        title: 'Fav Videos'
    };

    componentDidMount() {
        //this.getVideoList()

        console.log(this.props);
    }

    render() {
        return (
            <ImageBackground style={styles.container} source={require('../../images/bg.jpeg')}>
                <View style={styles.wrapper}>
                    <Button title="Add more videos" onPress={() => this.props.navigation.navigate('Home')}/>
                    <VideoList videos={this.props.favVideos}
                               loading={false}
                                noVideosText="You have none yet. Add favourite videos in Fetch Video section"
                    />
                </View>
            </ImageBackground>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.videoReducer.loading,
        favVideos: state.videoReducer.favVideos

    }
};

module.exports = connect(mapStateToProps)(FavouriteVideos);

