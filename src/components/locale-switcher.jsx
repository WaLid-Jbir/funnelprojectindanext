"use client"
import React, { useState } from 'react';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { IoLanguage } from "react-icons/io5";
import Link from "next/link"
import { usePathname } from "next/navigation"

import { i18n } from "@/../i18n.config"

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const [isFocus, setIsFocus] = useState(false);

  const redirectedPathName = locale => {
    if (!pathName) return "/"
    const segments = pathName.split("/")
    segments[1] = locale
    return segments.join("/")
  }



  return (
    <div className="flex items-center mb-2 lg:my-0 ml-2 lg:ml-0 px-4">
      <div
        className="relative py-2 dropdown"
        onClick={() => setIsFocus(() => true)}
        onBlur={() => setIsFocus(() => false)}
      >
        <button className={`lg:relative flex flex-row items-center justify-center  text-base hover:text-violet-600 text-gray-700  md:pb-0  mx-2 transition  duration-150 ease-in-out focus:text-violet-600 `}
          type="button" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
          <p><IoLanguage size={20} /></p>
          <span >
            {isFocus ? (
              <RiArrowUpSLine />
            ) : (
              <RiArrowDownSLine />
            )}
          </span>
        </button>
        <div class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95" >
          <ul className={`absolute w-24 right-0 top-6 grid grid-cols-2 items-center justify-center text-center text-gray-800 bg-white rounded-lg shadow-md overflow-hidden`} aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
            {i18n.locales.map(locale => {
              return (
                <li key={locale}>
                  <Link
                    href={redirectedPathName(locale)}
                    onClick={() => setIsHovered(false)}
                    className='flex justify-center items-center text-center cursor-pointer hover:bg-violet-500 hover:text-white py-2 mx-auto transition-opacity'
                    role="menuitem"
                  >
                    {locale}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
    // <div className="flex items-center mb-2 lg:my-0 ml-2 lg:ml-0 px-4">
    //   <div
    //     className=" group py-2"
    //     onClick={() => setIsHovered((prev) => !prev)}
    //   // onDrag={() => setIsHovered(false)}
    //   >
    //     <button className={`lg:relative flex flex-row items-center justify-center  text-base hover:text-violet-600 text-gray-700  md:pb-0  mx-2 ${isHovered ? 'text-violet-600' : ''}`}>
    //       <p><IoLanguage size={20} /></p>
    //       <span >
    //         {isHovered ? (
    //           <RiArrowUpSLine />
    //         ) : (
    //           <RiArrowDownSLine />
    //         )}
    //       </span>
    //     </button>
    //     <ul className={`absolute lg:top-16  grid-cols-2 items-center text-center text-gray-800 bg-white rounded-lg shadow-md overflow-hidden ${isHovered ? 'grid' : 'hidden'}`}>
    //       {i18n.locales.map(locale => {
    //         return (
    //           <li key={locale}>
    //             <Link
    //               href={redirectedPathName(locale)}
    //               onClick={() => setIsHovered(false)}
    //               className=' cursor-pointer hover:bg-violet-500 hover:text-white block p-2 transition-opacity'
    //             >
    //               {locale}
    //             </Link>
    //           </li>
    //         )
    //       })}
    //     </ul>
    //   </div>
    // </div>
  )
}
