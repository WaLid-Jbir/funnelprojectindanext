'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'

export default function Partnership () {
  
  const [tab, setTab] = useState(1)

  const tabs = useRef(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, []) 

  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      {/* <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div> */}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className=" mb-4 font-extrabold text-4xl"><span className='text-orange-500'> Welcome to</span>  <span className=''>Our Partnership</span></h1>
            <p className="text-xl text-gray-600">At INDA, we're committed to fostering meaningful collaborations in the field of neurology.</p>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">

            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
              <div className="md:pr-4 lg:pr-8 xl:pr-12 mb-8">
                <h3 className=" mb-3 text-3xl">Our Partnership</h3>
                <p className="text-xl text-gray-600 text-justify">Involves a strong emphasis on collaboration, support and information exchange.</p>
              </div>
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-violet-500/100 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(1); }}
                >
                  <div>
                    <div className={`font-bold leading-snug tracking-wide mb-1 ${tab !== 1 ? ' text-gray-900' : 'text-white'}`}>Why Collaborate with Us?</div>
                    <div className={` ${tab !== 1 ? ' text-gray-500' : 'text-gray-100'}`}>Advancing the frontiers of neurology research, enhancing strengthening support initiatives. </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#FF8000" d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                    </svg>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-violet-500 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(2); }}
                >
                  <div>
                    <div className={`font-bold leading-snug tracking-wide mb-1 ${tab !== 2 ? ' text-gray-900' : 'text-white'}`}>Making a Difference Together</div>
                    <div className={` ${tab !== 2 ? ' text-gray-500' : 'text-gray-100'}`}>Collaborations have led to remarkable advances in the field of neurology. Thanks to partnerships covering various sectors.</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#FF8000" d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z" fillRule="nonzero" />
                    </svg>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-violet-500 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(3); }}
                >
                  <div>
                    <div className={`font-bold leading-snug tracking-wide mb-1 ${tab !== 3 ? ' text-gray-900' : 'text-white'}`}>Explore Collaboration Opportunities</div>
                    <div className={` ${tab !== 3 ? ' text-gray-500' : 'text-gray-100'}`}>Find out how your company can work with us in the long term.</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#FF8000" d="M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z" fillRule="nonzero" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
              <div className="transition-all">
                <div className="relative flex flex-col " data-aos="zoom-y-out" ref={tabs}>
                  {/* Item 1 */}
                  <Transition
                    show={tab === 1}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}                     
                  >
                    <div className="relative inline-flex flex-col">
                      <div className="md:max-w-none mx-auto rounded"  width={500} height="462" >
                        <h4 className='mt-6 mb-2 text-xl'>Elevating Awareness and Advocacy:</h4>
                        <p className='text-gray-500 font-medium text-justify'>Joining forces with International Neurologic Disease Association means amplifying the voice for neurological health. Through joint advocacy and awareness campaigns, we strive to educate, reduce stigma, and garner support for improved resources and policies in the neurology landscape.</p>
                      
                        <h4 className='mt-6 mb-2 text-xl'>Building Networks and Expertise:</h4>
                        <p className='text-gray-500 font-medium text-justify'>Collaboration opens doors to shared knowledge and expertise. Together, we forge connections, share insights, and create an environment conducive to collective learning and growth within the neurology community.</p>
                      
                        <h4 className='mt-6 mb-2 text-xl'>Creating Sustainable Impact:</h4>
                        <p className='text-gray-500 font-medium text-justify'>Our collaborative efforts extend beyond immediate results. Together, we work towards establishing sustainable practices and long-term solutions that have a lasting positive impact on neurology research, patient care, and community support.</p>
                      </div>
                      {/* <Image className="md:max-w-none absolute w-full left-0 transform animate-float" src={FeaturesElement} width={500} height="44" alt="Element" style={{ top: '30%' }} /> */}
                    </div>
                  </Transition>
                  {/* Item 2 */}
                  <Transition
                    show={tab === 2}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}                     
                  >
                    <div className="relative inline-flex flex-col">
                    <div className="md:max-w-none mx-auto rounded"  width={500} height="462" >
                        <h4 className='mt-6 mb-2 text-xl'>Catalyzed Innovative Solutions:</h4>
                        <p className='text-gray-500 font-medium text-justify'>Our collaborations in different fields have given rise to new approaches and solutions that transcend disciplinary boundaries. By merging expertise from different sectors, we have pioneered innovative methodologies and technologies in neurology.</p>
                      
                        <h4 className='mt-6 mb-2 text-xl'>Improving interdisciplinary perspectives:</h4>
                        <p className='text-gray-500 font-medium text-justify'>Partnerships with companies in various fields have enriched our understanding of neurology. Knowledge acquired outside the traditional field of medicine has broadened our perspective, enabling us to adopt unconventional but effective approaches.</p>
                      
                        <h4 className='mt-6 mb-2 text-xl'>Demonstrating the power of interdisciplinary collaboration:</h4>
                        <p className='text-gray-500 font-medium text-justify'>Our successful partnerships in a variety of areas are a testament to the power of interdisciplinary collaboration. They show how collective efforts, regardless of industry boundaries, can create significant change in neurology.</p>
                      </div>
                    </div>
                  </Transition>
                  {/* Item 3 */}
                  <Transition
                    show={tab === 3}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}                     
                  >
                    <div className="relative inline-flex flex-col">
                    <div className="md:max-w-none mx-auto rounded"  width={500} height="462" >
                        <h4 className='mt-6 mb-2 text-xl'>Identify Common Goals and Objectives:</h4>
                        <p className='text-gray-500 font-medium text-justify'>Begin by identifying shared goals and objectives between your Company and our Associaion. This could involve improving patient outcomes, advancing research in specific neurological areas, raising awareness, or developing innovative solutions.</p>
                      
                        <h4 className='mt-6 mb-2 text-xl'> Explore Collaboration Avenues:</h4>
                        <p className='text-gray-500 font-medium text-justify'>Discover diverse collaboration avenues tailored to your company's strengths and interests. Opportunities may include:</p>
                        <ul className=' py-4 pl-4 list-disc text-gray-500'>
                          <li className='py-2 '><span className='text-violet-600 font-semibold'>Research Partnerships:</span> Engage in joint research initiatives, leveraging collective expertise to drive discoveries.</li>
                          <li className='py-2 '><span className='text-violet-600 font-semibold'> Joint Initiatives:</span> Collaborate on advocacy campaigns, educational programs, or community-driven initiatives.</li>
                          <li className='py-2 '><span className='text-violet-600 font-semibold'>Fundraising Events:</span> Contribute to or sponsor events dedicated to neurological causes, promoting awareness and support.</li>
                        </ul>
                      
                        {/* <h4 className='mt-6 mb-2 text-xl'>Initiate Contact and Discuss Possibilities:</h4>
                        <p className='text-gray-500 font-medium text-justify'>Reach out to [Association Name] to initiate a conversation about potential collaborations. Share your company's vision, expertise, and areas of interest. Collaboratively explore how both entities can synergize efforts to make a meaningful impact in the field of neurology.</p> */}
                      </div>
                      {/* <Image className="md:max-w-none absolute w-full left-0 transform animate-float" src={FeaturesElement} width={500} height="44" alt="Element" style={{ top: '30%' }} /> */}
                    </div>
                  </Transition>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}