import { auto } from "@popperjs/core";
import React, { useState } from "react";
import { BiCart, BiHeart } from "react-icons/bi";
import "../App.css";
import DataContext from "../data/dataContext";
function ProductCard({ id, categ, title, img }) {
  const data = React.useContext(DataContext);
  const [c, setc] = useState(false);
  const [w, setw] = useState(false);
  const handleCart = () => {
    let p = data.cart;
    data.setCart([...p, title]);
  };
  const handleWishlist = () => {
    let p = data.wishlist;
    data.setwishlist([...p, title]);
  };
  return (
    <div className="product-card container-fluid">
      <div
        style={{
          borderTopWidth: 1,
          borderRadius: 15,
          height: 250,
          Width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="img-fluid"
      >
        <img
          src={img ? img : "/b1.jpg"}
          style={{
            maxHeight: "100%",
            maxWidth: "100%",

            borderTopWidth: 1,
            borderRadius: 15,
          }}
          className="img-fluid"
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
          {title ? title : "Product #Sample"}
        </div>
        <div className="product-dis" style={{ fontSize: 12 }} id="pd">
          {categ ? categ : "Description"}
        </div>
        <div className="product-actions">
          <div
            className="addCartBtn"
            onClick={() => {
              setc(!c);
              handleCart();
            }}
          >
            {c ? (
              <span>
                <b>Added to cart</b>
              </span>
            ) : (
              <span>
                <b>Add to cart</b>
              </span>
            )}
            <span style={{ paddingLeft: 15 }}>
              <i class="fa-solid fa-shopping-cart"></i>
            </span>
          </div>
          <span
            style={{ width: "40%", textAlign: "center" }}
            onClick={() => {
              setw(!w);
              handleWishlist();
            }}
          >
            {w ? (
              <i class="fa-solid fa-heart" style={{ color: "red" }}></i>
            ) : (
              <i class="fa-regular fa-heart"></i>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
