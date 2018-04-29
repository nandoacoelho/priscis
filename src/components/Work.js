import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { injectIntl, intlShape } from "react-intl";

import "./Work.css";

import { initIntersectionObserver } from "../utils/Intersection";

class Work extends PureComponent {
  componentDidMount() {
    initIntersectionObserver(".work > *");
  }

  t = id => this.props.intl.formatMessage({ id: `work.${id}` });

  render() {
    const { title, subtitle, imgSrc, imgAlt, textOrder } = this.props;

    return (
      <div className="work">
        <div
          className={`work-heading ${
            textOrder === "first" ? "work-first" : "work-second"
          }`}
        >
          <h3 className="work-title">{this.t(title)}</h3>
          <h4 className="work-subtitle">{this.t(subtitle)}</h4>
        </div>
        <div
          className={`work-img ${
            textOrder === "first" ? "work-second" : "work-first"
          }`}
        >
          {imgSrc && <img alt={imgAlt} src={imgSrc} />}
        </div>
      </div>
    );
  }
}

Work.defaultProps = {
  textOrder: "first"
};

Work.propTypes = {
  intl: intlShape,
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  textOrder: PropTypes.string
};

export default injectIntl(Work);
