import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/Home";
import IntlContainer from "./containers/IntlContainer";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <IntlContainer locale={navigator.language}>
    <App />
  </IntlContainer>,
  document.getElementById("root")
);
registerServiceWorker();
