import React from "react";
import styled from "styled-components";
import Column from "./Column";

// import Vertical from "../img/vertical.jpg";
// import Horizontal from "../img/horizontal.jpg";

// import {ContentData} from './ContentData'
// import { Parallax } from 'react-scroll-parallax';
import ParallaxImageRender from "./ParallaxImage";

import {ContentData} from './ContentData';


// class Main extends Component {
//   constructor(props) {
//       super(props)
//       this.state = {
//           // slider: SliderData.slides[0],
//       }
//   }
//   render() {
//       return(
//         <React.Fragment>
//         </React.Fragment>
//       )
//   }
// }


function Main(props) {
  
  const {Images} = ContentData;

  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    //align-content: center;
    align-items: center;
    //justify-content: center;
    overflow: hidden;
  `;

  // const Main = styled.section`
  //     display: grid;
  //     justify-items: center;
  //     grid-template-columns: 300px 300px 300px;
  //     grid-template-rows: 1fr;
  //     //gap: 32px;
  //     /* height: 500px; */
  //     //margin: 0 auto;
  // `;

  const Main = styled.main`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    width: 90%;
    margin: 500px auto 0;
    height: 1500px;
  `;

  // const Image = styled.img`
  //   display: block;
  //   background-image: url(${props.img});
  //   background-position: center;
  //   background-repeat: no-repeat;
  //   background-size: cover;
  //   //position: relative;
  //
  //   margin: 0 auto;
  //   border: 1px solid yellowgreen;
  //
  //   max-width:100%;
  //   height: 500px;
  //   width: 250px;
  //   //object-fit: contain;
  //
  //
  //      //background-position: center;
  //      //background-repeat: no-repeat;
  //      //background-size: cover;
  //      //max-width: 100%;
  //      //max-height: 100%;
  //      //margin-bottom: 32px;
  // `;
  // const ParallaxImage = () => (
  //     <Parallax className="custom-class" y={[-50, 50]} tagOuter="figure">
  //         <Image />
  //     </Parallax>
  // );
  // const ParallaxImage2 = () => (
  //     <Parallax className="custom-class" y={[50, 100]} tagOuter="figure">
  //         <Image />
  //     </Parallax>
  // );

  return (
    <Wrapper>
      <Main>
        <ParallaxImageRender image={props.vertical} portrait="true" />
        <ParallaxImageRender image={props.horizontal} landscape="true" />
        <ParallaxImageRender image={props.horizontal} box="true" />
        {/*<ParallaxImage/>*/}
        {/*<ParallaxImage2/>*/}
        {/*<Column imgVert={Vertical} imgHoriz={Horizontal} />*/}
        {/*<Column imgVert={Vertical} imgHoriz={Horizontal} />*/}
        {/*<Column imgVert={Vertical} imgHoriz={Horizontal} />*/}
        {/*<Column imgVert={Vertical} imgHoriz={Horizontal} />*/}
      </Main>
    </Wrapper>
  );
}

export default Main;
