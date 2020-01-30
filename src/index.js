import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
// import { Router } from 'react-router';
// import {createHashHistory} from 'history';


import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import {ParallaxProvider} from 'react-scroll-parallax';

// const hashHistory = createHashHistory({ basename: process.env.PUBLIC_URL });

ReactDOM.render(
    <Router>
        {/*<ParallaxProvider>*/}
            <App/>
        {/*</ParallaxProvider>*/}
    </Router>,
    document.getElementById('container')
);
serviceWorker.unregister();
