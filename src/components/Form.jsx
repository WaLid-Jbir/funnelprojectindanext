'use client'

import React from 'react'
import { BiPhoneCall, BiMailSend, BiLocationPlus, BiLogoFacebookSquare, BiLogoTwitter, BiLogoInstagramAlt } from 'react-icons/bi';
import { Link } from 'react-scroll';
import axios from 'axios';

const Form = ({ contact }) => {

  const handleClick = async (event) => {
    event.preventDefault();

    const messageData = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
    };

    const formData = new FormData(); // Create a new FormData object

    // Add fields to the FormData object
    formData.append('name', messageData.name); // Assuming 'name' is the field name expected in the backend
    formData.append('email', messageData.email); // Assuming 'email' is the field name expected in the backend
    formData.append('message', messageData.message); // Assuming 'message' is the field name expected in the backend
    try {
      const response = await axios.post('http://localhost:3001/api/create-message', formData, {
        headers: {
          'api-key': '28cf1601-5b6a-4136-9094-01f91b147e81',
          'Content-Type': 'multipart/form-data', // Set the correct content type for form data
        },
      });

      // Handle the response if needed
      console.log(response.data);
      alert('Message submitted successfully!');
    } catch (error) {
      // Handle errors
      console.error(error);
    }

  }
  return (
    <section id="contact" className='container py-24 mx-auto'>
      <div className='flex flex-col w-full justify-center items-center'>
        <div className='flex flex-col md:flex-row justify-between space-y-6 gap-4 bg-gray-100 w-full py-6 lg:py-12 px-6 lg:px-12 rounded-lg shadow-lg z-20  '>
          <div className='flex flex-col md:w-1/2 space-y-8 justify-between py-6'>
            <div className=''>
              <h1 className='font-extrabold text-3xl lg:text-5xl pt-2 pb-4 tracking-wide'>{contact.contactTitle}<span className='text-violet-700'>{contact.contactspanTitle}</span></h1>
              <p className='py-2 text-xl  text-gray-700 '>
                {contact.contactsubTitle} <br /> {contact.contactsubTitleOne}
              </p>
              <button className='inline-flex items-center rounded-full border-2 font-medium text-lg border-white-500 bg-orange-500 hover:bg-orange-600 text-white hover:shadow-md border-orange-600 text-orange  px-5  transform hover:scale-110 transition duration-500 ease-in-outgap-3'
                onClick={() => window.location.href = `'tel:+2120604050221'`}>
                <div><BiPhoneCall className='my-3 w-6 h-6 mr-2 ' /></div>{contact.contactCall}
              </button>
            </div>
            <div className='flex flex-col space-y-2 text-gray-700'>
              <p className='font-medium text-lg text-gray-700 '>
                {contact.contactsubTitleThree}
              </p>
              <div className='flex flex-row px-2 space-x-2 justify-start items-center gap-3'>
                <div><BiMailSend className='my-3 w-6 h-6 text-violet-700' /></div>
                <span> test@mail.com </span>
              </div>
              <div className='flex flex-row px-2 space-x-2 justify-start items-center gap-3'>
                <div><BiLocationPlus className='my-3 w-6 h-6 text-violet-700' /></div>
                <span className='max-w-xs'> International Neurologic Diseases Association | 10 rue de Penthièvre 75008 Paris France </span>
              </div>
            </div>
            <div className='flex space-x-4 px-2 text-2xl justify-start text-gray-700'>
              <Link href='#'>
                <BiLogoFacebookSquare className='text-violet-500' />
              </Link>
              <Link href='#'>
                <BiLogoTwitter className='text-violet-500' />
              </Link>
              <Link href='#'>
                <BiLogoInstagramAlt className='text-violet-500' />
              </Link>
            </div>
          </div>
          <div className='bg-white md:w-1/2 rounded-xl shadow-lg p-8 text-gray-700'>
            <form onSubmit={handleClick}>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  {contact.contactFormName}
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
                  {contact.contactFormEmail}
                </label>

                <input
                  type="email"
                  name="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 hover:bg-gray-100 focus:ring-violet-500 focus:outline-none block w-full p-2.5"
                  placeholder="nom@company.com"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  {contact.contactFormMessage}
                </label>

                <textarea

                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 hover:bg-gray-100 focus:ring-violet-500 focus:outline-none block w-full p-2.5"
                  rows="4"
                  name="message"
                  placeholder="Message..."
                ></textarea>
              </div>
              <button
                type="submit"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="inline-block self-start bg-violet-700 text-white rounded-full px-6 py-2  hover:bg-violet-600 transform hover:scale-110 transition duration-500 ease-in-outgap-3"
              >
                {contact.contactFormButton}
              </button>

            </form>
          </div>
        </div>
        <div className=" flex lg:flex-row px-20 max-w-5xl  mb-10 items-center -mt-12 lg:mx-64 lg:-mt-24 bg-gradient-to-r from-orange-400 to-violet-400 rounded-lg z-0">

          <div className='flex flex-col px-12'>
            <h3 className="text-4xl md:text-55xl text-center font-semibold text-white mt-32">For Companies.</h3>
            <h3 className="text-lg font-normal opacity-75 text-white text-center mb-8">
              Visite our Partnership Page, <br /> For More Informations.
            </h3>
          </div>

          <div className="flex py-6 items-center">
              <a  className=' mt-28 flex items-center justify-center text-15px font-medium text-white  bg-violet-500 hover:bg-violet-600 hover:shadow-md text-orange  px-8 py-4 transform hover:scale-105 transition duration-500 ease-in-out rounded-full' href={`/en/partenaria-entreprise`}>
                Contact
                <img className="ml-2" src={'/Contact/plane.svg'} alt="plane-img" width={20} height={20} />
              </a>
            </div>

        </div>

      </div>
    </section>
  )
}
export default Form;