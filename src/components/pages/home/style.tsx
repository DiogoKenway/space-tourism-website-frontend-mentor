import styled from 'styled-components';
import imgDesktop from '../../../assets/home/background-home-desktop.jpg';
import imgTablet from '../../../assets/home/background-home-tablet.jpg';
import imgMobile from '../../../assets/home/background-home-mobile.jpg';

const BgContent = styled.div`
    background: url(${imgDesktop}) center center no-repeat;
    background-size: cover;
    width: 100vw;
    min-height: 100vh;
    transition: all ease .5s;
    // background-color: #0B0D19;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    box-shadow: 5px 5px 5px 15px #fff;

    @media(max-width: 950px) {
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

const WrapperHome = styled.section`
    max-width: 1660px;
    margin: 0 auto;
    display: flex;
    gap: 30px;
    align-items: flex-end;
    justify-content: space-around;
    height: 80vh;
    // border: solid 1px #f1f2;
    `
    
    const InfoHome = styled.div`
    gap: 3rem;
    max-width: 50%;
    color: #FFF;
    transform: translate(-70px, -40px);
    // border: solid 1px #f1f2;

    h1 {
        font-family: 'Bellefair', serif;
        font-size: 180px;
        font-weight: 400;
        line-height: 172px;
        text-transform: uppercase;
        margin-bottom: 40px;
    }

    p {
        max-width: 550px;
        font-size: 1.4rem;
        line-height: 40px;
        font-weight: 400;
        font-family: 'Barlow';
        color: #D0D6F9;
    }
`

const BtnExplore = styled.div`
    // border: solid 1px #F124ac;
    width: 18vw;
    height: 18vw;
    border-radius: 100%;
    background-color: #FFF;
    transform: translate(35%, -40px);
    position: relative;

    a {
        display: block;
        color: #000;
        position: absolute;
        top: 47%;
        left: 17%;
        text-align: center;
        text-transform: uppercase;
        font-family: 'Bellefair';
        font-style: normal;
        font-weight: 400;
        font-size: clamp(2.4vw, 1.8rem, 2.8rem);
        line-height: 37px;
        letter-spacing: 3px;
    }
`
export { BgContent, WrapperHome, InfoHome, BtnExplore }