import React from "react";
import Footer from "../components/Footer";
import Header from "../components/header";
import BannerSlider from "../components/BannerSlider";
import CardSlider from "../components/CardSlider";
import Options from "../components/Options";
import ProductCard from "../components/ProductCard";
import Tagslider from "../components/tagslider";

function Home(props) {
  let card = [1, 2, 3, 4];
  return (
    <div>
      <Header />
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
        {card.map((s) => (

          
          <ProductCard />
          
        ))}
      </div>
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
        {card.map((s) => (

          
          <ProductCard />
          
        ))}
      </div>
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
        {card.map((s) => (

          
          <ProductCard />
          
        ))}
      </div>
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
        {card.map((s) => (

          
          <ProductCard />
          
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
