import React from "react";
import "./Breadcrum.css";
import ARROWICON from "../Assets/breadcrum_arrow.png";
const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum">
      HOME <img src={ARROWICON} alt="arrow-icon" /> SHOP{" "}
      <img src={ARROWICON} alt="arrow-icon" /> {product.category}{" "}
      <img src={ARROWICON} alt="arrow-icon" />
      {product.name}
    </div>
  );
};

export default Breadcrum;
