
import React, { Component} from "react";
import "./mvp.css";
import CashFlow from '../models/cash-flow/CashFlow';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1>Math Modelling Examples</h1>
        <CashFlow />
      </div>
    );
  }
}

export default App;