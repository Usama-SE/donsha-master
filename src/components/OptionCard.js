import React from "react";
import { Link } from "react-router-dom";
function OptionCard({ name, img, to }) {
  function handleclick(){window.location.assign(to)}
  return (
    
    
    <div className="option-card container-fluid">
      
      
      <div className="option-card-img">
        {/* <img
          src={img}
          // style={{
          //   maxHeight: 60,
          //   maxWidth: 60,
          // }}
          className="img-fluid"
        ></img> */}
        <Link to={to} className="Link1">
        <i
          class={img ? img : "fa-solid fa-stethoscope"}
          style={{ fontSize: "3rem", color: "blue" }}
        ></i>
        </Link>
        
      </div>
      <div className="option-card-content" style={{ overflow: "hidden" }}>
        <div className="option-card-body">
        <Link to={to} className="Link">
        <div className="option-card-title">{name}</div>

          </Link>

          <Link to={to} className="Link1">
          <div className="option-card-txt">
          Household,Kitchen,Bedroom,
            <br />
            Cleaning,Washing,Lifestyle
          </div>
        </Link>
            
        </div>
      </div>
    </div>
  );
}

export default OptionCard;
