'use client'
import { useEffect, useState } from "react";
import { IoMdArrowDropup  } from 'react-icons/io'

const Fab = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show the button when scrolled down, hide otherwise
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`fixed bottom-6 right-6 rounded-full border-2 font-medium text-lg border-white-500 text-white hover:bg-violet-500 hover:text-white hover:shadow-md bg-gray-400 text-orange  px-2 py-2  transform hover:scale-125 transition duration-500 ease-in-out z-50 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={scrollToTop}
      style={{ display: isVisible ? "block" : "none" }}
      title="Scroll to Top"
    >
      <IoMdArrowDropup  size={30}/>
    </button>
  );
};

export default Fab;
