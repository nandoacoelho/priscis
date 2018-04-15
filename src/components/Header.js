import React, { Component } from "react";
import { injectIntl } from "react-intl";

import Hamburguer from "./Hamburguer";
import HeaderLink from "./HeaderLink";

import "./Header.css";
import { HOME, WORK, CONTACT, ABOUT } from "../constants";

class Header extends Component {
  constructor() {
    super();

    this.state = {
      isActive: false
    };
  }

  handleClick = () => {
    this.setState({
      isActive: !this.state.isActive
    });
  };

  handleCloseMenu = () => {
    this.setState({
      isActive: false
    });
  };

  t = id => this.props.intl.formatMessage({ id });

  render() {
    const { isActive } = this.state;
    return (
      <header className="header">
        <Hamburguer onClick={this.handleClick} isActive={isActive} />
        <nav className={`header-nav ${isActive ? "is-active" : ""}`}>
          <ul className="header-links">
            <li className="header-link" onClick={this.handleCloseMenu}>
              <HeaderLink linkTo={ABOUT} text="header.linkAbout" />
            </li>
            <li className="header-link" onClick={this.handleCloseMenu}>
              <HeaderLink linkTo={WORK} text="header.linkWork" />
            </li>
            <li className="header-link" onClick={this.handleCloseMenu}>
              <HeaderLink linkTo={CONTACT} text="header.linkContact" />
            </li>
          </ul>
        </nav>
        <a className="header-logo" href={HOME}>
          {this.t("header.logoTitle")}
        </a>
      </header>
    );
  }
}

export default injectIntl(Header);
