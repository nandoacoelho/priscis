import React, { Component } from "react";

import Header from "../components/Header";
import Hero from "../components/Hero";

import "./Home.css";

class About extends Component {
  render() {
    return (
      <div id="about">
        <Header />
        <Hero />
      </div>
    );
  }
}

export default About;
