import React from "react";
import {HashLink as Link} from "react-router-hash-link";
import styled from "styled-components";
// import LazyLoad from 'react-lazy-load';
// import s from "./MainPage.module.css";
import {ContentData} from "../ContentData";

import GridLine from './ImagesGrid';


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
      firstColumnImages,
      secondColumnImages,
      thirdColumnImages,
      fourthColumnImages
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
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-around;
        padding: 0 10px;
      `;

      // const GridColumn = props => {
      //   const images = props.column;

      //   const ImagesFlow = images.map((img, id) => {
      //     const VerticalGrid = () => {
      //       const Image = styled.img`
      //       display: block;
      //       background-position: center;
      //       background-repeat: no-repeat;
      //       background-size: cover;
      //       /* background-color: #ebebeb; */
      //       width: 100%;
      //       max-width: 500px;
      //       max-height: 700px;
      //       margin: 10px 0;
      //       border-radius: 10px;
      //       animation-duration: 1s;
      //       animation-name: showPic;
      //     `;
      //       const ImageDescription = styled.div`
      //       position: absolute;
      //       top: 0;
      //       left: 0;
      //       display: flex;
      //       flex-direction: column;
      //       justify-content: center;
      //       align-items: center;
      //       text-align: center;
      //       background-color: #fff;
      //       width: 100%;
      //       height: 100%;
      //       transition: all 0.3s ease-in-out;
      //       opacity: 0;
      //       @media screen and (max-width: 992px) {
      //         display: none;
      //       }
      //     `;
      //       const Separator = styled.div`
      //       width: 30px;
      //       height: 1px;
      //       margin: 10px 0;
      //       border-bottom: 1px solid black;
            
      //       @media screen and (max-width: 992px) {
      //         display: none;
      //       }
      //     `;
      //       // const Plug = styled.div`
      //       //   background-color: #ebebeb;
      //       //   width: 300px;
      //       //   height: 400px;
      //       //   margin: 10px 0;
      //       //   border-radius: 10px;
      //       //   animation-duration: 1s;
      //       //   animation-name: showPic;
      //       // `;
        
      //       return (
      //           <Link className={s.overlay} to={images[id].path}>
      //             <ImageDescription className={s.overlayDescription}>
      //               <h2>{images[id].description}</h2>
      //               <Separator/>
      //               <p>view</p>
      //             </ImageDescription>
      //             <Image src={images[id].picture} alt="Image"/>

      //             {/* <Suspense fallback={ <Plug/> }>
      //               <LazyLoad>
      //                 <Image src={images[id].picture} alt="Image"/> 
      //               </LazyLoad>
      //             </Suspense> */}
      //           </Link>
      //       );
      //     };
      //     return (
      //         <VerticalGrid key={id} />
      //     );
      //   });

      //   const Column = styled.div`
      //     display: flex;
      //     flex-flow: column nowrap;
      //     padding: 0 10px;
      //     justify-content: flex-start;
      //     animation: ${props.duration} linear 0.01s ${props.slide} infinite;
      //   `;
      //   return (
      //       <Column className={`${s.column}`}>
      //         {ImagesFlow}
      //       </Column>
      //   )
      // };

      return (
          <FourColumns>
            <GridLine slide="slideUp" duration="100s" line={firstColumnImages}/>
            <GridLine slide="slideDown" duration="130s" line={secondColumnImages}/>
            <GridLine slide="slideUp" duration="150s" line={thirdColumnImages}/>
            <GridLine slide="slideDown" duration="90s" line={fourthColumnImages}/>
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
