import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div className="container-fluid" style={{ marginTop: 100 }}>
      <div
        className="row bg-dark text-light"
        style={{ paddingTop: 30, paddingBottom: 30, textAlign: "center" ,}}
      >
        <div className="col-12 col-sm-12 col-md-3 col-lg-3">
          <h3>
            <Link to="/" style={{ color: "white" }} className="Link">
            <h3><b>Donsha<sup
            style={{
              fontSize:12,
              verticalAlign:"super",
            }}
            >
              LLC</sup></b></h3>
            </Link>
          </h3>
          <br />
          <p className="text-white-50">
            <Link to={"/household"} className="text-white-50 Link">
              Household
            </Link>
            <br />
            Kitchen
            <br />
            Bedroom
            <br />
            <Link to={"/medical"} className="text-white-50 Link">
              Medical Professional
            </Link>
            <br />
            <Link to={"/vitamin"} className="text-white-50 Link">
              Vitamin Supplements
            </Link>
          </p>
        </div>
        <div className="col-12 col-sm-12 col-md-3 col-lg-3">
          <br />
          <br />
          <br />
          <p className="text-white-50">
            <Link to={"/about"} className="text-white-50 Link">
              About Us
            </Link>
            <br />
            <Link to={"/terms&conditions"} className="text-white-50 Link">
              Terms & Conditions
            </Link>
            <br />
            <Link to={"/privacy"} className="text-white-50 Link">
              {" "}
              Privacy Policy
            </Link>
          </p>
        </div>
        <div className="col-12 col-sm-12 col-md-3 col-lg-3">
          <br />
          <br />
          <br />
          <p className="text-white-50">
            <b>Address:</b><br />7901 4TH ST N | STE 300<br />ST. PETERSBURG, FL. US 33702
            <br />
            <b>Email:</b> admin@donsha.net
            <br />
            <b>Tell:</b> 8684681868
            <br />
            Port of Spain | Trinidad
          </p>
        </div>
        <div className="col-12 col-sm-12 col-md-3 col-lg-3">
          
        </div>
      </div>
      <div
        className="row bg-light text-secondary"
        style={{ textAlign: "center", paddingTop: 20, paddingBottom: 20 }}
      >
        <p>©donsha.net 2022-23 All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
