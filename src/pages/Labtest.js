import React from "react";
import ImgSlider from "../components/multipage/ImgSider";
import AllOffersSlider from "../components/multipage/AllOffersSlider ";
import FourTest from "../components/multipage/FourTest";
import Lab from "../components/multipage/Lab";
import LabTestContact from "../components/multipage/LabTestContact";

const Labtest = () => {
  return (
    <>
      <ImgSlider />
      <FourTest />
      <Lab />
      <LabTestContact />
      <AllOffersSlider />
    </>
  );
};

export default Labtest;
