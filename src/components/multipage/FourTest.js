import React from "react";

const buttonData = [
  {
    img: "https://assets.pharmeasy.in/web-assets/dist/6b3d644c.svg",
    text: ["All Test"],
  },
  {
    img: "https://assets.pharmeasy.in/web-assets/dist/dea295a0.svg",
    text: ["Health", "Packages"],
  },
  {
    img: "https://assets.pharmeasy.in/web-assets/dist/d4d62fbf.svg",
    text: ["Upload", "Prescription"],
  },
  {
    img: "https://assets.pharmeasy.in/web-assets/dist/4ed59722.svg",
    text: ["Book", "on Call"],
  },
];

const FourTest = () => {
  return (
    <div className="w-[90%] md:w-[80%] mx-auto py-6">
      <div className="flex flex-col md:flex-row justify-center gap-4">
        {buttonData.map((btn, index) => (
          <button
            key={index}
            className="w-full md:w-1/5 flex flex-col items-center justify-center text-sm md:text-xs lg:text-sm h-20 rounded-lg border border-gray-300 shadow hover:shadow-md transition"
          >
            <img
              src={btn.img}
              alt={`icon-${index}`}
              className="h-6 md:h-8 mb-1"
            />
            <div className="text-center leading-tight">
              {btn.text.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FourTest;
