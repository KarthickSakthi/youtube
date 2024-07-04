import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../store/chatSlice";
import { generateRandomName, generateRandomString } from "../utils";


function LiveChat(){
    const dispatch = useDispatch();
    const messages = useSelector(store=> store.chat.messages);

    useEffect(function getMessages(){
        const timer = setInterval(()=>dispatch(addMessage({
         name: generateRandomName(),
         message: generateRandomString(25) + " 😁"
        })),1000);

        return ()=>{
            clearInterval(timer)
        }
    },[])
    return(
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
    )
}

export default LiveChat;