import styled from 'styled-components';
import imgDesktop from '../../../assets/home/background-home-desktop.jpg';
import imgTablet from '../../../assets/home/background-home-tablet.jpg';
import imgMobile from '../../../assets/home/background-home-mobile.jpg';

const BgContent = styled.div`
    background: url(${imgDesktop}) center center no-repeat;
    background-size: cover;
    width: 100vw;
    min-height: 120vh;
    transition: all ease .5s;
    background-color: #0B0D19;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    box-shadow: 5px 5px 5px 15px #fff;

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

const WrapperHome = styled.section`
    max-width: 1660px;
    margin: 0 auto;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    height: 80vh;
    // border: solid 3px #f1f2;

    @media(max-width: 768px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        gap: 9rem;
    }

    @media(max-width: 450px) {
        height: 95vh;
        justify-content: space-around;
        padding: 5rem;
    }
`
    
    const InfoHome = styled.div`
    width: 45%;
    display: flex;
    // height: 30%;
    flex-direction: column;
    align-items: center;
    color: #FFF;
    
    // border: solid 1px #f581f2;

    @media(max-width: 768px) {
        width: 70%;
    }

    h1 {
        font-family: 'Bellefair', serif;
        font-size: clamp(10vw, 15rem, 8rem);
        font-weight: 400;
        line-height: 172px;
        text-transform: uppercase;
        margin-bottom: 2rem;

        @media(max-width: 768px) {
            margin-bottom: .8rem;
            font-size: 9.4rem;
        }

        @media(max-width: 450px) {
            margin-bottom: 1rem;
            font-size: 80px;
        }
    }

    p {
        max-width: 590px;
        min-width: 330px;
        text-align: start;
        font-size: 1.5rem;
        line-height: 40px;
        font-weight: 400;
        font-family: 'Barlow';
        color: #D0D6F9;

        @media(max-width: 768px) {
            font-size: 1rem;
            line-height: 28px;
            text-align: center;
            max-width: 400px;
        }
    }
`


const BtnExplore = styled.div`
    width: 18vw;
    height: 18vw;
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
        width: 50vw;
        height: 50vw;
        justify-self: start;
    }

    &:hover {
        transform: scale(1.15);
        box-shadow: 5px 5px 120px #FFF;
    }

    a {
        display: block;
        color: #000;
        
       
        // text-align: center;
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