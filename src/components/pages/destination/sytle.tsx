import styled from "styled-components";
import imgDesktop from '../../../assets/destination/background-destination-desktop.jpg';
import imgTablet from '../../../assets/destination/background-destination-tablet.jpg';
import imgMobile from '../../../assets/destination/background-destination-mobile.jpg';

const Container = styled.div`
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

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75vw;
    min-height: 75vh;
    margin: 0 auto;
`

const TitleImg = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: start;
    width: 50%;
    padding: 1rem;

    h2 {
        color: #FFF;
        font-family: Barlow Condensed, sans-serif;
        font-weight: 500;
        font-size: 2vw;
        padding: .5rem;

        span {
            padding-right: .5rem;
            color: rgb(117, 89, 89);
        }
    }

    @keyframes rotate {
        from {
            tranform: rotate(0);
        }

        to {
            transform: rotate(360deg)
        }
    }

    img {
        width: 90%;
        padding: 2rem;
        animation: rotate 30s infinite linear;
    }
`

const WrapperSlider = styled.div`
    display: inline-block;
    width: 40%;
    padding: 2rem;
    margin-top: -2rem;
    color: #FFF;

`

const HeaderSlider = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    button {
        display: block;
        padding: .5rem;
        background-color: transparent;
        border: none;
        cursor: pointer;
        font-family: Barlow Condensed, sans-serif;
        font-weight: 300;
        font-size: 1.2vw;
        color: rgba(255, 255, 255, .8);
    }
`

export { Container, Content, TitleImg, WrapperSlider, HeaderSlider };