import styled, { createGlobalStyle } from "styled-components";
import imgDesktop from '../assets/home/background-home-desktop.jpg';
import imgTablet from '../assets/home/background-home-tablet.jpg';
import imgMobile from '../assets/home/background-home-mobile.jpg';



const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        transition: ease .5s;
    }

    img {
        max-width: 100%;
    }
    
    body, html {
        width: 100vw;
        height: 100vh;
        font-family: 'Barlow Condensed', sans-serif;
    }
    
    a {
        text-decoration: none;
        transition: ease .5s;
        color: rgba(255, 255, 255, .7);
    }
    
    ul, li {
        list-style: none;
    }
`

const Content = styled.div` 
    background: url(${imgDesktop}) center top no-repeat;
    background-size: cover;
    color: #FFF;
    width: 100vw;
    height: 100vh;

    @media(max-width: 768px) {
        background: url(${imgTablet}) no-repeat;
    }

    @media(max-width: 375px) {
        background: url(${imgMobile}) no-repeat;
        max-height: 667px;
        border: solid 1px red;
    }
`

export { GlobalStyle, Content };