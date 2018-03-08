import React from 'react';
import { StyleSheet, Text,View,FlatList,WebView } from 'react-native';

export default class VideoItem extends React.PureComponent {
    render() {
        let videoSource = 'https://www.youtube.com/embed/'+ this.props.id +  '?rel=0&autoplay=0&showinfo=0&controls=0';

        return (

            <View style={styles.wrapper}>
                <Text style={styles.item}>
                    {this.props.title}
                </Text>
                <WebView style={styles.video}
                         javaScriptEnabled={true}
                         source={{uri: videoSource}}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    wrapper: {
        paddingBottom: 25
    },
    item: {
        paddingBottom: 5,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    video: {
        height: 150,
        opacity: 0.7
    }
});