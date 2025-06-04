import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      // Send message to admin
      await emailjs.sendForm(
        "service_xa6zxga", // admin notification template
        "template_6ed64rg",
        form.current,
        "mI9NGiI5z2rZceOa0" // your public key
      );

      // Prepare auto-reply
      const formData = new FormData(form.current);
      const emailParams = {
        name: formData.get("name"),
        email: formData.get("email"),
      };

      // Send auto-reply to user
      await emailjs.send(
        "service_xa6zxga",
        "template_z5083jz", // user reply template
        emailParams,
        "mI9NGiI5z2rZceOa0"
      );

      setMessageSent(true);
      form.current.reset();
    } catch (error) {
      console.error("FAILED...", error.text);
    }
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
                name="name"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700">Message</label>
              <textarea
                name="services"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 h-32 resize-none"
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
