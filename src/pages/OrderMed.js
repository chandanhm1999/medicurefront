import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import AllOffersSlider from "../components/multipage/AllOffersSlider ";
import Upload from "../components/homeytest/Upload";

const OrderMed = () => {
  // get products from product context
  const { products } = useContext(ProductContext);

  console.log(products);

  // get only men's and women's clothing category
  const filteredProducts = products.filter((item) => {
    return (
      item.category === "medical products" || item.category === "healthcare"
    );
  });
  return (
    <>
      <section className="py-20">
        <AllOffersSlider />
        <Upload />
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold mb-10 text-center">
            Explore Our Products
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderMed;
