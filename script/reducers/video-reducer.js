export function videoReducer (state = {videos: [], loading: false}, action){
    switch (action.type) {
        case 'FETCH_VIDEOS_SUCCESS':
            return {
                videos: action.videos,
                loading: false,
                isSearching: true
            };
        break;

        case 'FETCH_VIDEOS':
            return {
                videos: [],
                loading: true

            };
        break;

        case 'NO_SEARCH_TERM':
            return {
                videos: [],
                isLoading: false,
                isSearching: false
            };
            break;

    }
    return state || {};
}


