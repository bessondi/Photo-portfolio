import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import s from "./Header.module.css";
import NavSideBar from "./NavMenu/NavSideBar";


function Header() {
  const randomColor = function getRandomColor() {
    let characters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += characters[getRandomNumber(0, 15)];
    }
    return color;
  };

  function getRandomNumber(low, high) {
    return Math.floor(Math.random() * (high - low + 1)) + low;
  }

  const Word = styled.ul`
    display: flex;
    flex-flow: row nowrap;
  `;
  const Letter = styled.li`
    transition: all 2.5s ease;
    &:hover {
      transition: all 0.2s ease;
      transform: scale(1.3);
      color: ${randomColor};
    }

    @media screen and (max-width: 992px) {
      &:hover {
        color: #333;
        transform: none;
      }
    }
  `;

  const Header = styled.header`
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background-color: #fff;
    z-index: 5;
    @media screen and (max-width: 576px) {
      height: 70px;
    }
  `;

  const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px 20px;
    max-width: 1560px;
    margin: 0 auto;
    @media screen and (max-width: 576px) {
      padding: 10px;
    }
  `;

  const PageTitle = styled.div`
    display: flex;
    align-items: center;
  `;

  const Title = styled.div`
    font-size: 2.5rem;
    line-height: 90%;
    font-family: "Circe Extra Bold", sans-serif;
    transform: scale(1);
    transition: transform 1s ease;

    & > :last-child {
      position: relative;
      left: 12px;
    }
    
    &:hover {
      transform: scale(1.05);
      transition: transform 0.5s ease;
    }

    @media screen and (max-width: 576px) {
      font-size: 2rem;
    }
    //@media screen and (max-width: 992px) {
    //  &:hover {
    //    transform: scale(1);
    //  }
    //}
  `;

  const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    width: 700px;
    margin-right: -25px;
    @media screen and (max-width: 992px) {
      display: none;
    }
    @media screen and (min-width: 1200px) {
      width: 800px;
    }
  `;

  const NavItem = styled.span`
    display: inline-block;
    font-size: 1.5rem;
    font-family: "Circe Bold", sans-serif;
    color: #858585;
    transform: scale(1);
    transition: transform 1s ease;

    &:hover {
      transition: transform 0.5s ease;
      transform: scale(1.1);
    }

    @media screen and (max-width: 1200px) {
      font-size: 1.5rem;
    }
    @media screen and (min-width: 1200px) {
      font-size: 1.8rem;
    }
  `;

  return (
    <Header>
      <Wrapper>

        <PageTitle>
          <Link to="/">
            <Title>
              <Word>
                <Letter>d</Letter>
                <Letter>m</Letter>
                <Letter>i</Letter>
                <Letter>t</Letter>
                <Letter>r</Letter>
                <Letter>y</Letter>
              </Word>
              <Word>
                <Letter>b</Letter>
                <Letter>e</Letter>
                <Letter>s</Letter>
                <Letter>s</Letter>
                <Letter>o</Letter>
                <Letter>n</Letter>
                <Letter>o</Letter>
                <Letter>v</Letter>
              </Word>
            </Title>
          </Link>
        </PageTitle>

        <NavSideBar/>

        <Nav>
          <NavLink to="/beauty" activeClassName={s.activeLink}>
            <NavItem>
              <Word>
                <Letter>b</Letter>
                <Letter>e</Letter>
                <Letter>a</Letter>
                <Letter>u</Letter>
                <Letter>t</Letter>
                <Letter>y</Letter>
              </Word>
            </NavItem>
          </NavLink>

          <NavLink to="/product-photography" activeClassName={s.activeLink}>
            <NavItem>
              <Word>
                <Letter>p</Letter>
                <Letter>r</Letter>
                <Letter>o</Letter>
                <Letter>d</Letter>
                <Letter>u</Letter>
                <Letter>c</Letter>
                <Letter>t</Letter>
              </Word>
            </NavItem>
          </NavLink>

          <NavLink to="/portraits" activeClassName={s.activeLink}>
            <NavItem>
              <Word>
                <Letter>p</Letter>
                <Letter>o</Letter>
                <Letter>r</Letter>
                <Letter>t</Letter>
                <Letter>r</Letter>
                <Letter>a</Letter>
                <Letter>i</Letter>
                <Letter>t</Letter>
              </Word>
            </NavItem>
          </NavLink>

          <NavLink to="/models-tests" activeClassName={s.activeLink}>
            <NavItem>
              <Word>
                <Letter>m</Letter>
                <Letter>o</Letter>
                <Letter>d</Letter>
                <Letter>e</Letter>
                <Letter>l</Letter>
                <Letter>s</Letter>
                <Letter>&nbsp;</Letter>
                <Letter>t</Letter>
                <Letter>e</Letter>
                <Letter>s</Letter>
                <Letter>t</Letter>
                <Letter>s</Letter>
              </Word>
            </NavItem>
          </NavLink>

          <NavLink to="/about" activeClassName={s.activeLink}>
            <NavItem>
              <Word>
                <Letter>a</Letter>
                <Letter>b</Letter>
                <Letter>o</Letter>
                <Letter>u</Letter>
                <Letter>t</Letter>
              </Word>
            </NavItem>
          </NavLink>
        </Nav>
      </Wrapper>
    </Header>
  );
}

export default Header;
