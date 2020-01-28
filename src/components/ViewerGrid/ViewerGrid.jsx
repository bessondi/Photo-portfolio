import React from "react";
import styled from "styled-components";
import GridLine from "../pages/ImagesGrid";

import { ContentData } from "../ContentData";

const Viewer = () => {
  const {
    firstColumnImages,
    // secondColumnImages,
    // thirdColumnImages,
    // fourthColumnImages
  } = ContentData;

  const Wrapper = styled.div`
      display: flex;
      //flex-direction: column;
      //justify-content: center;
      //align-items: center;
      margin: 100px auto 0;
      //width: 100%;
      /* height: calc(100vh - 150px); */
  `;

  //     const FourColumns = styled.div`
  //     display: flex;
  //     flex-direction: row;
  //     flex-wrap: nowrap;
  //     justify-content: space-around;
  //     padding: 0 10px;
  //   `;

  return (
    <Wrapper>
      <GridLine 
        direction='row' 
        wrap='wrap' 
        width='auto'
        maxWidth='auto'
        maxHeight='300px'
        radius='0'
        margin='10px'
        padding='0'
        justify='center'
        hoverNone
        add=''
        path='/beauty-slider'
        line={firstColumnImages}
      />
    </Wrapper>
  );
};

export default Viewer;
