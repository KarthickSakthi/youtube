import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../store/chatSlice";
import { generateRandomName, generateRandomString } from "../utils";


function LiveChat(){
    const dispatch = useDispatch();
    const messages = useSelector(store=> store.chat.messages);
    const [liveMessage, setLiveMessage] = useState("");
    useEffect(function getMessages(){
        const timer = setInterval(()=>dispatch(addMessage({
         name: generateRandomName(),
         message: generateRandomString(25) + " 😁"
        })),2000);

        return ()=>{
            clearInterval(timer)
        }
    },[])
    return(
         <div className="flex flex-col">
        <div  className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
            {
                messages.map((chat)=>(
                    <ChatMessage 
                    name={chat.name}
                    message={chat.message}
                    />
                ))
            }

        </div>
        <div>
            <form className="w-full p-2 ml-2 border border-black" onSubmit={(event)=>{
                event.preventDefault();
                dispatch(addMessage({
                    name:"Karthick Sakthi",
                    message: liveMessage 
                }))
                setLiveMessage("")
            }}>
            <input
            className="px-2 w-96"
            type="text"
            value={liveMessage}
            onChange={(event)=>setLiveMessage(event.target.value)}
            />
            <button className="px-2 mx-2 bg-green-100">Send</button>
            </form>
        </div>
        </div>
    )
}

export default LiveChat;