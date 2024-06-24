import React from "react";
import { Sidebar } from "./Sidebar";
import { MainContainer } from "./MainContainer";

export function Body(){
    return(
    <div className="grid grid-flow-col"><Sidebar/> <MainContainer/></div>)
}