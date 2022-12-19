import React from "react";
import OptionCard from "./OptionCard";

function Options(props) {
  return (
    <div className="optionCards">
      <OptionCard name={"Households"} img="/logo129.png" />
      <OptionCard name={"Vitamins"} img="/logo129.png" />
      <OptionCard name={"Medicinal"} img={"/logo129.png"} />
    </div>
  );
}

export default Options;
