import React, { Component } from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";

import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Program from "./components/Program/Program";
import Gallery from "./components/Gallery/Gallery";


import { HashRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (

      <Router>

        <Navbar/>
        <Switch>
          <Route exact path="/Home" component={Home}/> 
          <Route exact path="/Register" component={Register}/>
          <Route exact path="/Program" component={Program}/>
          <Route exact path="/Gallery" component={Gallery}/>
        </Switch>
      </Router>

    );
  }
}

export default App;
