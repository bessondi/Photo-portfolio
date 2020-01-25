import React from "react";
import {Route, Switch} from 'react-router-dom';
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./components/mainPage/MainPage";
import About from "./components/about/About";
import Page404 from "./components/Page404";


function App() {
  return (
      <div className="app">
          <Header/>
          <Switch>
              <Route path='/' exact component={MainPage} />
              <Route path='/about' component={About} />

              {/* <Route path='/beauty' component={Beauty} />
              <Route path='/product' component={Product} />
              <Route path='/portrait' component={Portrait} />
              <Route path='/models' component={Models} /> */}

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

export default App;


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
