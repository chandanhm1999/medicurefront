import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ImgSlider = () => {
  return (
    <div className="w-[90%] md:w-4/5 mx-auto py-4 mt-16">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        showStatus={false}
        interval={3000}
        transitionTime={600}
        swipeable
      >
        {[
          "https://cms-contents.pharmeasy.in/banner/69dc6d9168b-1_Thyroid-Profile_HP_634x274_v1.jpg",
          "https://cms-contents.pharmeasy.in/banner/03438c566ea-Booking-Lab-Tests_HP_634x274.jpg",
          "https://cms-contents.pharmeasy.in/banner/2668a31c5d1-1_HP_634x274.jpg",
          "https://cms-contents.pharmeasy.in/banner/077b535cbfd-3_HP_634x274.jpg",
          "https://cms-contents.pharmeasy.in/banner/78a5063a317-1_Tested-today_HP_634x274_v1.jpg",
          "https://cms-contents.pharmeasy.in/banner/6ee85df7b05-SmokingDHP.jpg",
        ].map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto rounded-lg object-cover shadow-md"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImgSlider;
