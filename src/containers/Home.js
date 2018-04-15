import React, { Component } from "react";

import Header from "../components/Header";
import Hero from "../components/Hero";

import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div id="home">
        <Header />
        <Hero />
      </div>
    );
  }
}

export default Home;
