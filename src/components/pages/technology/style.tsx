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
    display: flex;
    align-items: center;
    width: 90%;
    height: 90%;
    gap: 4rem;
    // border: solid 1px #882221;
    margin: 0 auto;
`


const NavigationPoints = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    width: 40%;
    // flex: 2;
    justify-self: center;
    // border: solid 1px #112221;


    span {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 90px;
        width: 90px;
        border-radius: 100%;
        cursor: pointer;
        font-family: Bellefair;
        font-size: 2rem;
        font-weight: 400;
        line-height: 37px;
        letter-spacing: 2px;
        text-align: center;
        border: solid 1px #FFF;
        color: #FFF;
        
    }
`

const Informations = styled.div`
    display: flex;
    flex-direction: column;
    // border: solid #225577;
    gap: 1rem;
    width: 50%;

    h1 {
        font-family: Bellefair;
        font-size: 3.5rem;
        font-weight: 400;
        line-height: 4rem;
        letter-spacing: 0px;
        text-transform: uppercase;
        color: #FFF;
    }

    p {
        white-space: normal;
        font-family: Barlow;
        font-size: 18px;
        font-weight: 400;
        line-height: 32px;
        letter-spacing: 0px;
        // text-align: left;
        color: #D0D6F9;
        
    }
`

const ContainerImage = styled.section`
    width: 80%;
    // border: solid 1px #551121;

    img {
        width: 100%;
    }
`

export { BgImage,
    WrapperTecnology,
    Container,
    NavigationPoints,
    Informations,
    ContainerImage
};
