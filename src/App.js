import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Navbar/Nav";
import Welcome from "./pages/Welcome";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path="/" component={Welcome} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <div className="App">
          <Footer/>
      </div>
      </div>
    </Router>
    
  
  );
}

export default App;
