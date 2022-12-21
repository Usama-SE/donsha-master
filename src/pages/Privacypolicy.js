import React from "react";

function Privacypolicy() {
  return (
    <div>
      {/* <Header /> */}

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
            <h2>Privacy Policy</h2>
            <br />
            <br />
            <br />
            <p>
              Welcome to the donsha.net
            <br /><br />
            We respect your privacy and want to protect your personal information. To learn more, please read this Privacy Policy.
            <ul>
              <li>
              This Privacy Policy explains how we collect, use and (under certain conditions) disclose your personal information. This Privacy Policy also explains the steps we have taken to secure your personal information. Finally, this Privacy Policy explains your options regarding the collection, use and disclosure of your personal information. By visiting the Site directly or through another site, you accept the practices described in this Policy.

              </li>
              <li>
              Data protection is a matter of trust and your privacy is important to us. We shall therefore only use your name and other information which relates to you in the manner set out in this Privacy Policy. We will only collect information where it is necessary for us to do so and we will only collect information if it is relevant to our dealings with you.

              </li>
              <li>
              We will only keep your information for as long as we are either required to by law or as is relevant for the purposes for which it was collected.

              </li>
              <li>
              We will cease to retain your personal data, or remove the means by which the data can be associated with you, as soon as it is reasonable to assume that such retention no longer serves the purposes for which the personal data was collected, and is no longer necessary for any legal or business purpose.

              </li>
              <li>
              You can visit the Site and browse without having to provide personal details. During your visit to the Site you remain anonymous and at no time can we identify you unless you have an account on the Site and log on with your user name and password.

              </li>
            </ul>

            </p>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center"   >
            <img
            className="img-fluid imgbg"
              src="/privacypolicy.png"
              alt="Not Found"
            
            ></img>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default Privacypolicy;
