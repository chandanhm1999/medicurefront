// src/components/Home_Lab_Tests_Carousel_Element.jsx
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { labTest } from "./labTest"; // Adjust path as needed

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1200 }, items: 4 },
  desktop: { breakpoint: { max: 1200, min: 992 }, items: 3 },
  tablet: { breakpoint: { max: 992, min: 768 }, items: 2 },
  mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
};

const LabTestCarouselElements = () => {
  return (
    <Carousel
      responsive={responsive}
      infinite
      autoPlay
      autoPlaySpeed={3000}
      arrows
      containerClass="py-4"
      itemClass="px-2"
    >
      {labTest.map((test) => (
        <div
          key={test.id}
          className="bg-white rounded-sm shadow-md p-4 text-center transition-all duration-300 hover:shadow-xl"
        >
          <img
            src={test.img}
            alt={test.head}
            className="w-16 h-16 mx-auto mb-3 object-contain"
          />
          <h3 className="font-semibold text-gray-800 text-lg">{test.head}</h3>
          <p className="text-sm text-gray-500">{test.desc}</p>
          {test.tests && (
            <p className="text-sm text-gray-600 mt-1">{test.tests}</p>
          )}
          <p className="text-green-600 font-bold mt-2">₹{test.price}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default LabTestCarouselElements;
