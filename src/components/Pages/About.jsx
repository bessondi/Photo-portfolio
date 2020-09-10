import React from "react";
import styled from "styled-components";

import Img from '../../img/me.jpg'
import instagram from '../../img/icons/instagram.svg'
import telegram from '../../img/icons/telegram.svg'
import facebook from '../../img/icons/facebook.svg'
import github from '../../img/icons/github.svg'


function About() {

  const Wrapper = styled.div`
    width: 100%;
    max-width: 1600px;
    max-height: 100%;
    margin: 200px auto 0;
    
    @media screen and (max-width: 992px) {
      margin: 100px auto 50px;
    }
  `;
  const Grid = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-rows:  1fr auto;
    grid-template-columns: auto 400px 500px auto;
    grid-template-areas:
      ". photo description ."
      ". . social .";
      
    @media screen and (max-width: 992px) {
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      margin: 0 auto;
      padding: 0 20px;
      min-height: 800px;
      max-width: 500px;
    }
    @media screen and (max-width: 576px) {
      grid-template-rows:  repeat(3, auto);
      grid-template-columns: repeat(3, auto);
      grid-template-areas:
        ". photo ."
        ". description ."
        ". social .";
    }
  `;
  const Image = styled.img`
    grid-area: photo;
    margin: auto;
    display: block;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    max-width: 350px;
    max-height: 350px;
    border-radius: 50%;
    animation-duration: 1s;
    animation-name: showPic;
    
    @media screen and (max-width: 992px) {
      max-width: 280px;
      max-height: 280px;
      margin-bottom: 30px;
    }
  `;
  const Description = styled.p`
    grid-area: description;
    animation-duration: 1s;
    animation-name: showPic;
    text-align: left;
    
    @media screen and (max-width: 992px) {
      text-align: center;
    }
  `;
  const Mail = styled.a`
    color: mediumpurple;
    font-weight: bold;
    transition: all 0.3s ease;    
    
    &:hover {
      color: #5F23BC;
      transition: all 0.3s ease;    
    }
  `;
  const SocialMedia = styled.div`
    grid-area: social;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin-top: -70px;
    margin-left: -15px;
    
    @media screen and (max-width: 992px) {
      justify-content: center;
      margin: 40px 0 0;
    }
  `;
  const Icon = styled.img`
    display: block;
    width: 40px;
    height: 40px;
    margin: 0 15px;
    transition: all 0.3s ease;  
    
    &:hover {
      filter: invert(18%) sepia(89%) saturate(2896%) hue-rotate(258deg) brightness(83%) contrast(103%);
      transform: scale(1.1);
      transition: all 0.3s ease;  
    }
  `;

  return (
    <Wrapper>
      <Grid>

        <Image src={Img} alt="About"/>

        <Description>
          Dmitry Bessonov is a Russian commercial photographer, designer and frontend developer.<br/><br/>
          Dmitry's work illustrates his passion for the person as an individual in conjunction with his emotions,
          desire, and lifelong experience.<br/><br/>
          Based in Russia, St. Petersburg / worldwide available.<br/><br/>
          Dmitry accessible for commercial and editorial assignments and can be contacted via email <Mail
          href="mailto:dmitrybessonov@icloud.com">dmitrybessonov@icloud.com</Mail>
        </Description>

        <SocialMedia>
          <a href='https://www.instagram.com/bessondi'><Icon src={instagram} alt='instagram'/></a>
          <a href='https://t.me/bessondi'><Icon src={telegram} alt='telegram'/></a>
          <a href='https://www.facebook.com/bessondi'><Icon src={facebook} alt='facebook'/></a>
          <a href='https://github.com/bessondi'><Icon src={github} alt='github'/></a>
        </SocialMedia>

      </Grid>
    </Wrapper>
  );
}

export default About;