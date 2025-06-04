import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const LabTestContact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id", // Replace with your EmailJS service ID
        "your_template_id", // Replace with your EmailJS template ID
        formRef.current,
        "your_public_key" // Replace with your EmailJS public key
      )
      .then(
        () => {
          alert("Your message has been sent!");
          formRef.current.reset();
        },
        (error) => {
          alert("Failed to send message: " + error.text);
        }
      );
  };

  return (
    <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto p-6 bg-blue-100 rounded-lg shadow">
      {/* Left: Image */}
      <div className="md:w-1/2 w-full p-4">
        <img
          src="https://cms-contents.pharmeasy.in/banner/69dc6d9168b-1_Thyroid-Profile_HP_634x274_v1.jpg"
          alt="Lab Test"
          className="w-full h-auto rounded-md shadow-md"
        />
      </div>

      {/* Right: Form */}
      <div className="md:w-1/2 w-full p-4">
        <h2 className="text-xl font-bold mb-4 text-gray-800">
          Book a Lab Test
        </h2>
        <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full border p-2 rounded"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full border p-2 rounded"
          />
          <input
            type="tel"
            name="user_phone"
            placeholder="Phone Number"
            required
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            name="test_name"
            placeholder="Test Name (e.g., CBC, Lipid Profile)"
            required
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            name="coupon_code"
            placeholder="Coupon Code (if any)"
            className="w-full border p-2 rounded"
          />
          <textarea
            name="message"
            placeholder="Any specific instructions or questions?"
            className="w-full border p-2 rounded h-24"
          ></textarea>
          <button
            type="submit"
            className="bg-primary text-white px-4 py-2 rounded w-full hover:bg-blue-600"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default LabTestContact;
