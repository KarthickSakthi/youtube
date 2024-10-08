import React, { useEffect } from "react";
import { closeMenu } from "../store/appSlice";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
function WatchPage({name}){
   const dispatch= useDispatch();
   const [searchParams] = useSearchParams();

    useEffect(function closeLeftMenu(){
        dispatch(closeMenu())
    })
    return(
        <div className="flex flex-col">
        <div className="px-5 flex">
            <div>
          <iframe width="1200" 
          height="600"
           src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
           title="YouTube video player"
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin"
             allowFullScreen>
             </iframe>
             </div>
  <LiveChat/>

        </div>
        <CommentsContainer/>
        </div>
    )
}

export default WatchPage;