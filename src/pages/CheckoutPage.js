// src/pages/CheckoutPage.jsx
import React, { useContext, useRef } from "react";
import emailjs from "@emailjs/browser";
import { CartContext } from "../contexts/CartContext";
import CartItem from "../components/CartItem";

const CheckoutPage = () => {
  const { cart, total } = useContext(CartContext);
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id", // <-- Replace with your actual service ID
        "your_template_id", // <-- Replace with your template ID
        formRef.current,
        "your_public_key" // <-- Replace with your public key
      )
      .then(
        () => {
          alert("Order placed and email sent!");
          formRef.current.reset();
        },
        (error) => {
          alert("Failed to send email: " + error.text);
        }
      );
  };

  // Dynamically generate product summary
  const formattedProductDetails = cart
    .map((item, index) => `${index + 1}. ${item.title} (Qty: ${item.amount})`)
    .join("\n");

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

      {/* User Details Form */}
      <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
        {/* Hidden fields */}
        <input type="hidden" name="cart_summary" value={JSON.stringify(cart)} />
        <input
          type="hidden"
          name="product_details"
          value={formattedProductDetails}
        />

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
