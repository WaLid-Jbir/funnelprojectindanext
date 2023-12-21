

const Ourmission = ({misssions}) => {
  return (
    <section id="about" className={`pt-24 px-4 mb-5`}>
      <div className="flex flex-col space-y-2 justify-center items-center mb-12"> 
        <h2 className=" text-5xl font-bold ">{misssions.titlefirstTitle}<span className='text-violet-700'>{misssions.titlespanFirstTitle}</span></h2>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col  justify-center lg:flex-row lg:space-x-12">
          <div className="w-full  lg:w-1/2 flex flex-col justify-between">
            <div className=" mb-12 border-b lg:mb-0 lg:pb-0 lg:border-b-0">
                    <h2 className="mb-4 text-lg font-md lg:text-3xl font-heading text-gray-800 text-justify">
                        {misssions.missionscontentn1}
                    </h2>
                    <p className="mb-3 text-lg leading-loose text-gray-600  text-justify">
                        {misssions.missionscontentn2}
                    </p>
                    <p className="mb-3 text-lg leading-loose text-gray-600  text-justify">
                        {misssions.missionscontentn3}
                    </p>
                    <p className="leading-loose text-lg text-gray-600  text-justify">
                        {misssions.missionscontentn4}
                    </p>
            </div>
          </div>
          <div className="w-full  lg:w-1/2 flex flex-col justify-center items-center max-w-2xl">
            <ul className="flex flex-col justify-center">
                <li>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 text-white bg-violet-600 rounded-md">
                                        <svg width="20" height="20" fill="currentColor" className="w-6 h-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h5 className="text-lg text-justify font-bold leading-6 text-gray-900 ">
                                        {misssions.mission1title}
                                    </h5>
                                    <p className="mt-2 text-base text-justify leading-6 text-gray-600 ">
                                        {misssions.mission1content}
                                    </p>
                                </div>    
                            </div>
                </li>
                <li className="mt-10">

                    <div className="flex">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-12 h-12 text-white bg-violet-600 rounded-md">
                                <svg width="20" height="20" fill="currentColor" className="w-6 h-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div className="ml-4">
                            <h5 className="text-lg text-justify font-bold leading-6 text-gray-900 ">
                                {misssions.mission2content}
                            </h5>
                            <p className="mt-2 text-base text-justify leading-6 text-gray-600 ">
                                {misssions.mission2content}
                            </p>
                        </div>
                    </div>
                </li>
                <li className="mt-10">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-12 h-12 text-white bg-violet-600 rounded-md">
                                <svg width="20" height="20" fill="currentColor" className="w-6 h-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div className="ml-4">
                            <h5 className="text-lg text-justify font-bold leading-6 text-gray-900 ">
                                {misssions.mission3title}
                            </h5>
                            <p className="mt-2 text-base text-justify leading-6 text-gray-600 ">
                                {misssions.mission3content}
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        </div>
      </div>
    </section>
  )
}
export default Ourmission;