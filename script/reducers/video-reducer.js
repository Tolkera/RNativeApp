import update from 'immutability-helper';
import { getItemId, getVideoPositionInArrayById } from '../utils/video';

let initialState = {
    favVideos: [],
    videos: [],
    loading: false
};

export function videoReducer (state = initialState, action){
    switch (action.type) {
        case 'FETCH_VIDEOS_SUCCESS':
            return {
                ...state,
                videos: action.videos || [],
                loading: false
            };
        break;

        case 'FETCH_VIDEOS_START':
            return {
                ...state,
                videos: [],
                loading: true

            };
        break;

        case 'NO_FETCHED_VIDEOS':
            return {
                ...state,
                videos: [],
                isLoading: false
            };
            break;


        case 'SEARCH_VIDEOS':
            return {
                ...state,
                isSearching: true
            };
            break;


        case 'NO_SEARCH_TERM':
            return {
                ...state,
                videos: [],
                isSearching: false
            };
            break;

        case 'ADD_FAV_VIDEO':

            if (getVideoPositionInArrayById(state.favVideos, action.item) < 0){

                return update(state, {
                    favVideos: {
                        $push: [action.item]
                    },
                    videos: {
                        [getVideoPositionInArrayById(state.videos, action.item)]: {
                            isInFavs: { $set: true }
                        }
                    }
                });
            }

            return state;

        break;

        case 'REMOVE_FAV_VIDEO' :

            let updatedState = update(state, {
                favVideos: {
                    $splice: [[getVideoPositionInArrayById(state.favVideos, action.item), 1]]
                }
            });

            if (getVideoPositionInArrayById(state.videos, action.item) > 0){
                updatedState = update(state, {
                    videos: {
                        [getVideoPositionInArrayById(state.videos, action.item)]: {
                            isInFavs: {$set: false}
                        }
                    }
                })
            }

            return updatedState;
            break;

    }
    return state || {};
}

