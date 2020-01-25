import React from "react";
import styled from "styled-components";

import Img from '../../img/me.jpg'
import instagram from '../../img/icons/instagram.svg'
import facebook from '../../img/icons/facebook.svg'
import telegram from '../../img/icons/telegram.svg'

function About() {

  const Wrapper = styled.div`
    max-width: 100%;
    max-height: 100%;
    margin-top: 120px;
    //background-color: #fafafa;
  `;
  const Grid = styled.div`
    display: grid;
    grid-gap: 30px;
    //grid-template-rows: auto 1fr 1fr auto auto;
    //grid-template-columns: auto 1fr 1fr auto;
    //grid-template-areas:
    //  ". . . ."
    //  ". photo form ."
    //  ". description . ."
    //  ". social . .";
    grid-template-rows:  repeat(3, auto);
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      ". photo ."
      ". description ."
      ". social .";
  `;
  const Image = styled.img`
    grid-area: photo;
    margin: auto;
    display: block;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    max-width: 250px;
    max-height: 250px;
    border-radius: 50%;
    animation-duration: 1s;
    animation-name: showPic;
  `;
  const Description = styled.p`
    grid-area: description;
    animation-duration: 1s;
    animation-name: showPic;
    
    text-align: center;
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
    justify-content: space-around;
    align-items: flex-start;
    height: 80px;
    width: 300px;
    margin: auto;
  `;
  const Icon = styled.img`
    display: block;
    width: 40px;
    height: 40px;
    
    transition: all 0.3s ease;  
    &:hover {
      transform: scale(1.1);
      transition: all 0.3s ease;  
    }
  `;
  return (
      <Wrapper>
        <Grid>
          <Image src={Img} alt="About"/>
          <Description>Dmitry Bessonov is a Russian commercial photographer and retoucher.<br/><br/>
            Dmitry's work illustrates his passion for the person as an individual in conjunction with his emotions,
            desire, and lifelong experience.<br/><br/>
            Based in Russia, St. Petersburg / worldwide available.<br/><br/>
            Dmitry accessible for commercial and editorial assignments and can be contacted via email <Mail
                href="mailto:dmitrybessonov@icloud.com">dmitrybessonov@icloud.com</Mail><br/>or use social media:
          </Description>

          <SocialMedia>
            <a href='https://www.instagram.com/bessondi'><Icon src={instagram} alt='instagram'/></a>
            <a href='https://www.facebook.com/bessondi'><Icon src={facebook} alt='facebook'/></a>
            <a href='https://t.me/bessondi'><Icon src={telegram} alt='telegram'/></a>
          </SocialMedia>

        </Grid>
      </Wrapper>
  );
}

export default About;