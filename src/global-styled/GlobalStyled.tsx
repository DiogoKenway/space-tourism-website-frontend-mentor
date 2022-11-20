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
        overflow: hidden;
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

export default GlobalStyle;