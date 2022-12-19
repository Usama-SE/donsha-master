import React from "react";
import Header from "../components/header";
import Footer from "../components/Footer";

function Terms(){
   
    return(

    <div>
    <Header />

     <div className="container-fluid">

         <div className="row"
         style={{

            padding:30
         }}
         >

             <div className="col-12 col-sm-12 col-md-6 col-lg-6">
             <br /><br />    
             <h2>Terms & Conditions</h2>
             <br /><br /><br />
             <p>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada tellus enim,
              id tempus dui lacinia sit amet. Suspendisse nec semper mauris. Maecenas feugiat volutpat suscipit.
               Integer sed nibh tristique, dapibus leo eget, malesuada nibh. Fusce feugiat a tortor facilisis elementum.
                Integer vitae mauris metus. Nullam sed orci non lectus placerat dapibus. Pellentesque habitant morbi tristique senectus et netus et malesuada 
                fames ac turpis egestas. Quisque sit amet nulla mi. Etiam sed lectus ac risus dignissim consectetur id in est. 
                Curabitur pretium urna non ante blandit vehicula. Integer euismod lobortis ante nec porta. Etiam eu venenatis dui, nec tristique magna.
                 Fusce eleifend, elit ac venenatis facilisis, nibh massa pellentesque nisi, non volutpat quam ligula et arcu. Aliquam ultricies augue sit amet placerat vestibulum.
                  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                   Nulla ut leo a ex tristique semper eu vel orci. Aliquam justo risus, elementum ut odio id,
                    fermentum hendrerit nisi. 
             </p>
            

             </div>


             <div className="col-12 col-sm-12 col-md-6 col-lg-6">
             <img 
             src="/Termscond.png" alt="Not Found" 
             style={{
                 padding:130
             }}
             >
             </img>
            
             </div>

         </div>

     </div>

    








     <Footer />
    </div>

    

    );




}


export default Terms