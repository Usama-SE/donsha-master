import React from "react";
import BannerSlider from "../components/BannerSlider";
import CardSlider from "../components/CardSlider";
import Options from "../components/Options";
import ProductCard from "../components/ProductCard";

function Home(props) {
  let card = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div>
      <BannerSlider />
      <Options />
      <CardSlider />
      <div
        style={{
          width: "97%",
          display: "flex",
          gap: 3,
          alignItems: "center",
          flexWrap: "wrap",
          minHeight: "300px",
          marginLeft: "3%",
        }}
      >
        {card.map((s) => (
          <ProductCard />
        ))}
      </div>
    </div>
  );
}

export default Home;
