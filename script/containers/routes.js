import { StackNavigator } from 'react-navigation';
import VideoFeed from './video-feed';
import FavVideos from './fav-videos';

export default StackNavigator(
    {
        Home: {
            screen: VideoFeed
        },
        Fav: {
            screen: FavVideos
        }
    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
            headerStyle: {
                backgroundColor: 'rgba(175,83,246,.2)'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }
    }
);