import React from 'react';
import styled from 'styled-components';
import HeaderMobileBurger from './HeaderMobileBurger';

const Nav = styled.nav`
    z-index: 999;
    position: fixed;
    width: 100%;
    height: 44px;

    background: rgb(50, 50, 50);
    display: flex;
    justify-content: space-between;

    .logo {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .logo a {
        color: #f9f9f9;
        font-size: 14px;
        text-decoration: none;
    }
`
 
const HeaderMobile = () => {
  return (
    <Nav>
      <div className="logo">
        <a href="/"><h2>JIMMY HWANG</h2></a>
      </div>
      <HeaderMobileBurger />
    </Nav>
  )
}

export default HeaderMobile;