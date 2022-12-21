import React from "react";
import Footer from "../components/Footer";
import Header from "../components/header";
// import BannerSlider from "../components/BannerSlider";
// import CardSlider from "../components/CardSlider";
// import Options from "../components/Options";
import ProductCard from "../components/ProductCard";
import Householddata from "../data/householddata";

function Households(props) {
  return (
    <div>
    

      <div
        style={{
          width: "80%",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginLeft: "10%",
          marginRight:"10%",
          flexWrap: "wrap",
          minHeight: "300px",
          marginTop: "100px",

         
        }}
      >
        {Householddata.map((s) => (
          <ProductCard
            id={s.id}
            title={s.title}
            categ={s.category}
            img={s.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Households;
