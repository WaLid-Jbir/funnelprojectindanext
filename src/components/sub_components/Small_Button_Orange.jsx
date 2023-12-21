'use client'

import Link from "next/link";
import { AiOutlineArrowRight } from 'react-icons/ai';

const Small_Button_Orange = ({title, href}) => {
  return (
    <Link href={href} className="inline-flex items-center rounded-full border-2 font-medium text-lg border-white-500 text-orange-500 hover:bg-orange-500 hover:text-white hover:shadow-md border-orange-500 text-orange  px-6 py-2 transform hover:scale-110 transition duration-500 ease-in-out">
      {title}
      <AiOutlineArrowRight className="w-4 h-4 ml-2" />
  </Link>
  );
}
export default Small_Button_Orange;