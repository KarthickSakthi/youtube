import React from "react";
import { ButtonList } from "./ButtonList";
import { VideoContainer } from "./VideoContainer";

export function MainContainer(){
    return(<div className="col-span-10">
        <ButtonList/>
        <VideoContainer/>
    </div>)
}