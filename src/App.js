import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./components/Pages/MainPage";
import Viewer from "./components/Viewer/Viewer";
import About from "./components/Pages/About";
import Page404 from "./components/Pages/Page404";
import "./App.css";
import { ContentData } from "./components/ContentData";

export default function App() {
  const [isUseWebp, setWebpUsable] = useState(null);

  useEffect(() => {
    let elem = document.createElement('canvas');
    if (!!(elem.getContext && elem.getContext('2d'))) {
      setWebpUsable(elem.toDataURL('image/webp').indexOf('data:image/webp') === 0);
    } else {
      setWebpUsable(false);
    }
  }, []);

  return (
    <div className="app">
      <Header/>
      <Switch>
        <Route path='/' exact render={() => <MainPage canUseWebp={isUseWebp}/>}/>
        <Route
          path='/beauty'
          render={() =>
            <Viewer
              pathForClose='/beauty'
              content={ContentData.beautyForGridSection}
              component={ContentData.beautyFullSize}
            />}
        />
        <Route
          path='/product-photography'
          render={() =>
            <Viewer
              pathForClose='/product-photography'
              content={ContentData.productForGridSection}
              component={ContentData.productFullSize}
            />}
        />
        <Route
          path='/portraits'
          render={() =>
            <Viewer
              pathForClose='/portraits'
              content={ContentData.portraitsForGridSection}
              component={ContentData.portraitFullSize}
            />}
        />
        <Route
          path='/models-tests'
          render={() =>
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
