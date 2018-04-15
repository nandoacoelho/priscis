import React, { Component } from "react";
import { injectIntl } from "react-intl";

import "./Hero.css";

class Header extends Component {
  t = id => this.props.intl.formatMessage({ id });

  render() {
    return (
      <div className="hero">
        <p className="hero-title">{this.t("hero.title")}</p>
      </div>
    );
  }
}

export default injectIntl(Header);
