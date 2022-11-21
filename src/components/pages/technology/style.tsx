import styled from "styled-components";
import imgDesktop from '../../../assets/technology/background-technology-desktop.jpg';
import imgTablet from '../../../assets/technology/background-technology-tablet.jpg';
import imgMobile from '../../../assets/technology/background-technology-mobile.jpg';

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

const Loading = styled.div`
    position: absolute;
    width: 20%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    img {
        margin: auto;
        animation: rotate 7s;
    }

    @keyframes appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
    }

    @keyframes appearBottom {
        from {
          margin-top: 100vh;
        }
        to {
          margin-top: 0;
        }
    }
      
    @keyframes rotate {
        from {
          -webkit-transform: rotate(0deg);
        }
        to {
          -webkit-transform: rotate(360deg);
        }
    }
`

export { Container };
