import React from "react";
import Footer from "../components/Footer";
import Header from "../components/header";
import BannerSlider from "../components/BannerSlider";
import CardSlider from "../components/CardSlider";
import Options from "../components/Options";
import ProductCard from "../components/ProductCard";
import Tagslider from "../components/tagslider";
import Medicinal from "../data/medicinal";

function Medical(props) {
  return (
    <div>
      <Tagslider />

      <div
        style={{
          width: "80%",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginLeft: "10%",
          flexWrap: "wrap",
          minHeight: "300px",
        }}
      >
        {Medicinal.map((s) => (
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

export default Medical;
