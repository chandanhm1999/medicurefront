import React from "react";
import Slider from "react-slick";

const AllOffersSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const settings1 = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="space-y-8 px-4 py-6">
      {/* All Offers */}
      <div>
        <h4 className="text-lg font-semibold mb-3">All Offers</h4>
        <Slider {...settings}>
          {[
            {
              img: "https://cms-contents.pharmeasy.in/offer/beff77d2d65-Diagnostics-11-min.png?w=64&q=75",
              text: "Get FLAT rs.1000 OFF on booking\nCode: GRAND1000",
            },
            {
              img: "https://cms-contents.pharmeasy.in/offer/6b979e67782-Diagnostics-02-min.png?w=64&q=75",
              text: "Get FLAT rs.1000 OFF on booking\nCode: GRAND1000",
            },
            {
              img: "https://cms-contents.pharmeasy.in/offer/8cdf65ac110-mobiwiklogo.png?w=64&q=75",
              text: "Get up to 500Rs cashback\nvia Mobikwik\nCode: Not Required",
            },
            {
              img: "https://cms-contents.pharmeasy.in/offer/beff77d2d65-Diagnostics-11-min.png?w=64&q=75",
              text: "Get FLAT rs.1000 OFF on booking\nCode: GRAND1000",
            },
            {
              img: "https://cms-contents.pharmeasy.in/offer/2846076d5d2-Diagnostics-10-min.png?w=64&q=75",
              text: "Order medicines and get\nFLAT 400 OFF\nCode: CARE4U",
            },
            {
              img: "https://cms-contents.pharmeasy.in/offer/6b979e67782-Diagnostics-02-min.png?w=64&q=75",
              text: "Get FLAT RS.300 OFF on PharmEasy\nCode: CSHB200",
            },
          ].map((offer, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-4 rounded-lg flex items-start space-x-3"
            >
              <img
                src={offer.img}
                alt="offer"
                className="w-12 h-12 object-contain"
              />
              <p className="text-sm whitespace-pre-line">{offer.text}</p>
            </div>
          ))}
        </Slider>
      </div>

      {/* Second Slider */}
      <div>
        <Slider {...settings1}>
          {[
            "https://consumer-app-images.pharmeasy.in/marketing/comp_cod.jpg",
            "https://consumer-app-images.pharmeasy.in/marketing/comp_3step.jpg",
            "https://consumer-app-images.pharmeasy.in/marketing/comp_india_covered.jpg",
            "https://consumer-app-images.pharmeasy.in/marketing/comp_50lac.jpg",
          ].map((img, index) => (
            <div key={index} className="px-2">
              <img
                src={img}
                alt="marketing"
                className="w-full h-40 md:h-60 object-cover rounded-lg shadow"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AllOffersSlider;
