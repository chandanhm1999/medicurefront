// src/pages/CheckoutPage.jsx
import React, { useContext, useRef } from "react";
import emailjs from "@emailjs/browser";
import { CartContext } from "../contexts/CartContext";
import CartItem from "../components/CartItem";

const CheckoutPage = () => {
  const { cart, total } = useContext(CartContext);
  const formRef = useRef();

  // Product summary
  const formattedProductDetails = cart
    .map((item, index) => `${index + 1}. ${item.title} (Qty: ${item.amount})`)
    .join("\n");

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

      alert("Order placed and email sent!");
      formRef.current.reset();
    } catch (error) {
      alert("Failed to send email: " + error.text);
    }
  };

  return (
    <div className="p-6 max-w-4xl mt-16 mx-auto">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

      {/* Cart Summary */}
      <div className="border p-4 mb-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">Your Cart</h3>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
        <p className="font-bold mt-4">Total: Rs {total.toFixed(2)}</p>
      </div>

      {/* Form */}
      <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
        <input type="hidden" name="cart_summary" value={JSON.stringify(cart)} />
        <input
          type="hidden"
          name="product_details"
          value={formattedProductDetails}
        />

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
          placeholder="Services Required"
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
          placeholder="Address & Any additional message"
          className="w-full border p-2 rounded h-24"
        ></textarea>

        <button
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded w-full"
        >
          Place Order & Send Email
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
