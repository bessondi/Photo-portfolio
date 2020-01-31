import React from "react";
import styled from "styled-components";
import ImagesGrid from "../pages/ImagesGrid";

import {ContentData} from "../ContentData";
import ImageViewer from "../ImageViewer/ImageViewer";


const ViewerGridModels = () => {

  const {fourthColumnImages, modelsFullSize} = ContentData;

  const Wrapper = styled.div`
      display: flex;
      margin: 100px auto 0;
  `;

  return (
      <Wrapper>
        <ImageViewer
            collection={modelsFullSize}
            closeImagePath='/models-tests'
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
            content={fourthColumnImages}
        />
      </Wrapper>
  );
};

export default ViewerGridModels;
