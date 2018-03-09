import { getItemId } from '../utils/video';

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

            let {item } = action;

            let positionInFavVideos = state.favVideos.map((i)=> getItemId(i)).indexOf(getItemId(item));

            if (positionInFavVideos < 0){
                state.favVideos.push(item)
            }
            return state;
        break;

    }
    return state || {};
}
