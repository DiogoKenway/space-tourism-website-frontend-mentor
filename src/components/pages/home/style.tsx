import styled from 'styled-components';
import imgDesktop from '../../../assets/home/background-home-desktop.jpg';
import imgTablet from '../../../assets/home/background-home-tablet.jpg';
import imgMobile from '../../../assets/home/background-home-mobile.jpg';

const BgContent = styled.div`
    background: url(${imgDesktop}) center center no-repeat;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    @media(max-width: 768px) {
        background: url(${imgTablet}) center center no-repeat;
        background-size: cover;
        background-attachment: fixed;
    }

    @media(max-width: 450px) {
        background: url(${imgMobile}) center center no-repeat;
        background-size: cover;
        background-attachment: fixed;
    }
`

const WrapperHome = styled.section`
    width: 85%;
    margin: 0 auto;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    height: 75vh;
    // border: solid 3px #f1f2;
    padding-bottom: 3rem;

    @media(max-width: 768px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100vw;
        gap: 2rem;
    }

    @media(max-width: 450px) {
        width: 100%;
        height: 95vh;
        justify-content: space-around;
        padding: 2rem;
        // border: solid 3px #f1f2;
    }
`

const InfoHome = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    padding: 0 3rem;
    align-items: center;
    color: #FFF;
    border: solid 1px #f23;

    span {
        text-transform: uppercase;
        margin-bottom: 1rem;
        color: #D0D6F9;
        font-size: clamp(1.5vw, 2rem, 1.5rem);
        letter-spacing: 8px;
        text-align: center;
    }

    h1 {
        font-family: 'Bellefair', serif;
        font-size: clamp(9vw, 13rem, 8rem);
        // font-size: 9vw;

        font-weight: 400;
        line-height: 172px;
        text-transform: uppercase;
        letter-spacing: 0px;
    }

    p {
        font-family: 'Barlow';
        font-size: 1.2rem;
        font-weight: 400;
        color: #D0D6F9;
        
        line-height: 28px;
        letter-spacing: 0px;

    }
    

    @media(max-width: 768px) {
        width: 60%;
        height: 50%;

        h1 {
            margin-bottom: .8rem; 
            font-size: 9.4rem;
        }

        p {
            text-align: center;
        }
    }


    @media(max-width: 450px) {
        width: 100%;
        height: 40%;


        span {
            margin: 0;
        }

        h1 {
            margin: 0rem;
            font-size: 80px;
        }

        p {
            font-size: 1rem;
            line-height: 28px;
            text-align: center;
            max-width: 400px;
        }
    }
`


const BtnExplore = styled.div`
    width: 275px;
    height: 275px;
    border-radius: 100%;
    background-color: #FFF;
    margin-right: 5%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width: 768px) {
        width: 30vw;
        height: 30vw;
        justify-self: start;
    }

    @media(max-width: 450px) {
        width: 200px;
        height: 200px;
    }

    &:hover {
        transform: scale(1.15);
        box-shadow: 5px 5px 120px #FFF;
    }

    a {
        display: block;
        color: #000;
        text-transform: uppercase;
        font-family: 'Bellefair';
        font-style: normal;
        font-weight: 400;
        font-size: clamp(2vw, 1.6rem, 2.8rem);
        line-height: 37px;
        letter-spacing: 3px;
    }
`
export { BgContent, WrapperHome, InfoHome, BtnExplore }