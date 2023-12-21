'use client'
import { IoIosArrowBack } from "react-icons/io";
import Image from "next/image";

const PeBanner = () => {
  return (
      <div className="px-6 lg:px-8 py-12 lg:pt-28">
        <div className="mx-auto max-w-7xl pt-16 sm:pt-20 pb-20 bg-no-repeat bg-top bg-contain lg:bg-cover"
            style={{ backgroundImage: 'url("/banner/shapes.svg")' }}
          >

          <div className="text-center">
            <h1 className="text-4xl font-semibold text-violet-700 sm:text-5xl  lg:text-7xl md:4px">
              Being An <span className="text-orange-500">INDA</span> <br /> Partner Company.
            </h1>
            <p className="mt-6 lg:max-w-2xl mx-auto text-lg leading-8 text-gray-800">
              Descouver now the advantage of being our partener and join our teams to reach the goals, with International Neurologic Disease Association .
            </p>
          </div>


          {/* <div className="flex text-center mt-5 items-center justify-center">
            <button type="button" className='mr-4 text-15px text-gray-800 font-medium hover:text-white hover:bg-orange-500  bg-gray-300 py-4 px-6  transition duration-500 ease-in-out rounded-full '>
            <span className="flex items-center justify-center  "><IoIosArrowBack className="mr-1" /> Home</span>
            </button> 
            <button type="button" className='text-15px font-medium text-white bg-violet-500 hover:bg-violet-600 hover:shadow-md text-orange  px-8 py-4 transform hover:scale-105 transition duration-500 ease-in-out rounded-full'>
              Contact
            </button>

          </div> */}

          {/* <Image src={'/assets/banner/dashboard.svg'} alt="banner-image" width={1200} height={598} /> */}
          </div>
        </div>
  )
}

export default PeBanner;