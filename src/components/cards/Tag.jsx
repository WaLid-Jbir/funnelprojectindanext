import React from 'react'

const Tag = ({tag, isSelected, setSelectedTags }) => {
  if (isSelected) {
    return (
      <div
        onClick={() => {
          setSelectedTags((prev) => prev.filter((item) => item !== tag));
        }}
        className="bg-violet-600 text-white font-semibold py-2 px-4 rounded-full hover:shadow-lg transition duration-300  flex items-center justify-center"
      >
        {tag}
      </div>
    );
  }
  return (
    <div
      onClick={() => {
        setSelectedTags([tag])
      }}
      className="bg-gray-200 text-gray-600 font-semibold py-2 px-4 rounded-full hover:shadow-lg transition duration-300  flex items-center justify-center">
      {tag}
    </div>
  );
};

export default Tag;