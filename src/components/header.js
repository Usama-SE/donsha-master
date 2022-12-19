import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import ContactModal from "./ContactModal";
import SignIn from "./SignInModal";
import SignUp from "./SignUp";
import { UncontrolledPopover, PopoverBody, PopoverHeader } from "reactstrap";

function Header(props) {
  // const [visible, setvisibe] = useState(false);
  const [modal, setModal] = useState(false);

  const [isSignin, setSignin] = useState(false);
  const [isSignUp, setSignUP] = useState(false);

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
                  Sed posuere consectetur est at lobortis. Aenean eu leo quam.
                  Pellentesque ornare sem lacinia quam venenatis vestibulum.
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
                  Sed posuere consectetur est at lobortis. Aenean eu leo quam.
                  Pellentesque ornare sem lacinia quam venenatis vestibulum.
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
          <div href="/" className="search">
            Search
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>

          <Button className="login" onClick={toggleSignIn}>
            <b>Log in</b>
          </Button>
          <Button className="signup" onClick={toggleSignUp}>
            Sign Up
          </Button>
        </div>
      </div>
      <ContactModal modal={modal} toggle={toggle} />
      <SignIn modal={isSignin} toggle={toggleSignIn} />
      <SignUp modal={isSignUp} toggle={toggleSignUp} />
    </>
  );
}

export default Header;
