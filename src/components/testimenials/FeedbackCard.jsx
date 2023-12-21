import { BiSolidQuoteRight} from 'react-icons/bi'

const FeedbackCard = ({ description, name, companName, userImg, companyImg }) => (
  <section className='pt-12 pb-16 mx-4'>
  <div className="flex justify-between  flex-col  px-6 py-10 rounded-[20px]  max-w-[370px]  mx-auto my-0 feedback-card bg-white  trasition shadow-md transform hover:scale-110 transition duration-500 ease-in-out">
    <BiSolidQuoteRight
      alt="double_quotes"
      className="w-[42.6px] h-[27.6px] object-contain text-violet-700"
    />
    <p className="font-poppins font-normal text-[14px] lg:text-[18px] leading-[32.4px] text-gray-500 my-10 md:h-36 lg:h-44 xl:h-36">
      {description}
    </p>

    <div className="flex flex-col lg:flex-row items-center">
      <img src={` http://localhost:3001/${userImg}`} alt={name} className="relative h-20 rounded-lg " />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[14px] lg:text-[20px] leading-[32px] text-gray-900">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[12px] lg:text-[16px] leading-[24px] text-dimWhite">
          {companName}
        </p>
      </div>
    </div>
  </div>
  </section>
);

export default FeedbackCard;