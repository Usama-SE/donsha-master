import React from "react";
import { UncontrolledCarousel } from "reactstrap";

function BannerSlider(props) {
  return (
    <>
      <UncontrolledCarousel
        items={[
          {
            key: 1,
            src: "/b2.png",
          },
          {
            key: 2,
            src: "b3.jpg",
          },
          {
            key: 3,
            src: "b1.jpg",
          },
        ]}
      />
    </>
  );
}

export default BannerSlider;
