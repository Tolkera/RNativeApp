import React, { Component } from 'react';
import { StyleSheet, Text,View,FlatList,WebView, ActivityIndicator } from 'react-native';
import VideoItem from './video-item';
import styles from '../style.js';

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
            <View style={{marginTop: 10}}>

                {this.props.loading ?
                <ActivityIndicator size="large" color="#0000ff" />
                    :
                    <View>

                                <View>
                                    { this.props.videos.length ?
                                        <FlatList
                                            data={this.props.videos}
                                            extraData={this.state}
                                            keyExtractor={this.keyExtractor}
                                            renderItem={this.renderItem} />
                                        :

                                        <Text style={styles.placeholder}>
                                            {this.props.noVideosText}
                                        </Text>
                                    }
                                </View>
                    </View>
                }
            </View>

        );
    }
}
