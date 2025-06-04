// Product.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { CartContext } from "../../contexts/CartContext";

const HeathProduct = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  // destructure product with fallback
  const { id, img1, title, mrp, strike, discount, ancestor = [] } = product;

  const category = ancestor[ancestor.length - 1] || "Health Care";

  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={img1}
              alt={title}
            />
          </div>
        </div>
        {/* buttons */}
        <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col justify-center items-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button onClick={() => addToCart(product, id)}>
            <div className="flex justify-center items-center text-white w-12 h-12 bg-teal-500">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      {/* category, title & price */}
      <div>
        <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1 line-clamp-2">{title}</h2>
        </Link>

        <div className="flex justify-between items-center mb-6">
          <div>
            <span className="text-red-500 text-lg font-bold">Rs {mrp}</span>{" "}
            <span className="line-through text-gray-500 text-sm">
              Rs {strike}
            </span>
          </div>
          <div className="bg-green-100 text-green-700 text-sm font-bold px-3 py-1 rounded-full shadow-sm">
            🔥 {discount}% OFF
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeathProduct;
