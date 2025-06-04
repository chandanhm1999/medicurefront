import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id", // replace with your actual SERVICE ID
        "your_template_id", // replace with your actual TEMPLATE ID
        form.current,
        "your_public_key" // replace with your actual PUBLIC KEY
      )
      .then(
        () => {
          setMessageSent(true);
          form.current.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="w-full bg-gray-50 py-12 px-6 md:px-20 mt-20">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        {/* Left: Contact Details */}
        <div className="md:w-1/2 bg-teal-600 text-white p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Contact Medicare</h2>
          <p className="mb-4">Get in touch with us for any queries.</p>
          <div className="mb-4">
            <p className="font-semibold">📍 Address:</p>
            <p>SSIT College, Tumkur, Karnataka</p>
          </div>
          <div className="mb-4">
            <p className="font-semibold">📞 Phone:</p>
            <p>+91 91643 98736</p>
          </div>
          <div>
            <p className="font-semibold">🏥 Project:</p>
            <p>Medicare Health System</p>
          </div>
        </div>

        {/* Right: Form */}
        <div className="md:w-1/2 p-8">
          <h3 className="text-2xl font-semibold mb-6 text-teal-700">
            Send us a message
          </h3>

          {messageSent && (
            <div className="mb-4 text-green-600 font-semibold">
              ✅ Message sent successfully!
            </div>
          )}

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label className="block mb-1 text-gray-700">Full Name</label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700">Email</label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700">Message</label>
              <textarea
                name="message"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="Type your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
