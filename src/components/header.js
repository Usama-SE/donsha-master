import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
function Header(props) {
  return (
    <>
      <div className="topheader">
        <div className="topheaderbtn">
          <Link to={"/about"} className="">
            About
          </Link>
          <a className="">Contact</a>
          <Link to="/privacy" className="">
            Privacy Policy
          </Link>
        </div>
        {/* <div className=""></div> */}
        <div className="innertopheadericon">
          <a className="" href="/#">
            <i className="fa-solid fa-cart-shopping"></i>
          </a>
          <a href="/" className="">
            <i className="fa-regular fa-heart"></i>
          </a>
          <a href="/" className="">
            <i className="fa-regular fa-user"></i>
          </a>
        </div>
      </div>

      <div className="topheader2">
        <div className="topheadertitle">
          <Link to={"/"}>
            <h3>donsha.net</h3>
          </Link>
        </div>

        <div className="topheaderlink">
          <div href="/" className="search">
            Search
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>

          <Button href="/" className="login">
            <b>Log in</b>
          </Button>
          <Button href="/" className="signup">
            Sign Up
          </Button>
        </div>
      </div>
    </>
  );
}

export default Header;
