import React from "react";
import { Link } from "react-router-dom";

const ConsultationSection = () => {
  return (
    <section className="bg-white pt-12 mt-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">
            Consult Top Doctors Online with{" "}
            <span className="text-blue-600">Medicure</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Get expert advice from trusted medical professionals — anytime,
            anywhere. Whether it’s a common cold or a chronic condition,{" "}
            <strong>Medicure</strong> is here to support your health journey.
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Certified and experienced doctors</li>
            <li>Private & secure video consultations</li>
            <li>Instant prescriptions & follow-ups</li>
            <li>Affordable packages starting at just ₹99</li>
          </ul>
          <div>
            <Link
              to="/contact"
              className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Book a Consultation
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full h-full">
          <img
            src="/consultation.jpg"
            alt="Medicure Consultation"
            className="w-full h-80 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
