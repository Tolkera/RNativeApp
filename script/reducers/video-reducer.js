export function videoReducer (state = {videos: [], loading: false}, action){
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
            console.log(
                {
                    ...state,
                    videos: [],
                    isSearching: false
                }
            )
            return {
                ...state,
                videos: [],
                isSearching: false
            };
            break;

    }
    return state || {};
}


