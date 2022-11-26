import styled from "styled-components";
import imgDesktop from '../../../assets/destination/background-destination-desktop.jpg';
import imgTablet from '../../../assets/destination/background-destination-tablet.jpg';
import imgMobile from '../../../assets/destination/background-destination-mobile.jpg';

const BgImage = styled.div`
    background: url(${imgDesktop}) center top no-repeat;
    background-size: cover;
    background-attachment: fixed;
    width: 100vw;
    height: 100vh;
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

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    gap: 4rem;
    margin: auto;
    height: 85vh;
    // border: solid 1px #af22;

    @media(max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 60%;
        height: 100%;
        gap: 0;
    }
`

const TitleImg = styled.div`    
    display: flex;
    align-items: flex-end;
    width: 70%;
    padding: 1rem;
    // border: solid 1px #af22ff;

    @keyframes rotate {
        from {
            tranform: rotate(0);
        }

        to {
            transform: rotate(360deg)
        }
    }

    img {
        width: 100%;
        padding: 2rem;
        animation: rotate 30s infinite linear;
    }

    @media(max-width: 768px) {
        width: 100%;
        padding: 2rem;
        justify-content: center;

        img {
            width: 90%;
        }
    }

    @media(max-width: 450px) {
        img {
            width: 220px;
        }
    }
`

const WrapperSlider = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    height: 60%;
    color: #FFF;

    @media(max-width: 768px) {
        width: 100vw;
        align-items: center;
        text-align: center;
    }
`

const HeaderSlider = styled.div`
    display: flex;
    gap: 1rem;

    button {
        display: block;
        background-color: transparent;
        text-transform: uppercase;
        letter-spacing: 7px;
        border: none;
        cursor: pointer;
        font-family: Barlow Condensed, sans-serif;
        font-weight: 300;
        font-size: clamp(1.2vw, 1.5rem, 1rem);
        color: rgba(255, 255, 255, .8);
        transition: all ease .5s;


        &:hover {
            border-bottom: 2px solid rgba(255, 255, 255, .3);
        }
    }

    @media(max-width: 450px) {
        gap: .6rem;
    }
`

const ContentSlider = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4rem;
    width: 70%;
    height: 100%;
    // border: 1px solid #ffaacc;

    @media(max-width: 768px) {
        gap: 3rem;
    }

    @media(max-width: 450px) {
        width: 95%
    }
`

const TitleSlider = styled.div`
    h1 {
        font-family: 'Bellefair';
        font-style: normal;
        font-weight: 400;
        font-size: 6.5vw;
        text-transform: uppercase;
    }

    p {
        font-family: 'Barlow';
        font-style: normal;
        font-weight: 400;
        font-size: 1.25rem;
        line-height: 32px;
        color: #D0D6F9;
        padding-bottom: 3rem;        
    }

    hr {
        border: none;
        border-bottom: solid 1px #383B4B;
    }

    @media(max-width: 768px) {
        h1 {
            font-size: 5rem;
            margin: 1rem 0;
        }

        p {
            font-size: 1rem;
        }
    }

`

const InfoSlider = styled.div`
    display: flex;
    gap: 80px;

    span {
        display: inline-block;         
        font-family: 'Bellefair';
        font-style: normal;
        font-weight: 400;
        font-size: 1.9rem;
        line-height: 32px;
        text-transform: uppercase;
    }

    @media(max-width: 768px) {
        justify-content: space-around;
        gap: 0;
    }

    @media(max-width: 450px) {
        flex-direction: column;
        gap: 3rem;
    }

`

export {
    Container,
    BgImage,
    TitleImg,
    WrapperSlider,
    HeaderSlider,
    ContentSlider,
    InfoSlider,
    TitleSlider
};