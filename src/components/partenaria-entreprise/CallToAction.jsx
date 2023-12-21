import Link from "next/link";

const CallToAction = () => {
  return (
    <div className='-mt-20 relative z-3'>
      <div className=" bg-gradient-to-r from-orange-400 to-violet-400 ">
        <div className="grid grid-cols-1 mx-auto items-center max-w-2xl lg:max-w-7xl gap-y-10 gap-x-6 lg:grid-cols-2 xl:gap-x-8">

          {/* COLUMN-1 */}
          {/* <div className='hidden lg:block'> */}
            <div className="hidden lg:block absolute">
              <div className='float-right  relative'>
                <img src="/Contact/bgImage.png" alt="bgimg" width={588} height={334} />
                <div className="absolute top-10 right-0">
                  <img src={'/Contact/leaf.svg'} alt="leafimg" width={81} height={81} />
                </div>
                <div className="absolute bottom-8 left-2">
                  <img src={'/Contact/circel.svg'} alt="circleimg" width={30} height={30} />
                </div>
              </div>
            </div>
          {/* </div> */}
          <div class="hidden lg:block col-span-1"></div>
          {/* COLUMN-2 */}
          <div className="col-span-1 p-10 flex flex-col lg:flex-row   justify-center z-20">
            <h3 className="text-4xl md:text-5xl font-semibold mb-3 text-white">Become our partner today.</h3>
            {/* <h4 className="text-base font-normal mb-7 text-offwhite">Craven omni memoria patriae zombieland clairvius narcisse religionis sunt diri undead historiarum.</h4> */}
            <div className="flex py-6 gap-0">
              <Link href="#fromcomp" type="button" className=' flex items-center justify-center text-15px font-medium text-white  bg-violet-500 hover:bg-violet-600 hover:shadow-md text-orange  px-8 py-4 transform hover:scale-105 transition duration-500 ease-in-out rounded-full'>
                Contact
                <img className="ml-2" src={'/Contact/plane.svg'} alt="plane-img" width={20} height={20} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CallToAction;