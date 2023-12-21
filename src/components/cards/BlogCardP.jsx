'use client'

import Link from "next/link";

const BlogCardP = ({blogList, tag, img, title, content, slug }) => {
  return (
    <div className="flex  overflow-hidden rounded-lg shadow-lg cursor-pointer h-full  hover:shadow-xl  transform hover:scale-110 transition duration-500 ease-in-out">
      <Link href={`${localStorage.getItem(`lng`)}/post/${slug}`} className="block w-full h-full bg-white">
        <img alt="blog photo" src={` http://localhost:3001/${img}`} className="object-cover w-full h-52 m-auto " />

        <div className="w-full p-6 bg-white hover:bg-gray-50/95 h-full">
          <p className="font-medium text-violet-500 text-md ">
            {tag}
          </p>
          <p className="mb-2 text-sm md:text-base lg:text-lg xl:text-xl font-medium text-gray-800">
            {title}
          </p>
          <p className=" text-sm md:text-base lg:text-lg 2xl:text-xl text-gray-400 line-clamp-4">
            {content}
          </p>
          <button className="mt-4 bg-white text-violet-500 border-2 border-violet-500 font-medium py-2 px-4 rounded-full hover:text-white hover:bg-violet-500 hover:shadow-lg transition duration-300 ease-in-out flex items-center">
           {blogList.blogListbuttoncontent}
          </button>
        </div>
      </Link>
    </div>
  );
}
export default BlogCardP;