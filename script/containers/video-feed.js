import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FetchVideosSuccess } from '../actions/actions'

import VideoList from '../components/video-list';


class VideoFeed extends React.Component {
    constructor(props){
        super(props);

        this.getVideoList = this.getVideoList.bind(this);

    }

    getVideoList(){
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

    componentDidMount() {
        this.getVideoList();
    }

    render() {
        return (
            <VideoList videos={this.props.videos} />
        )
    }
}

const mapStateToProps = state => {
    return {
        videos: state.videos
    }
};

module.exports = connect(mapStateToProps)(VideoFeed);