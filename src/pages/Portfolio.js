import React from "react";
import Header from "../components/Header/Header";
import "../components/Me/me.css"
import "../components/Header/head.css"
import images from "../images/projectss.png"

import Me from "../components/Me/Me"

function Portfolio() {
  return (
    <div className = "about">
      <Header backgroundImage={images}>
      
       <br></br>
        
      </Header>
      <Me>
        <h><strong>Projects</strong></h>
        
      <div>
<br></br>
      <h3>Daily Planner</h3>
      <a href=" https://ryan-gon.github.io/Daily-Planner/"/>
      
        <a target="_blank"
            href="https://ryan-gon.github.io/Daily-Planner/">Check it out !</a>
          
          <h3>Weather Dashboard</h3>
      <a href=" https://ryan-gon.github.io/Daily-Planner/"/>
      
        <a target="_blank"
            href="https://ryan-gon.github.io/Daily-Planner/">Check it out !</a>
          
          <h3>Employee Directory</h3>
      <a href=" https://ryan-gon.github.io/Daily-Planner/"/>
      
        <a target="_blank"
            href="https://ryan-gon.github.io/Daily-Planner/">Check it out !</a>
       

      
      </div>
      </Me>
      
    
    </div>
  );
}

export default Portfolio;

