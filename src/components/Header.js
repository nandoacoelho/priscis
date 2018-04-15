import React, { Component } from "react";
import { injectIntl } from "react-intl";
import "./Header.css";

class Header extends Component {
  t = id => this.props.intl.formatMessage({ id });

  render() {
    return (
      <header className="header">
        <ul className="header-links">
          <li className="header-link">{this.t("header.linkWho")}</li>
          <li className="header-link">{this.t("header.linkWhere")}</li>
          <li className="header-link">{this.t("header.linkHow")}</li>
        </ul>

        <a className="header-logo" href="/">
          prscis
        </a>
      </header>
    );
  }
}

export default injectIntl(Header);
