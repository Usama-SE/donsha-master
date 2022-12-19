import React from "react";
import Button from "react-bootstrap/Button";

import "../App.css";

function Tags(){
   
    return(

    <div 
    style={{
        display:"flex"
    }}
    >
    
    <Button href="/"  className="tagsbtn">
            <b>Kitchen</b>
          </Button>
          <Button href="/" className="tagsbtn">
            <b>Bedroom</b>
          </Button>
          

    </div>


    )




}


export default Tags