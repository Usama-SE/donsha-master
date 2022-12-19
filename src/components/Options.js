import React from "react";
import { Link } from "react-router-dom";
import OptionCard from "./OptionCard";

function Options(props) {
  return (
    
    <div className="optionCards container-fluid">
      
      <OptionCard
        name={"Households"}
        img={"fa-solid fa-house"}
        to="/household"
      />
      
      <OptionCard
        name={"Vitamins"}
        img={"fa-solid fa-heart-pulse"}
        to="/vitamin"
      />
      <OptionCard
        name={"Medicinal"}
        img={"fa-solid fa-stethoscope"}
        to="medical"
      />
    </div>
  );
}

export default Options;
