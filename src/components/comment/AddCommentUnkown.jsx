'use client'
import React, { use, useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { IoIosArrowForward } from 'react-icons/io';
import Swal from 'sweetalert2';
import axios from 'axios';

const AddCommentUnkown = (A) => {
  const { user, error, isLoading } = useUser();

  const handleClick = async (event) => {
    event.preventDefault();

    const commentData = {
      name: event.target.name.value,
      email: event.target.email.value,
      img : `https://ui-avatars.com/api/?name=${event.target.name.value}&background=random`,
      comment: event.target.comment.value,
      postId : A,
    };

    const formData = new FormData(); // Create a new FormData object

    // Add fields to the FormData object
    formData.append('name', commentData.name); 
    formData.append('email', commentData.email);
    formData.append('comment', commentData.comment);
    formData.append('img', commentData.img);
    formData.append('postId', commentData.postId.A);
    try {
      const response = await axios.post('http://localhost:3001/api/create-comment', formData, {
        headers: {
          'api-key': '28cf1601-5b6a-4136-9094-01f91b147e81',
          'Content-Type': 'multipart/form-data', // Set the correct content type for form data
        },
      });

      // Handle the response if needed
      Swal.fire({
        title: "Thank You",
        text: "Your comment will be reviewed before publication",
        icon: "success"
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Please resend the comment...",
        text: "Something went wrong!",
      });
    }

  }


  return (
    <div>
      {!user && (
        <div className="r shadow-lg my-6 mx-12 lg:mx-32 rounded-lg bg-white">
          <h3 className="px-6 pt-4 pb-1 text-2xl font-semibold text-gray-900">Add your Comment</h3>

          <form onSubmit={handleClick} className="w-full   px-4 py-4" >
            <div className='flex flex-col lg:flex-row gap-6'>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                </label>

                <input
                  type="text"
                  name="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 hover:bg-gray-100 focus:ring-violet-500 focus:outline-none block w-full p-2.5"
                  placeholder={'Name'}
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                </label>
                <input
                  type="email"
                  name="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 hover:bg-gray-100 focus:ring-violet-500 focus:outline-none block w-full p-2.5"
                  placeholder="nom@company.com"
                  required
                />
              </div>
            </div>
            {/* <div className=" py-2">
              <img className=" rounded-full w-8 h-8 sm:w-10 sm:h-10" src="https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_640.png" alt={user.name} />
            </div> */}
            <div className="flex flex-grow ">
              <div className="w-full md:w-full">
                <textarea
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 hover:bg-gray-100 focus:ring-violet-500 focus:outline-none block w-full p-2.5"
                  name="comment"
                  placeholder="Type Your Comment"
                  required
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              data-te-ripple-init
              data-te-ripple-color="light"
              className="inline-block self-start bg-violet-700 text-white rounded-full px-6 py-2 my-4  hover:bg-violet-600 transform hover:scale-110 transition duration-500 ease-in-outgap-3"
            >
              <IoIosArrowForward size={20} />
            </button>
          </form>
        </div>
      )}
    </div>
  );

}
export default AddCommentUnkown;
