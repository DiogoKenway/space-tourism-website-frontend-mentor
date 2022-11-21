import styled from "styled-components";
import imgDesktop from '../../../assets/crew/background-crew-desktop.jpg';
import imgTablet from '../../../assets/crew/background-crew-tablet.jpg';
import imgMobile from '../../../assets/crew/background-crew-mobile.jpg';


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


export { Container };