import styled from "styled-components";
import imgDesktop from '../../../assets/crew/background-crew-desktop.jpg';
import imgTablet from '../../../assets/crew/background-crew-tablet.jpg';
import imgMobile from '../../../assets/crew/background-crew-mobile.jpg';


const Container = styled.div`
    background: url(${imgDesktop}) center top no-repeat;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    @media(max-width: 768px) {
        background: url(${imgTablet}) center top no-repeat;
    }

    @media(max-width: 375px) {
        background: url(${imgMobile}) center top no-repeat;
    }
`


export { Container };