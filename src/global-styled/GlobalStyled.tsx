import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        font-family: Helvetica;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #060911;
        color: #FFF;
        width: 100vw;
        height: 100vh;
        overflow-x: hidden;
    }

    a {
        text-decoration: none;
        color: #21b9d5;
        transition: all ease .5s;

        &:hover {
            color: #017aa2;
        }
    }
`

export default GlobalStyle;