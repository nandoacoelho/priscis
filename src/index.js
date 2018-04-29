import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./globals.css";
import Router from "./containers/RouterContainer";
import IntlContainer from "./containers/IntlContainer";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <IntlContainer locale={navigator.language}>
    <Router />
  </IntlContainer>,
  document.getElementById("root")
);
registerServiceWorker();
