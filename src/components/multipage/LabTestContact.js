import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const LabTestContact = () => {
  const formRef = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      // Send email to admin
      await emailjs.sendForm(
        "service_xa6zxga", // admin notification template
        "template_6ed64rg",
        formRef.current,
        "mI9NGiI5z2rZceOa0"
      );

      // Send auto-reply to user
      const formData = new FormData(formRef.current);
      const emailParams = {
        name: formData.get("name"),
        email: formData.get("email"),
      };

      await emailjs.send(
        "service_xa6zxga",
        "template_z5083jz", // user reply template
        emailParams,
        "mI9NGiI5z2rZceOa0"
      );

      alert("To Connect Lab email as been sent!");
      formRef.current.reset();
    } catch (error) {
      alert("Failed to send email: " + error.text);
    }
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
            name="name"
            placeholder="Your Name"
            required
            className="w-full border p-2 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            name="services"
            placeholder="Test Name (e.g., CBC, Lipid Profile)"
            required
            className="w-full border p-2 rounded"
          />
          <input
            type="tel"
            name="coupon_code"
            placeholder="Phone Number"
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
