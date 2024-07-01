import React from "react";
import User from "../images/user.png"


function ChatMessage({name, message}){
    return(
       <div className="flex items-center shadow-sm p-2">
<img className="h-8" alt="user" src={User}/>
<span className="font-bold px-2">{name}</span>
<span>{message}</span>
       </div>
    )
}

export default ChatMessage;