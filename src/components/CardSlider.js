import React from "react";
import ProductCard from "./ProductCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function CardSlider(props) {
  let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div
      style={{
        marginTop: 80,
        height: 400,
        width: "97%",
        marginLeft: "3%",
      }}
    >
      <Carousel responsive={responsive}>
        {cards.map((c) => (
          <ProductCard />
        ))}
      </Carousel>
    </div>
  );
}

export default CardSlider;
