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

const WrapperTecnology = styled.main`
    width: 100vw;
    height: 100vh;
`

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-content: center;
    width: 105%;
    height: 100%;
    border: solid 1px #882221;
    margin: 0 auto;
`

const NavigationPoints = styled.div`
    display: flex;
    flex-direction: column;

    span {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80px;
        width: 80px;
        border-radius: 100%;
        cursor: pointer;
    }
`

const Informations = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;

    h1 {

    }

    p {
        white-space: normal;
    }
`

export { BgImage, WrapperTecnology, Container, NavigationPoints, Informations };
