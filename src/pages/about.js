import React from "react";

function About() {
  return (
    <div>
      <div className="container-fluid">
        <div
          className="row"
          style={{
            padding: 30,
          }}
        >
          <div className="col-12 col-sm-12 col-md-6 col-lg-6"
          style={{
            alignContent:"center",
            justifyContent:"center",
          }}
          >
            <br />
            <br />
            <h2>About</h2>
            <br />
            <br />
            <br />
            <p>
            Donsha is a wholesale goods company based in Trinidad. We provide you with the best quality goods at wholesale prices so you can sell them to your clients, customers or even yourself! Whether you're a business looking for new products or a person who needs household items or medical supplies, we have it all and have been providing wholesale items in Trinidad for years.
            <br /><br /><br />
            We're here to help your business thrive by providing high-quality products at affordable prices, so you can rest assured knowing that your customers will be happy with the quality of your merchandise.
            <br /><br /><br />
            We offer great prices on all of our products—no matter what kind of product you're looking for—so you can start up your own business or buy for your existing one without breaking the bank.
            </p>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center">
            <img
            className="img-fluid imgbg"
              src="/about.png"
              alt="Not Found"
             
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
