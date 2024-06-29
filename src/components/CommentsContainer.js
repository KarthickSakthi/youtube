import React from "react";
import user from "../images/user.png";


const commentsData = [
    {
      name: "Karthick Sakthi",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Karthick Sakthi",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [
        {
          name: "Karthick Sakthi",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [],
        },
        {
          name: "Karthick Sakthi",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [
            {
              name: "Karthick Sakthi",
              text: "Lorem ipsum dolor sit amet, consectetur adip",
              replies: [
                {
                  name: "Karthick Sakthi",
                  text: "Lorem ipsum dolor sit amet, consectetur adip",
                  replies: [
                    {
                      name: "Karthick Sakthi",
                      text: "Lorem ipsum dolor sit amet, consectetur adip",
                      replies: [
                        {
                          name: "Karthick Sakthi",
                          text: "Lorem ipsum dolor sit amet, consectetur adip",
                          replies: [],
                        },
                      ],
                    },
                    {
                      name: "Karthick Sakthi",
                      text: "Lorem ipsum dolor sit amet, consectetur adip",
                      replies: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Karthick Sakthi",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Karthick Sakthi",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Karthick Sakthi",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Karthick Sakthi",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
  ];
  


function CommentsList({comments}){
    return comments.map((comment, index)=>(
<div key={index}>
        <Comment  data={comment}/>
        <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
        </div>
</div>
    ))
}

function Comment({data}){
    const {name, text, replies} = data;
    return(
        <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
            <img 
            className="w-12 h-12"
            alt="user"
            src={user}
            />
            <div className="px-3">
             <p className="font-bold">{name}</p>
             <p>{text}</p>
            </div>
        </div>
    )
}

function  CommentsContainer(){
    return(
        <div className="m-5 p-2">
            <h1 className="text-2xl font-bold">Comments:</h1>
            <CommentsList comments={commentsData}/>
        </div>
    )
}

export default CommentsContainer;