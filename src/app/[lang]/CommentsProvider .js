// PostsProvider.js
'use client';
import {  useState } from "react";
import CommentsContext from "@/context/CommentsContext";



export const CommentsProvider = ({ children }) => {
  const [Comments, setComments] = useState([]);

  return (
    <CommentsContext.Provider value={{ Comments, setComments }}>
      {children}
    </CommentsContext.Provider>
  );
};
