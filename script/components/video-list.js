import React, { Component } from 'react';
import { StyleSheet, Text,View,FlatList,WebView, ActivityIndicator } from 'react-native';
import VideoItem from './video-item';
import PlaceholderText from '../components/placeholder';
import styles from '../style.js';

import { getItemId } from '../utils/video';

export default class VideoList extends Component {

    constructor(props) {
        super(props);

        this.renderItem = this.renderItem.bind(this);
        this.keyExtractor = this.keyExtractor.bind(this);

    }

    renderItem = ({item}) => {

        let { actionBtn } = this.props;

        let isInactive = false;

        if (actionBtn.shouldBeVariable){
            isInactive = item[actionBtn.isItemInactive];
        }

        return (
            <VideoItem
                id={getItemId(item)}
                item={item}
                actionBtn={actionBtn}
                isInactive= {isInactive}
            />
    )};

    keyExtractor = (item, index) =>  getItemId(item);

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
                                            renderItem={this.renderItem}
                                            />
                                        :

                                        <PlaceholderText text={this.props.noVideosText} />
                                    }
                                </View>
                    </View>
                }
            </View>

        );
    }
}
