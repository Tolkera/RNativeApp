import React from 'react';
import { StyleSheet, Text,View,FlatList,WebView, Button } from 'react-native';

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
                <Button title="Tweak" onPress={()=>{this.props.tweakItem(this.props.item)}}></Button>
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