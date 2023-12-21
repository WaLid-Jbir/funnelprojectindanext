
import React from 'react';
import { TimeAgo } from '..';

const Comment = ({name, img, comment, createdAt }) => {
  return (
    <div className="flex">
          <div className="flex-shrink-0 mr-3">
            <img className="mt-2 rounded-full w-12 h-12 sm:w-10 sm:h-10" src={img} alt={name} />
          </div>
          <div className="flex-1 text-xl  rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed bg-white">
            <strong>{name}</strong> <span className="text-sm text-gray-400"><TimeAgo commentDate={createdAt} /></span>
            <p className="text-lg text-justify">
            {comment}
            </p>
          </div>
        </div>
  );
};

export default Comment;
