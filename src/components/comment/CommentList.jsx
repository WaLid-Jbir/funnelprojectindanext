'use client'
import React from 'react';
import { useState, useEffect, useContext } from 'react';
import Comment from './Comment';
import CommentsContext from "@/context/CommentsContext";
import axios from "axios";

const CommentList = ({postid}) => {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState();

  const { setComments: commentsContextFunc } = useContext(CommentsContext);


  console.log("post id in CommentList ", postid);

  

  useEffect(() => {
    console.log("post id in fetchdata ", postid);
    if(postid !== undefined) {
      axios.get(`http://localhost:3001/api/comments?postId=${postid}`, {
      headers: {
        'api-key': '28cf1601-5b6a-4136-9094-01f91b147e81',
      }
    })
      .then(response => {
        setComments(response.data);
        commentsContextFunc(response.data);
      })
      .catch(error => {
        setError("Error fetching comments", error);
      });
    }
  }, [postid]);


  // if (error) {
  //   return (
  //     <div className="text-center text-3xl mt-10">
  //       <img
  //         src="faq.png"
  //         alt="error"
  //         className="w-96 h-96 object-cover"
  //       />
  //     </div>
  //   );
  // }

  return (
    <div className="antialiased mx-auto px-6 lg:px-0 max-w-screen-md">

      <h3 className="mb-4 text-3xl font-semibold text-gray-900">Comments</h3>
      <div className="space-y-4">

        {comments?.map((comment) => {
          
            if (comments?.length === 0) {
              return (<div className="text-center items-center bg-white text-4xl h-[1080px]">Loading...</div>)
            } else{

            return <Comment  name={comment.name} createdAt={comment.createdAt} img={comment.img} key={comment.name} comment={comment.comment} />

          }
        })}

        <div className="flex">
          <div className="flex-shrink-0 mr-3">
            <img className="mt-2 rounded-full w-12 h-12 sm:w-10 sm:h-10" src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80" alt="" />
          </div>
          <div className="flex-1 text-xl  rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed bg-white">
            <strong>Sarah</strong> <span className="text-sm text-gray-400">3:34 PM</span>
            <p className="text-lg text-justify">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua.
            </p>
          </div>
        </div>

        <div className="flex">
          <div className="flex-shrink-0 mr-3">
            <img className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10" src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80" alt="" />
          </div>
          <div className="flex-1 text-xl  rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed bg-white">
            <strong>Sarah</strong> <span className="text-sm text-gray-400">3:34 PM</span>
            <p className="text-lg text-justify">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentList;
