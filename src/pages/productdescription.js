import React from "react";
import { BiCart} from "react-icons/bi";
import Header from "../components/header";
import Footer from "../components/Footer";


function Productdescription(){

   return(
   

    
   <div>

       <Header />
``
      <div className="container-fluid">

          <div className="row" style={{marginright:20}}>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <div className="row" style={{height:500}}>

                   <div className="col-1 col-sm-1 col-md-1 col-lg-1"></div>
                   <div className="col-11 col-sm-11 col-md-11 col-lg-11 bg-dark border">
                   <img src="/pd1.webp" alt="Not Found"></img>
                   </div>

                </div>
               <div className="row" style={{padding:30}}>

                  <div className="col-1 col-sm-1 col-md-1 col-lg-1"></div>
                  <div className="col-3 col-sm-3 col-md-3 col-lg-3 bg-dark border" style={{height:150,}}>


                  </div>
                  <div className="col-1 col-sm-1 col-md-1 col-lg-1"></div>
                  <div className="col-3 col-sm-3 col-md-3 col-lg-3 bg-dark border" style={{height:150}}>

                  </div>
                  <div className="col-1 col-sm-1 col-md-1 col-lg-1"></div>
                  <div className="col-3 col-sm-3 col-md-3 col-lg-3 bg-dark border" style={{height:150}}>

                  </div>

                </div>
                </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6" style={{padding:30}}>

                  <h2>Product Sample</h2>

                  <div>
                       <p className="bg-light text-secondary border" style={{padding:20}}>
                       Description: Fusce rhoncus eget libero ut grabida. Etiam vulputate
                        libero vitae leo conseectetur, feugiat vivara dui faucibus. Ut ullamcoprer lacus
                        ac prota elefiend. Quisquie a mauris alliquam, tincidun elit ut, consequant metur. Eivamus
                        congue euasmiod jisto, a lobortois purius posiure non.
                        <br /><br />
                        Price: $$$
                        <br /><br />
                        Ratings 
                        <span className="fa fa-star" ></span>
                        <span className="fa fa-star" ></span>
                        <span className="fa fa-star" ></span>
                        <span className="fa fa-star" ></span>
                        <span className="fa fa-star"></span> 4.5    
                          


                       </p>


                  </div>
                 <div style={{padding:20}}>

                     <button className="borderbtn" style={{border:2, backgroundcolor:"white", height:50, width:150}}>Add to cart <BiCart style={{ fontSize: 20, marginleft:8 }} /></button>
                    <button className="bg-primary text-light borderbtn" style={{border:2,height:50, width:150}}>Proceed to Buy</button>

                  </div>

              </div>



          </div>





      </div>
     
     



       <Footer />



   </div>

    
   );



}


export default Productdescription