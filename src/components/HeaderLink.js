import React, { Component } from "react";
import { injectIntl } from "react-intl";
import { Link } from "react-router-dom";

import "./HeaderLink.css";

class HeaderLink extends Component {
  t = id => this.props.intl.formatMessage({ id });

  render() {
    const { linkTo, text } = this.props;

    return <Link to={linkTo}>{this.t(text)}</Link>;
  }
}

export default injectIntl(HeaderLink);
