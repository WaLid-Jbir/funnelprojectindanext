'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';
import ProfileClient from './ProfileClient';
import { motion } from 'framer-motion';
import LocaleSwitcher from './locale-switcher';

function App({nav, lng}) {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isLoading } = useUser();
  

  useEffect(() => {
    localStorage.setItem( "lng" , lng);
  });

  

  return (
    <>
      <nav className="  z-50 fixed top-0 left-0 right-0 border-b border-gray-200  bg-white">
        <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-3 lg:px-24">
          <Link href={`/${localStorage.getItem(`lng`)}`}>
            <img src="https://i.postimg.cc/3x8Pr4zY/faq-Asset-3.png" className=" h-14 mr-2" title="International Neurologic Diseases Association" alt="International Neurologic Diseases Association Logo" />
          </Link>
          <div className='flex flex-row'>
          <div className='block  lg:hidden justify-end items-end'>
            <ProfileClient />
          </div>
          <div className="block items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center px-3 py-2 rounded text-gray-500 hover:text-black-400"
            >
              <svg
                className={`fill-current h-4 w-4 ${isOpen ? "hidden" : "block"}`}
                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
              <svg
                className={`fill-current h-4 w-4 ${isOpen ? "block" : "hidden"}`}
                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
              </svg>
            </button>
          </div>
          </div>
          <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto  ${isOpen ? "block" : "hidden"}`}
          >
            <div className={`flex text-sm flex-col lg:flex-row justify-between lg:mx-auto lg:space-x-4 ${isOpen ? "ml-4 my-2 lg:my-0 " : " "}`}>
              <Link className={` text-base xl:text-lg py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent hover:text-violet-700`} href={`/${localStorage.getItem(`lng`)}`} aria-current="page">{nav.home}</Link>
              <Link className={` text-base xl:text-lg py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent hover:text-violet-700 `} href={`/${localStorage.getItem(`lng`)}#about`} >{nav.about}</Link>
              <Link className={` text-base xl:text-lg py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent hover:text-violet-700 `} href={`/${localStorage.getItem(`lng`)}#blog`} >{nav.blog}</Link>
              <Link className={` text-base xl:text-lg py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent hover:text-violet-700 `} href={`/${localStorage.getItem(`lng`)}#faq`} >{nav.faq}</Link>
              <Link className={` text-base xl:text-lg py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent hover:text-violet-700 `} href={`/${localStorage.getItem(`lng`)}#contact`} >{nav.contact}</Link>
              <Link className={` text-base xl:text-lg py-2 pl-3 pr-4 font-bold text-orange-500 rounded hover:bg-gray-100 lg:hover:bg-transparent hover:text-violet-700`} href={`/${typeof localStorage !== 'undefined' ? localStorage.getItem("lng") : 'en'}/donate`}>{nav.donate}</Link>
            </div>
            
            <LocaleSwitcher/>

            <div className='hidden lg:flex'>
              <ProfileClient />
            </div>
            {!isLoading && !user && (
              <Link href="/api/auth/login" target="_blank"
                className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-1 focus:outline-none focus:ring-orange-300 ml-4 lg:ml-0 rounded-full px-5 py-2 lg:py-3 font-medium text-center mr-3 md:mr-0 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
              >
                {nav.login}
              </Link>
            )}
          </div>
        </div>
        
    </nav>
    </>
  );
}
export default App;