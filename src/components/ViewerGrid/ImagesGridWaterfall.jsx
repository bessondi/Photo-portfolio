import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import styled from "styled-components";
// import LazyLoad from 'react-lazy-load';

import s from "../Pages/MainPage.module.css";

// class ImagesGridWaterfall extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       // currentViewImage: this.props.content[0]
//     };
//   }
//
//   componentDidMount = () => {
//     window.scrollTo(0, 0);
//   };
//
//   render() {
    // console.log(this.state.currentViewImage);

    const ImagesGridWaterfall = props => {

    const images = props.content;
    // path = this.props.content;

    const ImagesFlow = images.map((img, id) => {

      const VerticalGrid = () => {

        const Image = styled.img`
          display: block;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          width: 100%;
          max-width: 500px;
          max-height: 700px;
          margin: 10px 0;
          border-radius: 10px;
          animation-duration: 1s;
          animation-name: showPic;
          @media screen and (max-width: 576px) {
            margin: 5px 0;
          }
        `;

        // const Plug = styled.picture`
        //   display: grid;
        //   background-color: olive;
        //   //width: 100%;
        //   //height: 100%;
        //
        //   //min-width: 100px;
        //   //min-height: 200px;
        //   //display: flex;
        //   //max-height: 700px;
        //   //overflow: hidden;
        //
        //   margin: 10px 0;
        //   border-radius: 10px;
        //   animation-duration: 1.5s;
        //   animation-name: showPic;
        // `;

        // const Image = styled.div`
        //   display: block;
        //   //position: relative;
        //   background-image: url(${images[id].picture});
        //   background-color: darkgray;
        //   background-position: center;
        //   background-repeat: no-repeat;
        //   background-size: cover;
        //   width: 100%;
        //   height: 100%;
        //   min-width: 500px;
        //   min-height: 700px;
        //   margin: 10px auto;
        //   border-radius: 10px;
        //   animation-duration: 1s;
        //   animation-name: showPic;
        //   @media screen and (max-width: 576px) {
        //     margin: 5px 0;
        //   }
        // `;

        const ImageDescription = styled.div`
          position: absolute;
          top: 0;
          left: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          background-color: #fff;
          width: 100%;
          height: 100%;
          transition: all 0.3s ease-in-out;
          opacity: 0;
          @media screen and (max-width: 992px) {
            display: none;
          }
        `;
        const Text = styled.div`
          ${props.hoverNone ? `display: none;` : null};
        `;
        const Separator = styled.div`
          width: 30px;
          height: 1px;
          margin: 10px 0;
          border-bottom: 1px solid black;

          @media screen and (max-width: 992px) {
            display: none;
          }
        `;

        // const Wrapper = styled.div`
        //   display: flex;
        //   //padding: 0 10px;
        //   align-items: center;
        // `;

        return (
          <Link
            className={s.overlay}
            // to={path ?
            //     path[id].path :
            //     `${images[id].path}`
            // }

            // to={path[id].path}
            to={images[id].path}
          >
            <ImageDescription className={s.overlayDescription}>
              <Text>
                <h2>{images[id].description}</h2>
                <Separator />
                <p>view</p>
              </Text>
            </ImageDescription>
            <Image src={images[id].picture} alt="Image" />

            {/* <Suspense fallback={ <Plug/> }>
                <LazyLoad>
                  <Image src={images[id].picture} alt="Image"/>
                </LazyLoad>
              </Suspense> */}
          </Link>
        );
      };
      return <VerticalGrid key={id} />;
    });



    const Line = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 10px;
    justify-content: flex-start;
    flex-wrap: nowrap;
    width: 100%;
    max-width: 2000px;
    margin: 0 auto;

    animation-name: ${props.slide};
    animation-duration: ${props.duration};
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: normal;
    animation-fill-mode: none;
    animation-play-state: running;

    @media screen and (max-width: 576px) {
      animation: none;
    }
  `;

    return <Line className={`${s.column}`}>{ImagesFlow}</Line>;
  };
// }

export default ImagesGridWaterfall;
