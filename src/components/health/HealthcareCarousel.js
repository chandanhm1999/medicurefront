import React, { useState, useEffect } from "react";
import c1 from "./CarouselImages/c1.jpg";
import c2 from "./CarouselImages/c2.jpg";
import c3 from "./CarouselImages/c3.jpg";
import c4 from "./CarouselImages/c4.jpg";
import c5 from "./CarouselImages/c5.jpg";
import c6 from "./CarouselImages/c6.jpg";

const images = [
  [c2, c3],
  [c4, c5],
  [c6, c1],
];

const HealthcareCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full mt-16 overflow-hidden max-w-7xl mx-auto">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${activeIndex * 100}%)`,
          width: `${images.length * 100}%`,
        }}
      >
        {images.map((pair, idx) => (
          <div
            key={idx}
            className="min-w-half flex flex-col md:flex-row gap-4 justify-center items-center p-4"
          >
            {pair.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Slide ${idx}-${i}`}
                className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-md transition-transform hover:scale-105"
              />
            ))}
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-3 w-full flex justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              activeIndex === i ? "bg-teal-600" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HealthcareCarousel;
