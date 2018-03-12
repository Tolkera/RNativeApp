import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Button, ImageBackground} from 'react-native';
import styles from '../style.js';
import { FetchVideosSuccess, NoFetchedVideos,NoSearchTerm, RemoveVideoFromFav  } from '../actions/actions';
import NavButton from '../components/nav-btn';
import VideoList from '../components/video-list';

class FavouriteVideos extends React.Component {
    constructor(props){
        super(props);

        this.deleteVideoFromFav = this.deleteVideoFromFav.bind(this);
    }

    static navigationOptions = {
        title: 'Fav Videos'
    };

    deleteVideoFromFav(item){
        this.props.dispatch(RemoveVideoFromFav(item))
    }

    render() {

        let actionBtn = {
            shouldBeVariable: false,
            onPress: this.deleteVideoFromFav,
            text: "Delete from favs"
        };

        return (
            <ImageBackground style={styles.container} source={require('../../images/bg.jpeg')}>
                <View style={styles.wrapper}>
                    <NavButton title="Add more videos" onPress={()=>{ this.props.navigation.navigate('Home')}}/>
                    <VideoList videos={this.props.favVideos}
                               loading={false}
                                noVideosText="You have none yet. Add favourite videos in Fetch Video section"
                                actionBtn={actionBtn}
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

