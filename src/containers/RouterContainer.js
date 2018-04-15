import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Work from "./Work";
import About from "./About";
import Contact from "./Contact";
import { WORK, CONTACT, ABOUT, HOME } from "../constants";

class RouterContainer extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path={HOME} component={Home} />
          <Route path={ABOUT} component={About} />
          <Route path={CONTACT} component={Contact} />
          <Route path={WORK} component={Work} />
        </div>
      </Router>
    );
  }
}

export default RouterContainer;
