import styled, { createGlobalStyle } from "styled-components";
import imgDesktop from '../assets/home/background-home-desktop.jpg';



const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        transition: ease .5s;
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
    background: url(${imgDesktop}) center no-repeat;
    background-size: cover;
    color: #FFF;
    width: 100vw;
    height: 100vh;
`

export { GlobalStyle, Content };