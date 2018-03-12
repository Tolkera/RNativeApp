export function getItemId(i){
    return  i.id.videoId || i.id.channelId || i.id.playlistId
}

export function isItemInFavs(item, favs){

    return favs.some((i)=>{
       return getItemId(i) == getItemId(item);
    });
}

export function getVideoPositionInArrayById(videosArr, item){
    let itemId = getItemId(item);
    return videosArr.map((i)=> getItemId(i)).indexOf(itemId)
}

