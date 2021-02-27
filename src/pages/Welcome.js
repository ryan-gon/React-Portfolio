import React from 'react';
import Header from "../components/Header/Header";
import "../components/Me/me.css"
import "../components/Header/head.css"
import Me from "../components/Me/Me"
import images from "../images/heyhey.png"  

function Welcome() {
  return (
    <div className = "about">
      <Header backgroundImage={images}>
      
       <br></br>
        
      </Header>
      <Me>
      <div className = "briefhistory">
          <h1 ><strong>ENJOY</strong></h1>
          
      </div>
      </Me>
      
    
    </div>
  );
}

export default Welcome;
