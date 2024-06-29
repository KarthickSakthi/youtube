import React from "react";

function VideoCard({info}){
    console.log({info})
    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails} = snippet;
    return(
        <div className="p-2 m-2 w-72 max-h-80 shadow-lg">
          <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url}/>
          <ul>
            <li className="font-bold py-2 w-64 h-16 leading-7  text-ellipsis line-clamp-2 overflow-hidden text-pretty">{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
          </ul>
        </div>
    )
}

export default VideoCard;