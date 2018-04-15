import React, { Component } from "react";
import PropTypes from "prop-types";
import { IntlProvider, addLocaleData } from "react-intl";
import ptTranslation from "../locales/pt.json";
import ptLocale from "react-intl/locale-data/pt";

addLocaleData(ptLocale);

class IntlContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: "pt",
      messages: {
        ...ptTranslation
      }
    };
  }

  componentDidMount() {
    if (!this.props.locale) return;
    this.handleLocaleChange({}, this.props.locale);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.locale) return;
    this.handleLocaleChange({}, nextProps.locale);
  }

  getBaseLocale(locale) {
    return locale.indexOf("-") !== -1 ? locale.split("-")[0] : locale;
  }

  handleLocaleChange = (e, locale) => {
    const baseLocale = this.getBaseLocale(locale);

    Promise.all([
      import(`react-intl/locale-data/${baseLocale}`),
      this.importTranslations(baseLocale, locale)
    ])
      .then(([localeData, translations]) => {
        this.handleNewTranslations(
          locale,
          {
            ...translations
          },
          localeData
        );
      })
      .catch(event => {
        console.error(event);
        return Promise.reject(event);
      });
  };

  importTranslations(baseLocale, locale) {
    return Promise.all([
      import(`../locales/${baseLocale}`),
      import(`../locales/${locale}`)
    ])
      .then(([baseTranslation, translation]) => {
        return {
          ...baseTranslation,
          ...translation
        };
      })
      .catch(e => {
        if (process.env.NODE !== "production") {
          this.couldNotFindModuleError(e);
        }
        return import(`../locales/${baseLocale}`).then(
          baseTranslation => baseTranslation
        );
      });
  }

  couldNotFindModuleError(e) {
    const regex = new RegExp(/Cannot find module '\.\/([A-z-]{1,7})'\./);
    const result = regex.exec(e.message);
    if (!result) return false;

    return result[1];
  }

  handleNewTranslations = (locale, messages, localeData) => {
    addLocaleData(localeData);
    this.setState({
      locale,
      messages
    });
  };

  render() {
    const { locale, messages } = this.state;

    return (
      <IntlProvider key={locale} locale={locale} messages={messages}>
        {this.props.children}
      </IntlProvider>
    );
  }
}

IntlContainer.propTypes = {
  locale: PropTypes.string,
  children: PropTypes.element
};

export default IntlContainer;
