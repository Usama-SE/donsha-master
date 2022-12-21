import React from "react";
import BannerSlider from "../components/BannerSlider";
import CardSlider from "../components/CardSlider";
import Options from "../components/Options";
import ProductCard from "../components/ProductCard";
import Householddata from "../data/householddata";
import Medicinal from "../data/medicinal";
import Vitaminsdata from "../data/vitaminsdata";
import Maindata from "../data/maindata";

function Home(props) {
  let hh = Householddata.slice(0, 4);
  let md = Medicinal.slice(0, 4);
  let vt = Medicinal.slice(0, 4);
  let sliderData = [...hh, ...md, ...vt];
  return (
    <div>
      <BannerSlider />
      <Options />
      <CardSlider data={sliderData} />
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
         
        }}
      >
        {Maindata.map((s) => (
          <ProductCard
            id={s.id}
            title={s.title}
            categ={s.category}
            img={s.image}
          />
        ))}
      </div>
      </div>
        
     
    </div>
  );
}

export default Home;
