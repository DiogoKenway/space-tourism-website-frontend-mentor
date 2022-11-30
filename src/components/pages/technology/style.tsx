import styled from "styled-components";
import imgDesktop from '../../../assets/technology/background-technology-desktop.jpg';
import imgTablet from '../../../assets/technology/background-technology-tablet.jpg';
import imgMobile from '../../../assets/technology/background-technology-mobile.jpg';

const BgImage = styled.div`
    background: url(${imgDesktop}) center no-repeat;
    background-size: cover;
    background-attachment: fixed;
    width: 100vw;
    height: 100vh;
    transition: all ease .5s;
    background-color: #0B0D19;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    @media(max-width: 768px) {
        background: url(${imgTablet}) center top no-repeat;
        background-size: cover;
        background-attachment: fixed;
    }

    @media(max-width: 450px) {
        background: url(${imgMobile}) center top no-repeat;
        background-size: cover;
        background-attachment: fixed;
    }
`



export { BgImage };
