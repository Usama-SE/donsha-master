import React from "react";

function OptionCard({ name, img }) {
  return (
    <div
      className="option-card"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="option-card-img">
        <img
          src={img}
          style={{
            height: 60,
            maxWidth: 60,
          }}
        ></img>
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
