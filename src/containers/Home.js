import React, { Component } from "react";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Bio from "../components/Bio";

import "./Home.css";
import SelectedWorks from "../components/SelectedWorks";

class Home extends Component {
  render() {
    return (
      <div id="home">
        <Header />
        <Hero />
        <Bio />
        <SelectedWorks />
      </div>
    );
  }
}

export default Home;
