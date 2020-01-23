import React from "react";
import {HashLink as Link} from "react-router-hash-link";
import styled from "styled-components";


function Header() {

  const Header = styled.header`
        display: flex;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100px;
        /* border-bottom: 1px solid gray; */
        background-color: #fff;
        z-index: 100;
    `;
  const Wrapper = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 10px 20px;
    `;
  const PageTitle = styled.div`
        display: flex;
        align-items: center;
    `;
  const Title = styled.p`
        font-size: 2.5rem;
        font-weight: 900;
        letter-spacing: -1px;
        line-height: 90%;
        font-family: 'Circe Extra Bold', sans-serif;

        transition: all 0.5s ease;
        &:hover {
          transition: all 0.3s ease;
          transform: translateX(5px);
        }
        &:hover > :last-child {
          color: red;
          transition: all 0.2s ease;
        }
    `;

  const NavItem = styled.p`
        font-size: 1.7rem;
        font-weight: 700;
        font-family: 'Circe Bold', sans-serif;
        
        transition: all 0.5s ease;
        &:hover {
          color: mediumpurple;
          transition: all 0.3s ease;
          transform: translateX(-5px);
        }
  `;
  // const NavigationBar = styled.div`
  //       width: 35px;
  //       height: 35px;
  //       background: black;
  //   `;
  const FirstName = styled.span`

    `;
  const LastName = styled.span`
      position: relative;
      left: 12px;
    `;

  return (
      <Header>
        <Wrapper>
          <PageTitle>
            <Link to='/'>
              <Title>
                <FirstName>dmitry</FirstName>
                <br/>
                <LastName>bessonov</LastName>
              </Title>
            </Link>
          </PageTitle>

          <Link to='/about'>
            <NavItem>about / contact</NavItem>
          </Link>

          {/*<NavigationBar/>*/}
        </Wrapper>
      </Header>
  );
}

export default Header;
