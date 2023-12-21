import React from 'react';

const TimeAgo = ({ commentDate }) => {
  const timeSincePost = (commentDate) => {
    const currentDate = new Date();
    const commentDateTime = new Date(commentDate);
    const timeDifference = currentDate - commentDateTime;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const years = Math.floor(days / 365);

    if (years > 0) {
      return ` ${years} year${years > 1 ? 's' : ''}`;
    } else if (days > 0) {
      return ` ${days} day${days > 1 ? 's' : ''}`;
    } else if (hours > 0) {
      return ` ${hours} h${hours > 1 ? 's' : ''}`;
    } else if (minutes > 0) {
      return ` posted ${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else {
      return ` posted a few seconds ago`;
    }
  };

  return <span>{timeSincePost(commentDate)}</span>;
};

export default TimeAgo;
