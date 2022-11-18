import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        background-image: url("../assets/home/background-home-desktop.jpg");
        color: #FFF;
        width: 100vw;
        height: 100vh;
        font-family: 'Barlow Condensed', sans-serif;
    }

    a {
        text-decoration: none;
        color: #21b9d5;
        transition: all ease .5s;

        &:hover {
            color: #017aa2;
        }
    }

    ul, li {
        list-style: none;
    }
`

export default GlobalStyle;