import React, { useEffect, useState } from "react";
import logo from "./../images/logo.png"
import Menu from "./../images/menu.png"
import User from "./../images/user.png"
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../store/appSlice";
import { YOUTUBE_SEARCH_API } from "../constant";
import { cacheResults } from "../store/searchSlice";

export function Head(){
    const [searchQuery , setSearchQuery] = useState();
    const [suggestions, setSuggestions] = useState([]);
    const searchCache = useSelector(store =>store.search);
    const dispatch = useDispatch();

    useEffect(function debounceSearcQuery(){
        let timer = searchQuery && setTimeout(()=>{
            if(searchCache[searchQuery]){
                setSuggestions(searchCache[searchQuery])
            }
            else{
            generateSuggestions();}},500)

        return function cleanUp(){
            clearTimeout(timer);
        }
    },[searchQuery]);


    async function generateSuggestions(){
     const suggestion = await fetch(YOUTUBE_SEARCH_API+searchQuery);
     const result = await suggestion.json();
      setSuggestions(result[1]);
      dispatch(cacheResults({[searchQuery]: result[1]}));
    }
    
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
                <div>
               <input className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full" type="text" onChange={(event)=> setSearchQuery(event.target.value)}
               onBlur={()=>setSuggestions([])}
               /> 
               <button className="border border-gray-400 py-2 px-5 rounded-r-full bg-gray-100"> 🔍 </button>
               </div>
         
            <div className="fixed bg-white py-2 px-5 w-[37rem] shadow-lg rounded-lg border-gray-100">
           <ul>
            {suggestions.map((suggestion)=> <li key={suggestion} className="py-2 shadow-sm hover:bg-gray-100">🔍 {suggestion}</li>)}
           </ul>
            </div>
            </div>
            <div className="col-span-1">
            <img className="h-8" alt="user" src={User}/>  
            </div>
        </div>
    )
}