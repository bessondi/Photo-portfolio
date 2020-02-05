import React from "react";
// import {HashLink as Link} from "react-router-hash-link";
import styled from "styled-components";
// import LazyLoad from 'react-lazy-load';
// import s from "./MainPage.module.css";
import {ContentData} from "../ContentData";

import ImagesGrid from '../ViewerGrid/ImagesGrid';


// const LazyImage = React.lazy(() => import('./LazyImage'));

// class MainPage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       // images: ContentData,
//     };
//   }
//
//   render() {

function MainPage() {

    const {
      beautyForMainPage,
      productForMainPage,
      portraitsForMainPage,
      modelsForMainPage
    } = ContentData;

    const Wrapper = styled.main`
      position: absolute;
      bottom: 0;
      max-height: calc(100vh - 100px);
      width: 100%;
      overflow: hidden;
      @media screen and (max-width: 576px) {
        max-height: calc(100vh - 80px);
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
            <ImagesGrid slide="slideUp" duration="100s" content={beautyForMainPage}/>
            <ImagesGrid slide="slideDown" duration="130s" content={productForMainPage}/>
            <ImagesGrid slide="slideUp" duration="150s" content={portraitsForMainPage}/>
            <ImagesGrid slide="slideDown" duration="90s" content={modelsForMainPage}/>
          </FourColumns>
      );
    };

    return (
        <Wrapper>
            <BrickColumns/>
        </Wrapper>
    );
  }
// }

export default MainPage;
