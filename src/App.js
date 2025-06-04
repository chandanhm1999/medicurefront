import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CheckoutPage from "./pages/CheckoutPage";
import OrderMed from "./pages/OrderMed";
import Labtest from "./pages/Labtest";
import Healthcare from "./pages/Healthcare";
import Consultation from "./pages/Consultation";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product/:id" element={<ProductDetails />}></Route>
          <Route path="/checkout" element={<CheckoutPage />}></Route>
          <Route path="/orderMed" element={<OrderMed />}></Route>
          <Route path="/labtest" element={<Labtest />}></Route>
          <Route path="/healthcare" element={<Healthcare />}></Route>
          <Route path="/consultation" element={<Consultation />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
