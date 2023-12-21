'use client';
import { useState, useEffect, useContext } from "react";
import {BlogNav, BlogCardP, Tag } from "@/components";
import PostsContext from "@/context/PostsContext";
import axios from "axios";

export default function BlogLang({BlogPL, blogList}) {

  const [posts, setPosts] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [error, setError] = useState();

  const { setPosts: postContextFunc } = useContext(PostsContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('http://localhost:3001/api/posts', {
        headers: {
          'api-key': '28cf1601-5b6a-4136-9094-01f91b147e81'
        }
      })
      .then(res => {
        setPosts(res.data);
        postContextFunc(res.data);
      })
      .catch(err => {
        setError('Error fetching posts');
      });
  };

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
  return (
    <main className=" w-full content-center min-h-screen max-w-screen items-center pb-16 px-4 md:px-12 lg:px-24 bg-gray-50">
      <BlogNav BlogPL={BlogPL} posts={posts} />
      <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-10 flex flex-col justify-center items-center uppercase tracking-widest h-96">
        <span className="text-5xl border-b-4 pb-3 ">
        {BlogPL.BlogPLTitleOne} <span className="text-violet-700">{BlogPL.BlogPLTitleTwo}</span> <span className="text-orange-500">{BlogPL.BlogPLTitleThree}</span>
        </span>
        <p className="text-lg mt-10">
        {BlogPL.BlogPLSlogan}
        </p>
      </h2>
      <h2 className="flex flex-wrap mt-10 gap-4">
        {[
          ...new Set(
            posts?.map((post) => {
              return post.tag;
            })
          ),
        ].map((tag) => {
          return (
            <Tag key={tag} tag={tag} isSelected={selectedTags.includes(tag)} setSelectedTags={setSelectedTags} />
          )
        })}
        {selectedTags?.length !== 0 && (
          <button className="border-2 rounded-full border-orange-500 font-semibold text-orange-500 hover:bg-orange-500 hover:text-white px-4 py-2 " onClick={() => setSelectedTags([])}>
            Clear
          </button>
        )}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8  mt-10">
        {selectedTags?.length !== 0 && posts?.filter((post) => {
          return selectedTags.includes(post.tag);
        })
          .map((post) => {
            return (
              <BlogCardP blogList={blogList} slug={post.slug} tag={post.tag} title={post.title} img={post.img} key={post.title} content={post.content} />
            );
          })}
        {selectedTags?.length === 0 && posts.map((post) => {
          return (
            <BlogCardP blogList={blogList} slug={post.slug} tag={post.tag} title={post.title} img={post.img} key={post.title} content={post.content} />
          );
        })}
      </div>
    </main>
  )
}