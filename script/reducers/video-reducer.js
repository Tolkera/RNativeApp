export function videos (state = {videos: []}, action){
    switch (action.type) {
        case 'FETCH_VIDEOS_SUCCESS':
            return action.videos

    }
    return state || {};
}


