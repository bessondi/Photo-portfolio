import React from "react";
import styled from "styled-components";
import Img from '../../img/jpg/me.jpg'
import ImgWebp from '../../img/webp/me.webp'
import instagram from '../../img/icons/instagram.svg'
import telegram from '../../img/icons/telegram.svg'
import facebook from '../../img/icons/facebook.svg'
import { analyticsHelper } from '../analyticsHelper/analyticsHelper'


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
    grid-template-rows: 1fr;
    grid-template-columns: auto 400px 500px auto;
    grid-template-areas:
      ". photo description .";
      
    @media screen and (max-width: 992px) {
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      margin: 0 auto;
      padding: 0 20px;
      max-width: 500px;
    }
    @media screen and (max-width: 576px) {
      grid-template-rows:  repeat(2, auto);
      grid-template-columns: repeat(3, auto);
      grid-template-areas:
        ". photo ."
        ". description .";
    }
  `;
  const Picture = styled.picture`
    grid-area: photo;
  `;
  const Image = styled.img`
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
    margin-top: 100px;
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
    
    &:hover {
      filter: invert(18%) sepia(89%) saturate(2896%) hue-rotate(258deg);
      transform: scale(1.1);
    }
  `;

  function socialItemClick (category, action, label) {
    analyticsHelper(category, action, label);
  }

  return (
    <Wrapper>
      <Grid>

        <Picture>
          <source srcSet={ImgWebp} type="image/webp"/>
          <Image src={Img} alt="About"/>
        </Picture>

        <Description>
          Dmitry Bessonov is a photographer and digital artist. Dmitry's work illustrates his passion for the person as an individual in conjunction with his emotions,
          desire, and lifelong experience.
          <br/>
          Based in Russia, St. Petersburg / worldwide available.
          <br/><br/>
          Dmitry accessible for commercial and editorial assignments and can be contacted via email <Mail
          href="mailto:dmitrybessonov@icloud.com" onClick={() => socialItemClick('about_page', 'mail_click', 'email')}>dmitrybessonov@icloud.com</Mail>

          <SocialMedia>
            <a href='https://www.instagram.com/bessondi' onClick={() => socialItemClick('about_page', 'social_click', 'instagram')}><Icon src={instagram} alt='instagram'/></a>
            <a href='https://t.me/bessondi' onClick={() => socialItemClick('about_page', 'social_click', 'telegram')}><Icon src={telegram} alt='telegram'/></a>
            <a href='https://www.facebook.com/bessondi' onClick={() => socialItemClick('about_page', 'social_click', 'facebook')}><Icon src={facebook} alt='facebook'/></a>
          </SocialMedia>
        </Description>

      </Grid>
    </Wrapper>
  );
}

export default About;
