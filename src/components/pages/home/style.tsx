import styled from 'styled-components';
import imgDesktop from '../../../assets/home/background-home-desktop.jpg';
import imgTablet from '../../../assets/home/background-home-tablet.jpg';
import imgMobile from '../../../assets/home/background-home-mobile.jpg';

const BgContent = styled.div`
    background: url(${imgDesktop}) center top no-repeat;
    background-size: cover;
    background-attachment: fixed;
    width: 100vw;
    height: 120vh;
    min-height: 100vh;
    transition: all ease .5s;
    background-color: rgb(34, 31, 31);
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

const HomeWrapper = styled.div({
  display: "flex"
})

const TitleHome = styled.div`
    width: 50%;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    p, h1 {
        width: 50%;
        color: lavender;
    }

    p {
        margin-bottom: 15%;
        font-family: Barlow, sans-sarif;
        font-weight: lighter;
        font-size: 1vw;
        color: rgba(230, 230, 250, .6);
        line-height: 1.8;
    }
`

const Title = styled.div`
    color: lavender;
    font-weight: lighter;
    font-size: 1.7vw;
    color: rgba(255, 255, 255, .85);
`

const ButtomExplore = styled.div`
    width: 50%;
    min-height: 80vh;
    position: relative;

    div {
        display: flex;
        align-items: flex-end;
        position: absolute;
        bottom: 20%;
        right: 40%;
        width: 20vw;
        height: 20vw;
        background-color: #FFF;
        padding: 2rem;
        border-radius: 100%;
        cursor: pointer;
        transition: all .5s;

        span {
            display: block;
            width: 100%;
        }
    }
`

const Subtitle = styled.span`
    display: block;
    font-weight: lighter;
    font-family: Bellefair, sans-sarif;
    font-size: 6vw;
    color: #FFF;
`





export { BgContent, TitleHome, ButtomExplore, HomeWrapper, Title, Subtitle };

