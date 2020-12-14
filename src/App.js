import React, { Component } from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";

import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Program from "./components/Program/Program";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";


import { HashRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (

      <Router>

        <Navbar/>
        <Switch>
        <Route exact path="/"><Home /><Footer /></Route>
          <Route exact path="/Register"> <Register/> <Footer/></Route> 
          <Route exact path="/Program"> <Program/> <Footer /></Route>
          <Route exact path="/Gallery"> <Gallery/> <Footer /></Route>
        </Switch>
      </Router>

    );
  }
}

export default App;
