import React from "react";
import styled from "styled-components";
import ImagesGrid from "./ImagesGrid";

import {ContentData} from "../ContentData";
import ImageViewer from "./ImageViewer";


const ViewerGridPortrait = () => {

  const {portraitsForGridSection, portraitFullSize} = ContentData;

  const Wrapper = styled.div`
    display: flex;
    margin: 100px auto 0;
    @media screen and (max-width: 576px) {
      margin: 70px auto 10px;
    }
  `;

  return (
      <Wrapper>
        <ImageViewer
            collection={portraitFullSize}
            closeImagePath='/portraits'
        />
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
            content={portraitsForGridSection}
        />
      </Wrapper>
  );
};

export default ViewerGridPortrait;
