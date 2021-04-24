/*eslint no-undef: "error"*/
/*eslint-env node*/
//import logMessage from './js/logger'

import './css/style.css';
// Log message to console
//logMessage('A very warm welcome to Expack!')
// Needed for Hot Module Replacement
if(typeof(module.hot) !== 'undefined') {
  module.hot.accept() // eslint-disable-line no-undef  
}



  
import React from "react";
import ReactDOM from "react-dom";
import App from "./js/components/App";

ReactDOM.render(<App />, document.getElementById("root"));