import React, { useEffect, useState } from "react";

const images = [
  [
    "https://cdn01.pharmeasy.in/dam/banner/banner/59efe8fe01e-634X274.jpg",
    "https://cdn01.pharmeasy.in/dam/banner/banner/b3a4bdb683b-1.jpg",
  ],
  [
    "https://cdn01.pharmeasy.in/dam/banner/banner/d71f51787ce-1_Thyroid-Profile_HP_634x274_v1.jpg",
    "https://cdn01.pharmeasy.in/dam/banner/banner/782553ad506-STAR25.jpg",
  ],
];

const CarouselBox = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change slide every 2 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full overflow-hidden relative">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((pair, idx) => (
          <div
            key={idx}
            className="min-w-full flex justify-center items-center gap-4 p-4"
          >
            {pair.map((imgSrc, imgIdx) => (
              <img
                key={imgIdx}
                src={imgSrc}
                alt={`Slide ${idx + 1}-${imgIdx + 1}`}
                className="rounded-sm w-[45%] object-cover shadow-md"
              />
            ))}
          </div>
        ))}
      </div>

      {/* Optional dot indicators */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === i ? "bg-cyan-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselBox;
