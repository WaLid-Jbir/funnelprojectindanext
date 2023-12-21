'use client'
import { useEffect, useState } from "react";
import axios from "axios";
import { BiLogoWhatsapp, BiLogoFacebookSquare, BiLogoTwitter } from 'react-icons/bi';
import Link from "next/link";
import { CommentList, AddComment, AddCommentUnkown } from "@/components";
import { Container } from "postcss";

const SingleBlogPage = ({ params: { slug }}) => {
  const [error, setError] = useState(null);
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get(`http://localhost:3001/api/posts/${slug}`, {
      headers: {
        'api-key': '28cf1601-5b6a-4136-9094-01f91b147e81'
      }
    })
      .then(res => {
        setPost(res.data);
        postContextFunc(res.data);
      })
      .catch(err => {
        setError('Error fetching posts');
      });
      
  };
  
  console.log(post?._id)
  // if (error) {
  //   return (
  //     <div className="flex flex-col items-center justify-center w-full h-full mt-20">
  //       <h1 className="text-4xl font-bold">Error</h1>
  //       <p className="text-5xl mt-10 text-gray-500 md:w-1/2 text-center px-10">
  //         Loading ...
  //       </p>
  //       <img
  //         src="https://images.unsplash.com/photo-1617142108319-66c7ab45c711?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80"
  //         alt="error"
  //         className="w-96 h-96 object-cover mt-20 rounded-lg"
  //       />
  //     </div>
  //   );
  // }

  return (
    <container>
      <div className="flex flex-col items-center w-full pt-32 bg-white">
        <div className="max-w-7xl md:p-8 pt-8  rounded-lg">
          <div className="flex flex-col lg:flex-row items-center">
            <div className=" w-full lg:w-1/2 flex flex-col items-start justify-center">
              <p className="flex text-gray-700 ">{new Date(post?.date).toLocaleDateString()}</p>
              <h1 className=" text-2xl md:text-4xl font-bold mb-4 capitalize max-w-xl">{post?.title || "No title found for this post!"}</h1>
              <div className="flex justify-between text-gray-500">

                <div className="flex gap-4 text-2xl">
                  Share on :
                  <Link
                    className="flex justify-center items-center"
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                      window.location.href
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BiLogoTwitter className='text-violet-500' />
                  </Link>
                  <Link
                    className="flex justify-center items-center"
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      window.location.href
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BiLogoFacebookSquare className='text-violet-500' />
                  </Link>
                  <Link
                    className="flex justify-center items-center"
                    href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                      window.location.href
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BiLogoWhatsapp className='text-violet-500' />
                  </Link>
                </div>
              </div>
            </div>
            <img
              src={`http://localhost:3001/${post?.img}`}
              className=" w-full m-4 lg:w-1/2 h-96 object-cover object-center mb-4 rounded-lg"
              alt={post?.title}
            />
          </div>

          <p className="text-lg mx-4 sfont-medium text-gray-700 mt-6 leading-loose text-justify" dangerouslySetInnerHTML={{ __html: post?.content }}></p>

        </div>
        <div className=" w-full bg-gray-100 py-24">
          <CommentList postid={post?._id}/>
          <AddComment A={post?._id}/>
          <AddCommentUnkown A={post?._id} />
        </div>
      </div>
    </container>
  );
};

export default SingleBlogPage;
