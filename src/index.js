import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Router } from 'react-router';
import {createHashHistory} from 'history';
const hashHistory = createHashHistory({ basename: process.env.PUBLIC_URL });
// import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router history={hashHistory}>
    <App/>
  </Router>,
  document.getElementById('container')
);
serviceWorker.unregister();
