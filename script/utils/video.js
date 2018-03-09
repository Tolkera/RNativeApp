export function getItemId(i){
    return  i.id.videoId || i.id.channelId || i.id.playlistId
}