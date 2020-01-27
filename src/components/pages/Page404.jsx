import React from "react";
import {HashLink as Link} from 'react-router-hash-link';
import styled from "styled-components";

const Page404 = () => {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 100px;
    width: 100%;
    height: calc(100vh - 150px);
  `;
  const Text = styled.h1`
    color: #888;
    margin: 0 auto;
    text-align: center;
    animation-duration: 1s;
    animation-name: showPic;  
  `;
  const BackToHome = styled.h2`
    color: #444;
    margin: 0 auto;
    animation-duration: 1s;
    animation-name: showPic;  
  `;

  return (
    <Wrapper>
      <Text>This page will appear soon..</Text> 
      <br/>
      <Link to='/'><BackToHome>Back to the main page</BackToHome></Link>
    </Wrapper>
  );
};

export default Page404;
