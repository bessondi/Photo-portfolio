import React from "react";
import {Route, Switch} from 'react-router-dom';
import {BrowserRouter as Router} from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./components/pages/MainPage";
import About from "./components/pages/About";
import Page404 from "./components/pages/Page404";

import ViewerGrid from "./components/ViewerGrid/ViewerGrid";
// import GridRender from "./components/pages/Collections";

import {
  BeautySlider,
  ProductSlider,
  PortraitSlider,
  ModelsSlider
} from "./components/pages/Collections";


export default function App() {
  return (
      <div className="app">
        <Header/>
        <Switch>
          <Route path='/' exact component={MainPage}/>

          {/* <Route path='/beauty' component={ViewerGrid}/>
          <Route path='/product-photography' component={ViewerGrid}/>
          <Route path='/portraits' component={ViewerGrid}/>
          <Route path='/models-tests' component={ViewerGrid}/> */}

          <Route path='/beauty' component={BeautySlider}/>
          <Route path='/product-photography' component={ProductSlider}/>
          <Route path='/portraits' component={PortraitSlider}/>
          <Route path='/models-tests' component={ModelsSlider}/>

          <Route path='/beauty-slider' component={BeautySlider}/>
          <Route path='/product-photography-slider' component={ProductSlider}/>
          <Route path='/portraits-slider' component={PortraitSlider}/>
          <Route path='/models-tests-slider' component={ModelsSlider}/>

          {/*<Route path={'/beauty-slider'} //-' + props.num (props)*/}
                 {/*render={(routeProps) => (<GridRender {...routeProps} contentBeauty count={props.num} />)}*/}
          {/*/>*/}
          {/*<Route path='/product-photography-slider'*/}
                 {/*render={(routeProps) => (<GridRender {...routeProps} contentProduct count='3' />)}*/}
          {/*/>*/}
          {/*<Route path='/portraits-slider'*/}
                 {/*render={(routeProps) => (<GridRender {...routeProps} contentPortrait count='4' />)}*/}
          {/*/>*/}
          {/*<Route path='/models-tests-slider'*/}
                 {/*render={(routeProps) => (<GridRender {...routeProps} contentModels count='5' />)}*/}
          {/*/>*/}

          <Route path='/about' component={About}/>
          <Route component={Page404}/>
        </Switch>
        <Footer/>
      </div>
  );
}

// import Main from "./components/Main";

// function OldApp() {
//   const Wrapper = styled.div`
//     //display: flex;
//     height: 1000px;
//   `;
//
//   // const Intro = styled.div`
//   //     //display: grid;
//   //     width: 100%;
//   //     //justify-items: stretch;
//   //     //justify-content: space-around;
//   //     //align-content: space-around;
//   //     //grid-template-columns: 1fr 1fr 1fr;
//   //     //grid-template-rows: auto;
//   //     //gap: 32px;
//   //     height: 100vh;
//   // `;
//
//   const First = styled.h1`
//     display: flex;
//     width: 100%;
//     height: 200px;
//     justify-content: center;
//     margin: 200px auto;
//   `;
//   const Second = styled.h2`
//     display: flex;
//     width: 100%;
//     height: 200px;
//     justify-content: center;
//     margin: 250px auto;
//   `;
//
//   return (
//     <Wrapper>
//
//     {/* <AppRouter/> */}
//
//       <Header />
//       {/*<Intro/>*/}
//
//       <First>
//         Non anim eu culpa non Lorem ut elit non proident elit Lorem irure.
//       </First>
//
//       <Main vertical={Vertical} horizontal={Horizontal} />
//       <Main vertical={Vertical} horizontal={Horizontal} />
//
//       <Second>
//         Cillum minim excepteur qui est officia occaecat adipisicing nisi.
//       </Second>
//
//
//       <Footer />
//     </Wrapper>
//   );
// }


// {
//   /*<header className="App-header">*/
// }
// {
//   /*<img src={logo} className="App-logo" alt="logo"/>*/
// }
// {
//   /*<p>*/
// }
// {
//   /*Edit <code>src/App.js</code> and save to reload.*/
// }
// {
//   /*</p>*/
// }
// {
//   /*<a*/
// }
// {
//   /*className="App-link"*/
// }
// {
//   /*href="https://reactjs.org"*/
// }
// {
//   /*target="_blank"*/
// }
// {
//   /*rel="noopener noreferrer"*/
// }
// {
//   /*>*/
// }
// {
//   /*Learn React*/
// }
// {
//   /*</a>*/
// }
// {
//   /*</header>*/
// }
