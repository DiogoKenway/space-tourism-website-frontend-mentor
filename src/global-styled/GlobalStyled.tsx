import { createGlobalStyle } from "styled-components";



const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        transition: all ease .5s;
    }
    
    body {
        width: 100vw;
        height: 100vh;
        font-family: 'Barlow Condensed', sans-serif;
        overflow-x: hidden;

        &::-webkit-scrollbar {
            width: 8px;
            height: 8px;
            display: block;
        }

        &::-webkit-scrollbar-thumb {
            background-color: #ccc;
            border-radius: 4px;

            &:hover {
                background-color: #b3b3b3;
                box-shadow: 0 0 2px 1px rgba(0, 0, 0, .2);
            }

            &:active {
                background-color: #999;
            }
        }
 
        &::-webkit-scrollbar-track {
            background-color: #e1e1e1;
            border-radius: 4px;

            &:hover,
            &:active {
                background-color: #d4d4d4;
            }
        }

        

    }
    
    a {
        text-decoration: none;
        transition: ease .5s;
        color: rgba(255, 255, 255, .7);
    }
    
    ul, li {
        list-style: none;
    }

    .glide__bullet--active {
        border-bottom: 2px solid #FFF !important;
    }
`

export default GlobalStyle;