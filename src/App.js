import React from "react";
import {Route, Switch} from 'react-router-dom';
// import {BrowserRouter as Router} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./components/Pages/MainPage";
import Viewer from "./components/Viewer/Viewer";
import About from "./components/Pages/About";
import Page404 from "./components/Pages/Page404";
import "./App.css";

import {ContentData} from "./components/ContentData";


export default function App() {
  return (
    <div className="app">
      <Header/>
      <Switch>
        <Route path='/' exact component={MainPage}/>
        <Route
          path='/beauty'
          render={ props =>
            <Viewer
              pathForClose='/beauty'
              content={ContentData.beautyForGridSection}
              component={ContentData.beautyFullSize}
            />}
        />
        <Route
          path='/product-photography'
          render={ props =>
            <Viewer
              pathForClose='/product-photography'
              content={ContentData.productForGridSection}
              component={ContentData.productFullSize}
            />}
        />
        <Route
          path='/portraits'
          render={ props =>
            <Viewer
              pathForClose='/portraits'
              content={ContentData.portraitsForGridSection}
              component={ContentData.portraitFullSize}
            />}
        />
        <Route
          path='/models-tests'
          render={ props =>
            <Viewer
              pathForClose='/models-tests'
              content={ContentData.modelsForGridSection}
              component={ContentData.modelsFullSize}
            />}
        />
        <Route path='/about' component={About}/>
        <Route component={Page404}/>
      </Switch>
      <Footer/>
    </div>
  );
}
