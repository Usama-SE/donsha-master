import React from "react";

function OptionCard({ name, img }) {
  return (
    <div className="option-card container-fluid">
      <div className="option-card-img">
        <img
          src={img}
          // style={{
          //   maxHeight: 60,
          //   maxWidth: 60,
          // }}
          className="img-fluid"
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
