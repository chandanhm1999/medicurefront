// ProductsPage.jsx
import React from "react";
import { Data } from "./Data"; // your data file
import Product from "./HeathProduct"; // path to updated Product component

const HealthP = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Health Care Products
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Data.map((item, idx) => (
          <Product key={idx} product={item} />
        ))}
      </div>
    </div>
  );
};

export default HealthP;
