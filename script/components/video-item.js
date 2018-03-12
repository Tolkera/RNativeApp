import React from 'react';
import ActionBtn from '../components/action-btn';
import { StyleSheet, Text,View,FlatList,WebView, Button } from 'react-native';
import PlaceholderText from './placeholder';

export default class VideoItem extends React.PureComponent {
    render() {
        let videoSource = 'https://www.youtube.com/embed/'+ this.props.id +  '?rel=0&autoplay=0&showinfo=0&controls=0';
        return (

            <View style={styles.wrapper}>
                <Text style={styles.item}>
                    {this.props.item.title}
                </Text>
                <WebView style={styles.video}
                         javaScriptEnabled={true}
                         source={{uri: videoSource}}
                />

                {this.props.actionBtn ?

                    <View>
                        {this.props.isInactive ?

                        <PlaceholderText text={this.props.actionBtn.replacementText} />
                                :
                            <ActionBtn
                                item={this.props.item}
                                onPress={this.props.actionBtn.onPress}
                                title={this.props.actionBtn.text}
                            />

                        }
                    </View>

                    : null
                }

            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        paddingBottom: 45
    },
    item: {
        paddingBottom: 5,
        fontWeight: 'bold',
        textAlign: 'center'

    },
    video: {
        height: 150,
        opacity: 0.7,
        shadowOffset:{  width: 5,  height: 5  },
        shadowColor: 'black',
        shadowOpacity: 1
    }
});