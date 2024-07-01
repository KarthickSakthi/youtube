import React from "react";
import ChatMessage from "./ChatMessage";


function LiveChat(){
    return(
        <div roun className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg">
         <ChatMessage 
         name={"Karthick Sakthi"}
         message={"Hi all"}
         />
        </div>
    )
}

export default LiveChat;