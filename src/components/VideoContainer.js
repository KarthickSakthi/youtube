import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../constant";
import VideoCard from "./VideoCard";

export function VideoContainer(){
  const [videos, setVideos] = useState([]);

    useEffect(function getVideos(){
        fetchVideos();
    },[]);

     const  fetchVideos=async()=>{
        const videosData = await fetch(YOUTUBE_VIDEO_API);
        const response = await videosData.json();;
        console.log("VideoContainer", response)
        setVideos(response.items);
    }

    return(<div className="flex flex-wrap">
    {videos.map(video=> <VideoCard key={video.id} info={video}/>)}
    </div>)
}