'use client'

import { useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import { Collapse } from "react-collapse";

const Accordion = ({faq}) => {

  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    setExpandedIndex(expandedIndex === nextIndex ? -1 : nextIndex);
  };

  const items = [
    {
      title: faq.faqquestion1,
      content: faq.faqanswer1
    },
    {
      title: faq.faqquestion2,
      content: faq.faqanswer2
    },
    {
      title: faq.faqquestion3,
      content: faq.faqanswer3
    },
    {
      title: faq.faqquestion4,
      content: faq.faqanswer4
    },
    {
      title: faq.faqquestion5,
      content: faq.faqanswer5
    },
    
  ];

  return (
    <section id="faq" className={`container mx-auto  pt-24 px-4`}>
      <div className="flex flex-col justify-center items-center mb-6">
        <h2 className=" text-5xl font-extrabold ">{faq.faqfirstTitle}<span className='text-violet-700'>{faq.faqspanFirstTitle}</span></h2>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:space-x-12">
          <div className=" lg:w-1/3 flex  flex-col justify-center items-center">
            <img src="faq.png" alt="About us" className="w-1/4 lg:w-full my-4 rounded-xl shadow-md lg:shadow-lg"/>
          </div>
          <div className='lg:w-2/3  flex flex-col justify-center'>
            <p className=' text-center pb-6 font-medium text-orange-500 text-2xl'>{faq.faqsubTitle}</p>
          <div className=' rounded-lg  overflow-hidden shadow-md'>
            {items.map((item, index) => (
              <div className="flex-row " key={index}>
                <div
                  className={`flex justify-between items-center py-5 px-6 bg-gray-100/50 text-gray-600  cursor-pointer transition  ${expandedIndex === index ? 'bg-gray-200/50  ' : 'hover:bg-gray-200/50'}`}
                  onClick={() => handleClick(index)}
                >
                  <h3 className="text-md">{item.title}</h3>
                  <RiArrowDownSLine
                    className={`h-6 w-6 flex-col  transition duration-300 ease-in-out ${expandedIndex === index ? 'transform rotate-180 ' : ''}`}
                  />
                </div>
                <Collapse isOpened={expandedIndex === index}>
                  <div
                    className={`px-8 py-5 text-justify transition-all duration-100 ease-in  text-md text-gray-900 ${expandedIndex === index ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                    <p>{item.content}</p>
                  </div>
                </Collapse>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accordion;