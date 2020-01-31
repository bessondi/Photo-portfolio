import React from "react";
import styled from "styled-components";
import ImagesGrid from "../pages/ImagesGrid";

import {ContentData} from "../ContentData";
import ImageViewer from "../ImageViewer/ImageViewer";


const ViewerGridBeauty = () => {

  const {firstColumnImages, beautyFullSize} = ContentData;

  const Wrapper = styled.div`
      display: flex;
      margin: 100px auto 0;
  `;

  return (
      <Wrapper>
        <ImageViewer
            collection={beautyFullSize}
            closeImagePath='/beauty'
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
            content={firstColumnImages}
        />
      </Wrapper>
  );
};

export default ViewerGridBeauty;
