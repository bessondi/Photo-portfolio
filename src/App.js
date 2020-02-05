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
