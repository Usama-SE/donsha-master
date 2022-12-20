import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import ContactModal from "./ContactModal";
import SignIn from "./SignInModal";
import SignUp from "./SignUp";
import {
  UncontrolledPopover,
  PopoverBody,
  PopoverHeader,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import Navbar2 from "./Navbar2";
import DataContext from "../data/dataContext";
import Householddata from "../data/householddata";

function Header(props) {
  // const data = React.useContext(DataContext);
  const [modal, setModal] = useState(false);

  const [isSignin, setSignin] = useState(false);
  const [isSignUp, setSignUP] = useState(false);
  const [isnavOpen, setIsnavOpen] = useState(false);
  const [t, sett] = useState(false);

  const togglenav = () => setIsnavOpen(!isnavOpen);
  const toggle = () => setModal(!modal);
  const toggleSignIn = () => setSignin(!isSignin);
  const toggleSignUp = () => setSignUP(!isSignUp);
  return (
    <>
      <div className="topheader">
        <div className="topheaderbtn">
          <Link to={"/about"} className="tb">
            About
          </Link>
          <Link onClick={toggle} className="tb">
            Contact
          </Link>
          <Link to="/privacy" className="tb">
            Privacy Policy
          </Link>
        </div>
        {/* <div className=""></div> */}
        <div className="innertopheadericon">
          <a className="" href="/#">
            <i className="fa-solid fa-cart-shopping" id="shop"></i>

            <div>
              <UncontrolledPopover placement="bottom" target="shop">
                <PopoverHeader>Shopping Cart</PopoverHeader>
                <PopoverBody>
                  {props.cart.map((x) => (
                    <div>{x}</div>
                  ))}
                </PopoverBody>
              </UncontrolledPopover>
            </div>
          </a>
          <a href="/#">
            <i className="fa-solid fa-heart" id="wishlist"></i>

            <div>
              <UncontrolledPopover placement="bottom" target="wishlist">
                <PopoverHeader>WishList</PopoverHeader>
                <PopoverBody>
                  {props.cart.map((x) => (
                    <div>{x}</div>
                  ))}
                </PopoverBody>
              </UncontrolledPopover>
            </div>
          </a>
          <a href="/" className="">
            <i className="fa-regular fa-user"></i>
          </a>
        </div>
      </div>

      <div className="topheader2">
        <div className="topheadertitle">
          <Link to={"/"} className="Link">
            <h3>donsha.net</h3>
          </Link>
        </div>

        <div className="topheaderlink">
          <div className="search" id="search">
            {t ? <input type="text" placeholder="Search" id="sr" /> : null}
            <i
              className="fa-solid fa-magnifying-glass"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 15,
                height: 30,
                width: 30,
                background: "black",
                color: "white",
              }}
              onClick={() => sett(!t)}
            ></i>
          </div>

          <div className="login" onClick={toggleSignIn}>
            Log in
          </div>
          <div className="signup" onClick={toggleSignUp}>
            Sign Up
          </div>
        </div>
      </div>
      {/* <Navbar2 isOpen={isnavOpen} toggle={togglenav} /> */}
      <ContactModal modal={modal} toggle={toggle} />
      <SignIn modal={isSignin} toggle={toggleSignIn} />
      <SignUp modal={isSignUp} toggle={toggleSignUp} />
    </>
  );
}

export default Header;
