import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const labTests = [
  {
    title: "Dengue NS1 Antigen",
    labInfo: "Available at 2 certified labs",
    price: "500",
    icon: "https://assets.pharmeasy.in/web-assets/dist/909edb3f.svg",
  },
  {
    title: "Thyroid Profile Total (T3, T4 & TSH)",
    labInfo: "Available at 4 certified labs",
    price: "649",
    icon: "https://assets.pharmeasy.in/web-assets/dist/909edb3f.svg",
  },
  {
    title: "Complete Blood Count (CBC)",
    labInfo: "Available at 3 certified labs",
    price: "399",
    icon: "https://assets.pharmeasy.in/web-assets/dist/909edb3f.svg",
  },
  {
    title: "Blood Sugar Test",
    labInfo: "Available at 5 certified labs",
    price: "99",
    icon: "https://assets.pharmeasy.in/web-assets/dist/909edb3f.svg",
  },
  {
    title: "Vitamin D (25-Hydroxy)",
    labInfo: "Available at 2 certified labs",
    price: "849",
    icon: "https://assets.pharmeasy.in/web-assets/dist/909edb3f.svg",
  },
  {
    title: "Lipid Profile",
    labInfo: "Available at 3 certified labs",
    price: "749",
    icon: "https://assets.pharmeasy.in/web-assets/dist/909edb3f.svg",
  },
  {
    title: "Liver Function Test (LFT)",
    labInfo: "Available at 4 certified labs",
    price: "699",
    icon: "https://assets.pharmeasy.in/web-assets/dist/909edb3f.svg",
  },
  {
    title: "Kidney Function Test (KFT)",
    labInfo: "Available at 2 certified labs",
    price: "799",
    icon: "https://assets.pharmeasy.in/web-assets/dist/909edb3f.svg",
  },
];

const LabCard = ({ title, labInfo, price, icon }) => (
  <div className="bg-white rounded-md shadow-md p-4 mx-5 mb-8">
    <img src={icon} alt="lab icon" className="h-8 mb-2" />
    <p className="font-semibold">{title}</p>
    <p className="text-sm text-gray-600">{labInfo}</p>
    <div className="flex mt-5">
      <p className="font-bold">₹{price}</p>
      <p className="ml-2 text-gray-500">Onward</p>
    </div>
  </div>
);

const Lab = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <div className="bg-blue-100 py-10 mb-5">
      <div className="w-4/5 mx-auto">
        <h2 className="text-lg font-bold mb-6">Frequently Booked Lab Tests</h2>
        <Carousel responsive={responsive} className="commentslider">
          {labTests.map((test, index) => (
            <LabCard
              key={index}
              title={test.title}
              labInfo={test.labInfo}
              price={test.price}
              icon={test.icon}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Lab;
