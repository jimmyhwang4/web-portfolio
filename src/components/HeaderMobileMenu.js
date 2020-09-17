import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
    a {
        font-size: 36px;
        color: #fff;
        text-decoration: none;

        margin-top: 40px;
        margin-left: -80px;
    }

    a img {
        filter: invert(1);
    }

    margin-top: 42px;
    height: calc(100vh - 42px);
    width: 100%;
    z-index: 999;
    position: fixed;

    background-color: rgb(50, 50, 50);

    visibility: ${({ open }) => open ? 'visible' : 'hidden'};
    opacity: ${({ open }) => open ? '1' : '0'};

    transition: all 0.2s ease-in-out;

    display: flex;
    flex-direction: column;
    align-items: center;

    .mobileSocials {
        width: 120px;
        margin-top: 20px;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    
`;

const HeaderMobileMenu = ({ open }) => {
    return (
        <Ul open={open}>
            <br></br>
            <br></br>
            <a href="/">HOME</a>
            <a href="/projects">PROJECTS</a>
            <a href="/experience">EXPERIENCE</a>
            <a href="/Jeehun_Hwang_Resume.pdf" target="_blank">RESUME</a>

            <div className="mobileSocials">
                <a href="https://github.com/jimmyhwang4" target="_blank"><img src="/socials/github.png" width="44px" height="44px"></img></a>
                <a href="https://www.linkedin.com/in/jimmy-hwang-564958162/" target="_blank"><img src="/socials/linkedin.png" width="44px" height="44px"></img></a>
                <a href="mailto:jimmyhwang@nyu.edu"><img src="/socials/email.png" width="44px" height="44px"></img></a>
            </div>

        </Ul>
    )
}

export default HeaderMobileMenu;