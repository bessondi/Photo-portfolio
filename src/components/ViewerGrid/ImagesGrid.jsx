import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import styled from "styled-components";

import s from "../Pages/MainPage.module.css";

class ImagesGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentViewImage: this.props.content[0]
    };
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  render() {
    // console.log(this.state.currentViewImage);

    // const ImagesGrid = props => {

    const images = this.props.content;
    // path = this.props.content;

    const ImagesFlow = images.map((img, id) => {
      const VerticalGrid = () => {
        const Image = styled.img`
          display: block;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          width: ${this.props.width || "100%"};
          max-width: ${this.props.maxWidth || `500px`};
          max-height: ${this.props.maxHeight || `700px`};
          margin: ${this.props.margin || `10px 0`};
          border-radius: ${this.props.radius || `10px`};
          animation-duration: 1s;
          animation-name: showPic;
        `;
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
          ${this.props.hoverNone ? `display: none;` : null};
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
        // const Plug = styled.div`
        //   background-color: #ebebeb;
        //   width: 300px;
        //   height: 400px;
        //   margin: 10px 0;
        //   border-radius: 10px;
        //   animation-duration: 1s;
        //   animation-name: showPic;
        // `;
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
    flex-direction: ${this.props.direction || `column`};
    padding: 0 10px;
    justify-content: ${this.props.justify || `flex-start`};
    flex-wrap: ${this.props.wrap || `nowrap`};
    /* ${this.props.animation ||
      `animation: ${this.props.duration} linear 0.01s ${this.props.slide} infinite`}; */
    animation-name: ${this.props.slide};
    animation-duration: ${this.props.duration};
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: normal;
    animation-fill-mode: none;
    animation-play-state: running;
    /* ${this.props.add}; */
  `;

    return <Line className={`${s.column}`}>{ImagesFlow}</Line>;
  }
}

export default ImagesGrid;
