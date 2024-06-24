import React from "react";
import logo from "./../images/logo.png"
import Menu from "./../images/menu.png"
import User from "./../images/user.png"
import { useDispatch } from "react-redux";
import { toggleMenu } from "../store/appSlice";

export function Head(){
    const dispatch = useDispatch();
    
    function toggleMenuHandler(){
        dispatch(toggleMenu())
    }
    return(
        <div className="grid grid-flow-col p-5 m-2 shadow-lg">
            <div className="flex col-span-1">
            <img className="h-8 cursor-pointer" alt="menu" src={Menu} onClick={()=>toggleMenuHandler()}/>
             <img className="h-8" alt ="logo" src={logo}/>
            </div>
            <div className="col-span-10 px-10 ">
               <input className="w-1/2 border border-gray-400 p-2 rounded-l-full" type="text"/> 
               <button className="border border-gray-400 py-2 px-5 rounded-r-full bg-gray-100"> 🔍 </button>
            </div>
            <div className="col-span-1">
            <img className="h-8" alt="user" src={User}/>  
            </div>
        </div>
    )
}