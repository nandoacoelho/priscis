import React, { PureComponent } from "react";

import "./Hamburguer.css";

class Hamburguer extends PureComponent {
  render() {
    const { isActive, onClick } = this.props;
    return (
      <button
        onClick={onClick}
        className={`hamburger hamburger--collapse hamburger--squeeze ${
          isActive ? "is-active" : ""
        }`}
        type="button"
      >
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
      </button>
    );
  }
}

export default Hamburguer;
