import React from "react";

function Footer(props) {
  return (
    <div className="container-fluid">
      <div
        className="row bg-dark text-light"
        style={{ paddingTop: 30, paddingBottom: 30, textAlign: "center" }}
      >
        <div className="col-md-1 col-lg-1"></div>
        <div className="col-12 col-sm-12 col-md-2 col-lg-2">
          <h3>
            <b>donsha.net</b>
          </h3>
          <br />
          <p className="text-white-50">
            Household
            <br />
            Kitchen
            <br />
            Bedroom
            <br />
            Medical Professional
            <br />
            Vitamin Supplements
          </p>
        </div>
        <div className="col-12 col-sm-12 col-md-2 col-lg-2">
          <br />
          <br />
          <br />
          <p className="text-white-50">
            About Us
            <br />
            Contact Us
            <br />
            Terms & Conditions
            <br />
            Privacy Policy
          </p>
        </div>
        <div className="col-12 col-sm-12 col-md-3 col-lg-3">
          <br />
          <br />
          <br />
          <p className="text-white-50">
            Address:example#
            <br />
            Email:example@abc.com
            <br />
            Tel:1233444
            <br />
            Port of Spain
            <br />
            Trinidad
          </p>
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d254489.0677097334!2d-61.284226120022566!3d10.438735886572161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sTrinidad!5e0!3m2!1sen!2s!4v1671344760256!5m2!1sen!2s"
            width={320}
            height={240}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
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
