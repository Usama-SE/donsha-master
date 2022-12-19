import React from "react";
import OptionCard from "./OptionCard";

function Options(props) {
  return (
    <div className="optionCards">
      <OptionCard name={"Households"} img={require("../images/logo512.png")} />
      <OptionCard name={"Vitamins"} img={require("../images/logo512.png")} />
      <OptionCard name={"Medicinal"} img={require("../images/logo512.png")} />
    </div>
  );
}

export default Options;
