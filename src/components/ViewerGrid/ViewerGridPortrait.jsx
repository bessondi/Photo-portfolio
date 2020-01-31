import React from "react";
import styled from "styled-components";
import ImagesGrid from "../pages/ImagesGrid";

import { ContentData } from "../ContentData";


const ViewerGridPortrait = (props) => {
  // console.log(props);

  const {
    thirdColumnImages,
  } = ContentData;

  // console.log(beautyViewerImages);

  const Wrapper = styled.div`
      display: flex;
      margin: 100px auto 0;
  `;

  return (
    <Wrapper>
      <ImagesGrid
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
        content={thirdColumnImages}
        // path='/beauty-slider'
      />
    </Wrapper>
  );
};

export default ViewerGridPortrait;
