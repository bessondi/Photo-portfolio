import React, {Component} from "react";
// import {HashLink as Link} from "react-router-hash-link";
import styled, {keyframes} from "styled-components";
// import LazyLoad from 'react-lazy-load';
// import s from "./MainPage.module.css";
import {ContentData} from "../ContentData";

// import ImagesGrid from '../ViewerGrid/ImagesGrid';
import ImagesGridWaterfall from "../ViewerGrid/ImagesGridWaterfall";


// const LazyImage = React.lazy(() => import('./LazyImage'));

class MainPageWaterfall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      isAnimation: false
    };
  }

  componentDidMount() {
    this.setState({
      isShow: !this.state.isShow
    });

    this.setState({
      isAnimation: !this.state.isAnimation
    })
  }



  render() {

// function MainPageWaterfall() {

  const {
    beautyForMainPage,
    productForMainPage,
    portraitsForMainPage,
    modelsForMainPage
  } = ContentData;

  const Wrapper = styled.div`
      position: absolute;
      bottom: 0;
      max-height: calc(100vh - 100px);
      width: 100%;
      overflow: hidden;
      @media screen and (max-width: 576px) {
        max-height: calc(100vh - 70px);
      }
    `;

  const BrickColumns = () => {

    const FourColumns = styled.div`
        display: grid;
        grid-template-columns: 1fr auto auto auto auto 1fr;
        grid-template-rows: auto;

        //flex-flow: row nowrap;
        //justify-content: space-around;
        //padding: 0 10px;
        max-width: 100%;
        margin: 0 auto;
        //width: 1000px;

        @media screen and (max-width: 576px) {
          //padding: 0;
        }
      `;

    const slideUp = keyframes`
        0% {
           transform: translateY(0%);
       }
         50% {
           transform: translateY(-25);
       }
         100% {
           transform: translateY(-50%);
       }
      `;

    const slideDown = keyframes`
        0% {
           transform: translateY(-50%);   
       }
         50% {
           transform: translateY(-25);
       }
         100% {
           transform: translateY(0);
       }
      `;

      let SlideDown = this.state.isAnimation ? slideDown : null;
      let SlideUp = this.state.isAnimation ? slideUp : null;

      return (
        <FourColumns>
          <ImagesGridWaterfall slide={SlideUp} duration="100s" content={beautyForMainPage}/>
          <ImagesGridWaterfall slide={SlideDown} duration="130s" content={productForMainPage}/>
          <ImagesGridWaterfall slide={SlideUp} duration="150s" content={portraitsForMainPage}/>
          <ImagesGridWaterfall slide={SlideDown} duration="90s" content={modelsForMainPage}/>
        </FourColumns>
      );
  };

  // if (this.state.isShow) {
  //   return (
  //       <Wrapper>
  //         <BrickColumns/>
  //       </Wrapper>
  //   );
  // } else {
  //   return null
  // }

  return (
      <Wrapper>
        <BrickColumns/>
      </Wrapper>
  );
}
}

export default MainPageWaterfall;
