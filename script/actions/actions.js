export const FetchVideos = () => {
    return {
        type: 'FETCH_VIDEOS'
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

