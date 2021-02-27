import React from "react";
import Header from "../components/Header/Header";
import "../components/Me/me.css"
import "../components/Header/head.css"
import Me from "../components/Me/Me"
import images from "../images/nycskyline.jpg"

function About() {
  return (
    <div className = "about">
      <Header backgroundImage={images}>
        
      </Header>
      <Me>
      <div className = "briefhistory">
          <h1 ><strong>Brief History</strong></h1>
          <br></br>
          <p><strong>I was born and raised In NYC for sometime and spent the other half living in Jersey. 
           I've always had an itch to code and decided to give it a shot here at Rutgers. 
          Im on the come up to become the greatest developer that ever lived, just watch!
        
          But for now im taking it slow and learning the most I can. I think coding is something 
          I'll be doing for the rest of my life !</strong> 
      </p>
      </div>
      </Me>
      
    
    </div>
  );
}

export default About;
