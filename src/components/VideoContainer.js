import React, { useEffect, useState } from "react";
import {  YOUTUBE_VIDEOS_API } from "../constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

export function VideoContainer(){
  const [videos, setVideos] = useState([]);

    useEffect(function getVideos(){
        fetchVideos();
    },[]);

     const  fetchVideos=async()=>{
        const videosData = await fetch(YOUTUBE_VIDEOS_API);
        const response = await videosData.json();;
        setVideos(response.items);
    }

    return(<div className="flex flex-wrap">
    {videos.map(video=> 
    
    <Link to={`watch?v=${video.id}`}><VideoCard key={video.id} info={video}/> </Link>)}
    </div>)
}