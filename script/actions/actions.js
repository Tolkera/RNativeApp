export const FetchVideos = () => {
    return {
        type: 'FETCH_VIDEOS_START'
    }
};

export const SearchVideos = () => {
    return {
        type: 'SEARCH_VIDEOS'
    }
};

export const FetchVideosSuccess = (videos) => {
    return {
        type: 'FETCH_VIDEOS_SUCCESS',
        videos
    }
};

export const NoSearchTerm = () => {
    return {
        type: 'NO_SEARCH_TERM'
    }
};

export const NoFetchedVideos = () => {
    return {
        type: 'NO_FETCHED_VIDEOS'
    }
};

export const AddVideoToFav = (item) => {
    return {
        type: 'ADD_FAV_VIDEO',
        item
    }
};

export const RemoveVideoFromFav = (item) => {
    return {
        type: 'REMOVE_FAV_VIDEO',
        item
    }
};
