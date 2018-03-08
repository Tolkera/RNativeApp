import React, { Component } from 'react';
import { StyleSheet, Text,View,FlatList,WebView } from 'react-native';
import VideoItem from './video-item'

export default class VideoList extends Component {

    constructor(props) {
        super(props);

        this.renderItem = this.renderItem.bind(this);
        this.keyExtractor = this.keyExtractor.bind(this);
    }

    renderItem = ({item}) => (
        <VideoItem
            id={item.id.videoId}
            title={item.snippet.title}
        />
    );

    keyExtractor = (item, index) =>  item.id.videoId || item.id.playlistId;

    render() {

        return (
            <View >
                <Text>Videos</Text>
                <FlatList
                    data={this.props.videos}
                    extraData={this.state}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                />
            </View>

        );
    }
}
