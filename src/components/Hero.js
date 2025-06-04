import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-20">
      <div className="container mx-auto flex justify-around h-full">
        {/* text */}
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase text-cyan-800">
            <div className="w-10 h-[2px] mr-3 bg-cyan-700"></div>
            Your Health, Our Priority
          </div>
          <h1 className="uppercase text-[40px] md:text-[60px] leading-[1.1] font-semibold mb-6 text-gray-900">
            Trusted Medical Support
            <br />
            <span className="font-light text-cyan-800">
              Medicines, Reports & Consultation
            </span>
          </h1>
          <p className="mb-6 text-lg md:text-xl max-w-[500px] text-gray-700">
            Get verified medicines, upload prescriptions for lab tests, track
            reports easily, and consult certified doctors — all in one seamless
            platform.
          </p>
          <Link
            to="/services"
            className="self-start uppercase font-semibold border-b-2 border-cyan-700 text-cyan-800 hover:text-cyan-600 transition duration-200"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
