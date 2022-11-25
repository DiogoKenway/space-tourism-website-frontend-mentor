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

const WrapperHome = styled.section`
    width: 90%;
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
        height: 95vh;
        gap: 8rem;
    }

    @media(max-width: 450px) {
        width: 100%;
        height: 95vh;
        justify-content: space-around;
        padding: 5rem;
    }
`
    
    const InfoHome = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FFF;
    // border: solid 1px #f23;
    
        span {
            text-transform: uppercase;
            margin-bottom: 3rem;
            color: #D0D6F9;
            font-size: clamp(2vw, 2rem, 1.5rem);
            letter-spacing: 8px;
            text-align: center;

            @media(max-width: 450px) {
                margin: 0;
            }
        }

    @media(max-width: 768px) {
        width: 70%;
    }

    @media(max-width: 450px) {
        width: 70%;
        height: 35vh;
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
            margin: 0rem;
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
        width: 60vw;
        height: 60vw;
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