// PostsProvider.js
'use client';
import {  useState } from "react";
import PostsContext from "@/context/PostsContext";



export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  return (
    <PostsContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostsContext.Provider>
  );
};
