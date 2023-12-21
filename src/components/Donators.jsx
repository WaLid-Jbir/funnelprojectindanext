'use client';

import styles from '@/styles';
import Donater_Card from './sub_components/Donater_Card';

const Donators = ({donators}) => {
  return (
    <div className=" pt-24 ">
      <section className={`${styles.CardStyle} bg-[#f3f3f3] container relative min-h-[90%] mx-auto md:px-12 `}>
        
      <div className="flex flex-col  justify-between  items-center rounded-3xl py-8">
        <div className="flex flex-col  justify-center gap-2 px-12">
          <h2 className=" text-5xl font-bold text-center text-gray-950 ">{donators.donatorsTitle}<span className='text-orange-500'>{donators.donatorsTitlespan}</span></h2>
          <p className="mb-6 text-xl font-normal text-center text-gray-500">{donators.donatorsTitlecontent}</p>
        </div>
        <div className="px-4 mt-16 mb-4">
          <div className="flex flex-col lg:flex-row  items-center space-y-24 md:space-y-0 md:flex-row justify evenly">
            <Donater_Card imageDonaterPath="p1.jpg" nameDonater="Mark Lebrone" jobDonater="Developer" infoDonater="Test info born in 1990, and a charity contributer" amountDonation="30 000" />
            <Donater_Card imageDonaterPath="p2.jpg" nameDonater="Martha James" jobDonater="Marketing Agent" infoDonater="Test info born in 2002, and a charity contributer" amountDonation="40 000" />
            <Donater_Card imageDonaterPath="p3.jpg" nameDonater="Thierry Halliday" jobDonater="CEO" infoDonater="Test info born in 1975, and a charity contributer" amountDonation="230 000" />   
          </div>
        </div>
      </div>
    </section>
    </div>

  );
}
export default Donators;