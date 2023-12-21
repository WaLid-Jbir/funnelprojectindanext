'use client';

import React from 'react'
import BlogCard from './cards/BlogCard';
import Small_Button_Orange from './sub_components/Small_Button_Orange';
import { useState, useEffect, useContext } from "react";
import PostsContext from "@/context/PostsContext";
import axios from "axios";


const Bloglist = ({blogList},props) => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState();

  const { setPosts: postContextFunc } = useContext(PostsContext);

  

  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = () => {
    axios.get("http://localhost:3001/api/posts", {
        headers: {
          'api-key': '28cf1601-5b6a-4136-9094-01f91b147e81',
        }
      })
      .then(response => {
        console.log(response.data);
        setPosts(response.data);
        postContextFunc(response.data);
      })
      .catch(err => {
        setError("Error fetching posts");
      });
  }
  if (posts?.length === 0) {
    return <div className="text-center items-center bg-white text-4xl h-[1080px]">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-3xl mt-10">
        <img
          src="faq.png"
          alt="error"
          className="w-96 h-96 object-cover"
        />
      </div>
    );
  }
  const firstThreePosts = posts.slice(0, 3);
  return (
    <section id="blog" className={`container relative pt-24 mx-auto ${props.activeNav === '#blog' ? 'active' : ''}`} >
      <div className="container pb-6 bg-[#f3f3f3] rounded-lg rounded-tl-[100px] shadow-ld">

        <div className=' flex flex-col lg:flex-row  justify-between items-center px-24 pt-12'>
          <div className='flex flex-col'>
            <h2 className=" text-4xl font-bold text-gray-900 "> {blogList.blogListTitleOne}<span className='text-orange-500'> {blogList.blogListTitleTwo}</span></h2>
            <p className=" text-gray-700 text-lg leading-relaxed py-2">{blogList.blogListTitlecontent}</p>
          </div>

          <div className='pt-6 lg:py-0 flex flex-row'>
            {/* <AddBlog /> */}
            <Small_Button_Orange title={blogList.blogListbutton} href={`${localStorage.getItem(`lng`)}/blogs`} />
          </div>

        </div>
        <div className='py-6 md:mx-16 mx-2 gap-4 lg:gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-auto'>
          {firstThreePosts?.map((post) => {
            return (
            
                <BlogCard blogList={blogList} slug={post.slug} tag={post.tag} title={post.title} img={post.img} key={post.title} content={post.content} />
            
            );
          })}
        </div>

      </div>
    </section>
  )
};
export default Bloglist;