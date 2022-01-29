import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Router } from 'react-router';
import {createHashHistory} from 'history';
import ReactGA from 'react-ga'

// import { BrowserRouter as Router } from "react-router-dom";

ReactGA.initialize('UA-000000000-1');
const hashHistory = createHashHistory({ basename: process.env.PUBLIC_URL });
hashHistory.listen(location => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
})

ReactDOM.render(
  <Router history={hashHistory}>
    <App/>
  </Router>,
  document.getElementById('container')
);
serviceWorker.unregister();
