"use client";

import FeedbackCard from "./testimenials/FeedbackCard";
import Carousel from "nuka-carousel";
import { useState, useEffect, useContext } from "react";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import AddTestimonialButton from "./testimenials/AddTestimonialButton";
import axios from "axios";
import FeedbacksContext from "@/context/FeedbacksContext";

const Testimonials = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [error, setError] = useState();
  const [slides, setSlides] = useState(3);

  const { setFeedbacks: fedbacksContextFunc } = useContext(FeedbacksContext);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await axios.get("http://localhost:3001/api/testimonials", {
          headers: {
            "api-key": "28cf1601-5b6a-4136-9094-01f91b147e81",
          },
        });
        console.log(data);
        setFeedbacks(data.data);
        console.log(feedbacks);
        fedbacksContextFunc(data.data);
      } catch (error) {
        setError("Error fetching testimonials");
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) {
        setSlides(3);
      } else if (window.innerWidth >= 768) {
        setSlides(2);
      } else {
        setSlides(1);
      }
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (feedbacks?.length === 0) {
    return (
      <div className="text-center items-center bg-white text-4xl h-[1080px]">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-3xl mt-10">
        <img src="faq.png" alt="error" className="w-96 h-96 object-cover" />
      </div>
    );
  }

  const handleAddTestimonial = (testimonialData) => {
    // Implement your logic to send the testimonial data to the database here
    // For example, you can make a fetch or axios request to your backend API
    console.log("Received testimonial data:", testimonialData);
  };

  return (
    <section
      id="clients"
      className={`container mx-auto sm:py-16 py-6 mt-24 flex justify-center items-center flex-col relative rounded-lg bg-gray-100 shadow-lg`}
    >
      <div className="container  px-6 lg:px-12  overflow-hidden">
        <div className="w-full flex justify-between items-center lg:flex-row flex-col sm:mb-16 mb-6 relative ">
          <h2
            className={`font-poppins font-bold xs:text-[48px] text-[40px] xl:text-[50px] text-gray-900 xs:leading-[76.8px] leading-[66.8px] w-full`}
          >
            What People are <br className="sm:block hidden" />{" "}
            <span className="text-violet-700">saying</span>{" "}
            <span className="text-orange-500">about us</span>
          </h2>
          <div className="w-full md:mt-0 mt-6">
            <p
              className={`font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] text-left max-w-[450px]`}
            >
              Discover what our valued customers have to say about their
              experiences with us in these glowing testimonials.
            </p>
          </div>
        </div>
        <Carousel
          autoplay
          autoplayInterval={4000}
          wrapAround={true}
          slidesToShow={slides}
          renderCenterLeftControls={({ previousSlide }) => (
            <button
              className="absolute text-violet-700 bg-white rounded-full p-2 shadow-md -top-5"
              onClick={previousSlide}
            >
              <RiArrowLeftSLine size={25} />
            </button>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <button
              className="absolute text-violet-700 bg-white rounded-full p-2 shadow-md -top-6 right-1"
              onClick={nextSlide}
            >
              <RiArrowRightSLine size={25} />
            </button>
          )}
        >
          {feedbacks.map((card) => (
            <FeedbackCard key={card.id} {...card} />
          ))}
        </Carousel>
        <div className="flex flex-grow justify-center pt-6">
          <AddTestimonialButton onAddTestimonial={handleAddTestimonial} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
