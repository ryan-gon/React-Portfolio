import React from "react";
import Header from "../components/Header/Header";
import "../components/Me/me.css";
import Me from "../components/Me/Me";
import images from "../images/icons.jpg"

function Contact() {
  return (
    <div className = "about">
      <Header backgroundImage={images}>
      
       <br></br>
        
      </Header>
      <Me>
      <div className = "Contact">
          <h1 ><strong></strong></h1>
          <p><strong>ryanpiunj@gmail.com</strong>
          </p>
          <br></br>

          <p>More accounts comming soon !</p>
      </div>
      </Me>
      
    
    </div>
  );
}

export default Contact;
