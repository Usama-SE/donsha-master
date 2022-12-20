import React from "react";
import { Link } from "react-router-dom";
function OptionCard({ name, img, to }) {
  const handlenav = () => {
    window.location.replace(to);
  };
  return (
    <div className="option-card container-fluid" onClick={handlenav}>
      <div className="option-card-img">
        {/* <img
          src={img}
          // style={{
          //   maxHeight: 60,
          //   maxWidth: 60,
          // }}
          className="img-fluid"
        ></img> */}
        <i
          class={img ? img : "fa-solid fa-stethoscope"}
          style={{ fontSize: "3rem", color: "blue" }}
        ></i>
      </div>
      <div className="option-card-content" style={{ overflow: "hidden" }}>
        <div className="option-card-body">
          <div className="option-card-title">{name}</div>
          <div className="option-card-txt">
            Household,Kitchen,Bedroom,
            <br />
            Cleaning,Washing,Lifestyle
          </div>
        </div>
      </div>
    </div>
  );
}

export default OptionCard;
