
import React, { Component} from "react";
import "./mvp.css";
import CashFlow from '../models/cash-flow/CashFlow';
import JobSearch from '../models/job-search/JobSearch';
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
        <p>Choose an example from below.</p>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/cash-flow">Cash Flow</Link>
                  <Link to="/job-search">Job Search</Link>
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/cash-flow">
                <CashFlow />
              </Route>
              <Route path="/job-search">
                <JobSearch />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;