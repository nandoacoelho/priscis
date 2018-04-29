import React, { Component } from "react";
import { injectIntl } from "react-intl";
import { Link } from "react-router-dom";

import "./Bio.css";

import { ABOUT } from "../constants";
import { initIntersectionObserver } from "../utils/Intersection";

class Bio extends Component {
  componentDidMount() {
    initIntersectionObserver(".bio > *");
  }

  t = id => this.props.intl.formatMessage({ id });

  render() {
    return (
      <div className="bio">
        <h2 className="bio-title">{this.t("bio.title")}</h2>
        <div className="bio-box">
          <p className="bio-paragraph">{this.t("bio.paragraph")}</p>
          <Link to={ABOUT} className="link-see-more">
            {this.t("linkSeeMore")}
          </Link>
        </div>
      </div>
    );
  }
}

export default injectIntl(Bio);
