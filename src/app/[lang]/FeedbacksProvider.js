// FeedbacksProvider.js
'use client';
import {  useState } from "react";
import FeedbacksContext from "@/context/FeedbacksContext";



export const FeedbacksProvider = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState([]);

  return (
    <FeedbacksContext.Provider value={{ feedbacks, setFeedbacks }}>
      {children}
    </FeedbacksContext.Provider >
  );
};
