import React from 'react'

export default function HeroSection() {
  return (

    <nav className="  z-20  py-2 fixed top-0 left-0 right-0 border-b border-gray-200  bg-white">
      <div role="status" className='animate-pulse'>
        <div className=" mx-4 flex flex-wrap items-center">
          <div className="flex h-8 w-8 bg-gray-200 rounded-full "></div>
          <div className='flex h-8 w-24 flex-col justify-center rounded-full gap-y-1 mx-2'>
            <div className="h-3 bg-gray-200 rounded-full"></div>
            <div className="h-2 bg-gray-200 rounded-full"></div>
          </div>
          <div className='flex flex-row w-1/2 gap-8 items-center mx-auto'>
            <div className="h-3 w-1/4 bg-gray-200 rounded-full"></div>
            <div className="h-3 w-1/4 bg-gray-200 rounded-full"></div>
            <div className="h-3 w-1/4 bg-gray-200 rounded-full"></div>
            <div className="h-3 w-1/4 bg-gray-200 rounded-full"></div>
          </div>
          <div className='flex flex-row gap-8 items-center ml-auto'>
          <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
          </div>
        </div>
      </div>
    </nav>

  )
}
