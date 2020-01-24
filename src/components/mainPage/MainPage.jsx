import React from "react";
import {HashLink as Link} from "react-router-hash-link";
import styled from "styled-components";

import s from "./MainPage.module.css";
import {ContentData} from "../ContentData";


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
    `;
    const BrickColumns = () => {
      const FourColumns = styled.div`
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-around;
        padding: 0 10px;
      `;
      const GridColumn = props => {
        const images = props.column;

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
          `;
            const Separator = styled.div`
            width: 30px;
            height: 1px;
            margin: 10px 0;
            border-bottom: 1px solid black;
          `;
            return (
                <Link className={s.overlay} to={images[id].path}>
                  <ImageDescription className={s.overlayDescription}>
                    <h2>{images[id].description}</h2>
                    <Separator/>
                    <p>view</p>
                  </ImageDescription>
                  <Image src={images[id].picture} alt="Image"/>
                  {/*<Suspense fallback={ <Box/> }>*/}
                  {/*<LazyImage src={images[id].picture} alt="Image"/>*/}
                  {/*</Suspense>*/}
                </Link>
            );
          };
          return (
              <VerticalGrid key={id} />
          );
        });

        const Column = styled.div`
          display: flex;
          flex-flow: column nowrap;
          padding: 0 10px;
          justify-content: flex-start;
          animation: ${props.slide} ${props.speed} linear infinite;
        `;
        return (
            <Column className={`${s.column}`}>
              {ImagesFlow}
            </Column>
        )
      };

      return (
          <FourColumns>
            <GridColumn slide="slideUp" speed="100s" column={firstColumnImages}/>
            <GridColumn slide="slideDown" speed="130s" column={secondColumnImages}/>
            <GridColumn slide="slideUp" speed="150s" column={thirdColumnImages}/>
            <GridColumn slide="slideDown" speed="90s" column={fourthColumnImages}/>
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
