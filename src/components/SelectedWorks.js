import React, { PureComponent } from "react";
import { injectIntl } from "react-intl";

import "./SelectedWorks.css";

import Work from "./Work";

import { initIntersectionObserver } from "../utils/Intersection";

class SelectedWorks extends PureComponent {
  componentDidMount() {
    initIntersectionObserver(".selected-works-title");
    initIntersectionObserver(".selected-works-button");
  }

  t = id => this.props.intl.formatMessage({ id });

  render() {
    return (
      <div className="selected-works">
        <h2 className="selected-works-title">{this.t("selectedWork.title")}</h2>
        <div className="selected-works-group">
          <Work
            title="exampleTitle"
            subtitle="exampleSubtitle"
            imgSrc="exampleSrc"
            imgAlt="exampleAlt"
          />
          <button className="selected-works-button">
            {this.t("selectedWork.moreWork")}
          </button>
        </div>
      </div>
    );
  }
}

export default injectIntl(SelectedWorks);
