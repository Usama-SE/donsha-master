import { auto } from "@popperjs/core";
import React from "react";
import { BiCart, BiHeart } from "react-icons/bi";
import "../App.css";
function ProductCard({id, des, title, img}) {
  return (
    <div className="product-card">
      <div
        style={{
          borderTopWidth: 1,
          borderRadius: 15,
          height: 250,
          Width: "100%",
        }}
      >
        <img 
          src={img?img:"/b1.jpg"}
          style={{
            
             minHeight: "100%",
             maxWidth: "100%",

            borderTopWidth: 1,
            borderRadius: 15,
          }}
        />
      </div>
      <div
        style={{
          paddingLeft: 10,
          flex: 0.25,
          display: "flex",
          flexDirection: "column",
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
          minHeight: 50,
          zIndex: 1,
        }}
      >
        <div className="product-title" style={{ fontSize: 14 }}>
          {title?title:"Product #Sample"}
        </div>
        <div className="product-dis" style={{ fontSize: 12 }}>
          {des?des:"Product Description"}
        </div>
        <div className="product-actions">
          <div className="addCartBtn">
            <span>
              <b>Add to cart</b>
            </span>
            <span style={{ paddingLeft: 15 }}>
              <BiCart style={{ fontSize: 20 }} />
            </span>
          </div>
          <span style={{ width: "40%", textAlign: "center" }}>
            <BiHeart style={{ fontSize: 20 }} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
