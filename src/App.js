import React from "react";
import {Route, Switch} from 'react-router-dom';
// import {BrowserRouter as Router} from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./components/Pages/MainPage";

import About from "./components/Pages/About";
import Page404 from "./components/Pages/Page404";

import ViewerGridBeauty from "./components/ViewerGrid/ViewerGridBeauty";
import ViewerGridProduct from "./components/ViewerGrid/ViewerGridProduct";
import ViewerGridPortrait from "./components/ViewerGrid/ViewerGridPortrait";
import ViewerGridModels from "./components/ViewerGrid/ViewerGridModels";


export default function App() {
  return (
      <div className="app">
        <Header/>
        <Switch>
          <Route path='/' exact component={MainPage}/>

          <Route path='/beauty' component={ViewerGridBeauty}/>
          <Route path='/product-photography' component={ViewerGridProduct}/>
          <Route path='/portraits' component={ViewerGridPortrait}/>
          <Route path='/models-tests' component={ViewerGridModels}/>

          <Route path='/about' component={About}/>
          <Route component={Page404}/>
        </Switch>
        <Footer/>
      </div>
  );
}
