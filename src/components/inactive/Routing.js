import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Footer from '../Footer';
import Main from "./Main";
import Header from '../Header';



function AppRouter() {
    return (
        <div className="app">
            <Header/>

            <Switch>
                <Route exact path='/' component={Main} />
                {/* <Route path='/slider' component={Slider} /> */}
            </Switch>

            <Footer/>
        </div>
    );
}

export default AppRouter;