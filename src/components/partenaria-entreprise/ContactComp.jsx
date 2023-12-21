import Image from "next/image";
import TestimonialImage from '@/app/favicon.ico'

const Newsletter = () => {
  return (
    <div className="relative h-full justify-center mx-auto max-w-6xl mb-36">
      {/* Section header */}
      <div id="fromcomp" className="max-w-3xl mx-auto text-center pb-10 md:pb-10">
        <h1 className=" mb-4 font-extrabold text-4xl"><span className='text-orange-500'> Welcome to</span>  <span className=''>Our Partnership</span></h1>
        <p className="text-xl text-gray-600">At INDA, we're committed to fostering meaningful collaborations in the field of neurology.</p>
      </div>
      {/* image  bg     */}
      <div className="absolute w-full -bottom-28">
        <img src={'/pictures/contactComp/bgform.svg'} alt="send-icon" />
      </div>
      <div className="  max-w-4xl mx-auto my-20" data-aos="zoom-y-out">
        <div className="relative border-2 border-gray-200 shadow-lg shadow-orange-500/20  bg-white/60 backdrop-blur-sm rounded-xl">

          {/* Testimonial */}
          <div className="text-center px-12 py-8 pt-20 lg:mx-4  md:mx-0">

            <div className="absolute top-0 -mt-12 left-1/2 transform -translate-x-1/2">
              <div className="relative rounded-full bg-white border-2 border-gray-200">
                <Image className="p-2" src={TestimonialImage} width={96} height={96} alt="Testimonial 01" />
              </div>
            </div>

            <div className=" flex flex-col lg:flex-row gap-4">
              <div className="relative text-white focus-within:text-white flex flex-row-reverse rounded-full w-full pt-5 lg:pt-0">
                <input type="text" name="name" className="py-4 border-2 border-gray-200 hover:border-orange-400 focus:border-violet-400 transition duration-500  bg-gray-50 lg:py-4 text-sm md:text-lg w-full mx-3 text-black rounded-full pl-8 focus:outline-none focus:text-black" placeholder="Enter your full name" autoComplete="off" />
              </div>

              <div className="relative text-white focus-within:text-white flex flex-row-reverse rounded-full w-full pt-5 lg:pt-0">
                <input type="text" name="compName" className="py-4 border-2 border-gray-200 hover:border-orange-400 focus:border-violet-400 transition duration-500 bg-gray-50  lg:py-4 text-sm md:text-lg w-full mx-3 text-black rounded-full pl-8 focus:outline-none focus:text-black" placeholder="Enter your company name" autoComplete="off" />
              </div>
            </div>

            <div className=" flex flex-col gap-4 py-4">
              <div className="relative text-white focus-within:text-white flex flex-row-reverse rounded-full w-full pt-5 lg:pt-0">
                <input type="email" name="mail" className="py-4 border-2 border-gray-200 hover:border-orange-400 focus:border-violet-400 transition duration-500 bg-gray-50  lg:py-4 text-sm md:text-lg w-full mx-3 text-black rounded-full pl-8 focus:outline-none focus:text-black" placeholder="Enter your mail company" autoComplete="off" />
              </div>

              <div className="relative  pt-5 lg:py-10 text-white focus-within:text-white flex flex-row-reverse rounded-full w-full lg:pt-0">
                <input type="tel" name="tel" className="py-4 border-2 border-gray-200 hover:border-orange-400 focus:border-violet-400 transition duration-500 lg:py-4 bg-gray-50  text-sm md:text-lg w-full mx-3 text-black rounded-full pl-8 focus:outline-none focus:text-black" placeholder="Enter your contact phone" autoComplete="off" />
              </div>
            </div>

            <div className="relative text-white focus-within:text-white flex flex-row-reverse rounded-full w-full pt-5 lg:pt-0">
              <textarea

                className="py-4 border-2 border-gray-200 hover:border-orange-400 focus:border-violet-400 transition duration-500 bg-gray-50  lg:py-4 text-sm md:text-lg w-full mx-3 text-black rounded-xl pl-8 focus:outline-none focus:text-black"
                autoComplete="off"
                rows="4"
                name="message"
                placeholder="enter your message..."
              >
              </textarea>
              <div className="absolute bottom-0 inset-y-0 right-0 flex items-center pr-6 pt-5 lg:pt-0">
                <button type="submit" className="p-3 lg:p-4 bg-violet-500 focus:outline-none focus:shadow-outline bg-ultramarine hover:bg-midnightblue duration-150 ease-in-out rounded-full">
                  <Image src={'/pictures/contactComp/send.svg'} alt="send-icon" width={25} height={25} />
                </button>
              </div>
            </div>

            <cite className="block font-bold text-lg text-gray-900 not-italic my-5 mb-1">International Neurologic Disease Association</cite>
            <div className="text-gray-600">
              <span>CEO & Co-Founder</span> <a className="text-blue-600 hover:underline" href="#0">@inda</a>
            </div>
          </div>

        </div>
      </div>

      {/* <div className="mx-auto max-w-2xl md:max-w-7xl sm:rounded-3xl testimonialbg"> */}
      {/* <div className="mx-auto max-w-2xl md:max-w-7xl sm:rounded-3xl">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-12 xl:gap-x-8">

          <div className="relative col-span-12 bg-imagee">
            
            <div className="mb-10 mt-24 lg:mx-64 lg:my-24">
              <h3 className="text-4xl md:text-55xl text-center font-semibold text-white mb-3">Newsletter.</h3>
              <h3 className="text-base font-normal opacity-75 text-white text-center mb-8">
                Subscrible our newsletter for discounts, <br /> promo and many more.
              </h3>

            </div>
          </div>

        </div>
      </div> */}
    </div>


  )
}

export default Newsletter;