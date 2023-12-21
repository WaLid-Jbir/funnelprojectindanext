
import React, { useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import axios from 'axios';
import Swal from 'sweetalert2'; // Import SweetAlert

const AddTestimonialButton = ({ onAddTestimonial }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [userImg, setUserImg] = useState(null);
  const [companyImg, setCompanyImg] = useState(null);
  const { user, isLoading } = useUser();

  const handleUserImageUpload = (event) => {
    setUserImg(event.target.files[0]);
    handleUserImagelabel();
  };
  const handleCompImageUpload = (event) => {
    setCompanyImg(event.target.files[0]);
    handleUsercomplabel();
  };

  const handleUserImagelabel = () => {
    const fileInput = document.getElementById("userImg");
    const selectedFileNameUser = document.getElementById("selectedFileNameUser");

    const fileName = fileInput.files[0].name;
    selectedFileNameUser.innerText = fileName;

  };

  const handleUsercomplabel = () => {
    const fileInput = document.getElementById("companyImg");
    const selectedFileNameCompany = document.getElementById("selectedFileNameCompany");

    const fileName = fileInput.files[0].name;
    selectedFileNameCompany.innerText = fileName;

  };

  const handleButtonClick = () => {
    setIsOpen(true);
    document.body.classList.add('overflow-hidden');
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const testimonialData = {
      description: event.target.description.value,
      name: event.target.name.value,
      companyName: event.target.companyName.value,
    };

    const formData = new FormData();
    // Add testimonialData properties to the formData
    formData.append('name', testimonialData.name);
    formData.append('description', testimonialData.description);
    formData.append('companyName', testimonialData.companyName);
    formData.append('userImg', userImg);
    formData.append('companyImg', companyImg);

    try {
      console.log(process.env.API_KEY)
      const response = await axios.post('http://localhost:3001/api/create-testimonial', formData, {
        headers: {
          'api-key': '28cf1601-5b6a-4136-9094-01f91b147e81',
          'Content-Type': 'multipart/form-data',
        }
      });

      // Handle the response if needed
      console.log(response.data);
      // Show success SweetAlert
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Testimonial submitted successfully!',
      });
    } catch (error) {
      // Handle errors
      console.error(error);

      // Display error message from the backend
      if (error.response) {
        const errorMessage = error.response.data;
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: errorMessage,
        });
      } else {
        // Handle other types of errors (e.g., network error)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      }
    }

    onAddTestimonial(testimonialData);

    // Reset the form and close the popup
    event.target.reset();
    setIsOpen(false);
  };

  const handleCloseButtonClick = () => {
    setIsOpen(false);
    document.body.classList.remove('overflow-hidden');
  };



  return (
    <div>
      {user && (
        <button
          onClick={handleButtonClick}
          className="bg-transparent  hover:bg-orange-500 hover:text-white text-orange-500 font-medium border-2 border-orange-500 py-3 px-4 mb-2 rounded-full transform hover:scale-110 transition duration-500 ease-in-out "
        >
          Add Your Testimonial
        </button>
      )}

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div onClick={handleCloseButtonClick} className="bg-black bg-opacity-50 absolute inset-0"></div>
          <div className="bg-white p-8 rounded shadow-lg z-10 max-h-screen overflow-y-auto">
            <form onSubmit={(event) =>{handleFormSubmit(event), handleCloseButtonClick()}}>
              <div className="flex justify-end mx-4">
                <button
                  onClick={handleCloseButtonClick}
                  className="bg-transparent  hover:bg-orange-500 hover:text-white text-orange-500 font-bold border-2 border-orange-500 py-1 px-3 mb- rounded-lg transition"
                >
                  X
                </button>
              </div>
              <div className='flex flex-col lg:flex-row '>
                <div className="grid grid-cols-1 mt-5 mx-7">
                  <label htmlFor="name" className="md:text-sm text-xs text-gray-500 text-light font-semibold">
                    Name<span className='required'></span>
                  </label>
                  <input
                    className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    id="name"
                    name="name"
                    type="text"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 mt-5 mx-7">
                  <label htmlFor="companyName" className="md:text-sm text-xs text-gray-500 text-light font-semibold">
                    Company Name<span className='required'></span>
                  </label>
                  <input
                    className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    id="companyName"
                    name="companyName"
                    type="text"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 mt-5 mx-7">
                <label htmlFor="description" className="md:text-sm text-xs text-gray-500 text-light font-semibold">
                  Description<span className='required'></span>
                </label>
                <textarea
                  className="max-h-32 py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  id="description"
                  name="description"
                  required
                />
              </div>
              <div className="grid grid-cols-1 mt-5 mx-7">
                <label htmlFor="userImg" className="md:text-sm text-xs text-gray-500 text-light font-semibold">
                  Your Image<span className='required'></span>
                </label>
                <div className='flex items-center justify-center w-full py-2 '>
                  <label className='flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-purple-300 group cursor-pointer'>
                    <div className='flex flex-col items-center justify-center pt-7'>
                      <svg className="w-10 h-10 text-purple-400 group-hover:text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                      <p id="selectedFileNameUser" className='lowercase text-sm text-gray-400 group-hover:text-purple-600 pt-1 tracking-wider'>Select a photo</p>
                    </div>
                    <input
                      className="hidden"
                      id="userImg"
                      name="userImg"
                      type="file"
                      onChange={(event) => {
                        handleUserImageUpload(event);
                        handleUserImagelabel();
                      }}
                      required
                    />
                  </label>
                </div>

              </div>
              <div className="grid grid-cols-1 mt-5 mx-7">
                <label htmlFor="companyImg" className="md:text-sm text-xs text-gray-500 text-light font-semibold">
                  Company Image<span className='required'></span>

                </label>
                <div className='flex items-center justify-center w-full py-2 '>
                  <label className='flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-purple-300 group cursor-pointer'>
                    <div className='flex flex-col items-center justify-center pt-7'>
                      <svg className="w-10 h-10 text-purple-400 group-hover:text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                      <p id="selectedFileNameCompany" className='lowercase text-sm text-gray-400 group-hover:text-purple-600 pt-1 tracking-wider'>Select a photo</p>
                    </div>
                    <input
                      className="hidden"
                      id="companyImg"
                      name="companyImg"
                      type="file"
                      onChange={(event) => {
                        handleCompImageUpload(event);
                        handleUsercomplabel();
                      }}
                      required
                    />
                  </label>
                </div>
              </div>
              <div className="flex justify-end pt-2 mx-7">
                <button
                  type="submit"
                  className="bg-transparent  hover:bg-violet-700 hover:text-white text-violet-700 font-bold border-2 border-violet-700 py-2 px-4 rounded-full transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddTestimonialButton;