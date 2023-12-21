'use client'

import styles from '@/styles';
import Small_Button_Violet from "./Small_Button_Violet";

const Our_Goals_Cards = ({imagePath ,title, description, currentAmount, goalAmount, buttonDonate}) => {
  return (

        <div className={`${styles.CardStyle} bg-[#f3f3f3] md:flex justify-center p-5 mb-3 lg:mb-6 md:my-12`}>
          <img
            className="w-full  h-64 rounded-lg md:w-1/2 object-cover mb-4 md:mb-0 items-center justify-center"
            src={imagePath} alt="Donate" />
          <div className=" items center text-center md:text-left md:w-1/2 md:pl-8 ">

            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="mt-2 text-gray-600"> {description}</p>
            <div className='flex justify-between my-4'>
              <p className='text-left text-md'>{currentAmount} €</p>
              <p className='text-right text-md'>{goalAmount} €</p>
            </div>

            <div className="bg-gray-300 rounded-full my-2 mb-8 sm:mb-6">
              <div className="bg-violet-500 p-2 leading-none rounded-l-full" style={{ width: '75%' }}></div>
            </div>

            <Small_Button_Violet title={buttonDonate} href={`${typeof localStorage !== 'undefined' ? localStorage.getItem("lng") : 'en'}/donate`}/>

          </div>
        </div>
  );
}
export default Our_Goals_Cards;