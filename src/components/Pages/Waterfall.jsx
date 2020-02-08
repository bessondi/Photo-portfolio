import React from "react";
// import {HashLink as Link} from "react-router-hash-link";
import styled from "styled-components";
// import LazyLoad from 'react-lazy-load';
// import s from "./MainPage.module.css";
import {ContentData} from "../ContentData";

import ImagesGrid from '../ViewerGrid/ImagesGrid';
import ImagesGridWaterfall from "../ViewerGrid/ImagesGridWaterfall";


// const LazyImage = React.lazy(() => import('./LazyImage'));

function Waterfall() {

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
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        padding: 0 10px;
      `;

      return (
          <FourColumns>
            <ImagesGridWaterfall slide="slideUp" duration="100s" content={beautyForMainPage}/>
            <ImagesGridWaterfall slide="slideDown" duration="130s" content={productForMainPage}/>
            <ImagesGridWaterfall slide="slideUp" duration="150s" content={portraitsForMainPage}/>
            <ImagesGridWaterfall slide="slideDown" duration="90s" content={modelsForMainPage}/>
          </FourColumns>
      );
    };

  return (
      <Wrapper>
          <BrickColumns/>
      </Wrapper>
  );
}

export default Waterfall;
