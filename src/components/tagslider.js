import React from "react";
import Tags from "./tags";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


function Tagslider(props) {
  let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div style={{
       marginTop: 80, height: 70, marginLeft: "10%", width:"30%" 

       
       }}>
      <Carousel responsive={responsive}>
        {cards.map((c) => (
          <Tags />
        ))}
      </Carousel>
    </div>
  );
}

export default Tagslider;
