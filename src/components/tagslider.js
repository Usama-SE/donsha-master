import React from "react";
import Tags from "./tags";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from "react-bootstrap/Button";

function Tagslider(props) {
  let cards = ["Kitchen", "Bedroom", "Bathroom"];
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
    <div
      style={{
        marginTop: 80,
        height: 70,
        marginLeft: "10%",
        width: "35%",
      }}
    >
      <Carousel responsive={responsive}>
        {cards.map((c) => (
          <Button
            style={{ borderRadius: 25, background: "none", color: "black" }}
          >
            {c}
          </Button>
        ))}
      </Carousel>
    </div>
  );
}

export default Tagslider;
