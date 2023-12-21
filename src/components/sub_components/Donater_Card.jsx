'use client'

const Donater_Card = ({imageDonaterPath, nameDonater, jobDonater, infoDonater, amountDonation}) => {
  return (
    <div className="relative p-4 transform hover:scale-110 transition duration-500 ease-in-out">
    <div className="absolute mb-4 text-center transform translate-x-1/2 -top-16 right-1/2">
      <a href="#" className="relative block">
        <img alt="profil" src={imageDonaterPath} className="mx-auto object-cover rounded-xl h-40 w-40 border-orange-500 " />
      </a>
    </div>
    <div className="px-8 py-4 pt-24 bg-white rounded-lg border-2 trasition">
      <div className="text-center">
        <p className="text-2xl text-gray-800 ">
          {nameDonater}
        </p>
        <p className="text-xl font-light text-gray-600">
          {jobDonater}
        </p>
        <p className="py-4 mx-auto font-light text-gray-500 text-md w-60 ">
          {infoDonater}
        </p>
      </div>
      <div className="flex items-center justify-between w-40 py-4 mx-auto text-gray-500 border-t-2 border-white ">
        <p className="flex mx-auto justify-center font-light text-xl text-gray-500 text-md w-60  ">
          {amountDonation} €
        </p>
      </div>
    </div>
  </div>
  );
}
export default Donater_Card;