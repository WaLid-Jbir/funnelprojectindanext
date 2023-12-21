'use client'
import { useEffect } from 'react';
import Link from 'next/link';
import { BiChevronRight } from 'react-icons/bi';

const Banner = ({contentBanner}, props) => {

  return (
  <section>
    <div className="flex flex-col space-y-4 justify-center pt-24 lg:pt-36 lg:items-center">
      <div className="container px-4 flex flex-wrap items-center justify-between ">
        <div className="flex flex-col items-start mt-12 mb-16 text-left  lg:w-1/2  md:mb-0 xl:mt-0">
            <Link className="inline-flex  justify-between items-center py-1 px-1 pr-4 mb-8 text-xs tracking-wider uppercase text-gray-700 bg-gray-100 rounded-full  hover:bg-gray-200 " href="#donatecard" role="alert">
              <span className=" text-xs bg-violet-600 rounded-full text-white px-4 py-1.5 mr-3">{contentBanner.heroHeadButton}</span> <span className="text-sm font-medium">{contentBanner.heroHeadTitle}</span>
              <BiChevronRight size={20} className="ml-2" />
            </Link>
            <h1 className="mb-8 max-w-7xl text-5xl font-extrabold leading-none tracking-tighter text-gray-800 md:text-7xl lg:text-6xl">
              {contentBanner.bigTitle}
              <span className='text-violet-700 ml-3'>
                {contentBanner.bigTitleSpan}
              </span>
            </h1>
            <h3 className='text-2xl font-medium text-orange-500 mb-2'>
              {contentBanner.subTitle}
            </h3>
            <div className="border-2 border-violet-500 w-16 mb-6"></div>
            <p className="mb-4 text-base max-w-7xl leading-relaxed text-left text-gray-500">
                {contentBanner.content}
            </p>
            <div className="flex-col mt-0 lg:mt-6 max-w-7xl sm:flex">
              <div className="items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start space-x-4">
                <Link href={`/en/donate`} className="rounded-full  font-medium  text-white bg-violet-500  hover:bg-violet-700 px-9 py-3">
                  {contentBanner.button}
                </Link>
              </div>
              <div className="sm:max-w-7xl sm:flex">
                <p className="mt-3 text-xs text-gray-500">
                    {contentBanner.smallTitleUnderButton}
                </p>
              </div>
            </div>
        </div>
        <div className="w-full lg:max-w-2xl lg:w-1/2 rounded-xl">

            <div className="relative w-full max-w-2xl">
              <div className="absolute top-0 rounded-full bg-violet-300 -left-4 sm:w-72 sm:h-72 w-32 h-32 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="relative">
                <img className="object-cover object-center mx-auto rounded-2xl shadow-2xl mt-6" alt="hero" src="/pictures/hero.webp" />
              </div>
            </div>
        </div>
      </div>
    </div>
  </section>
 ) 
};

export default Banner;