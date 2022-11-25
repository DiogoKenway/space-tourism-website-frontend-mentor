import styled from "styled-components";
import imgDesktop from '../../../assets/destination/background-destination-desktop.jpg';
import imgTablet from '../../../assets/destination/background-destination-tablet.jpg';
import imgMobile from '../../../assets/destination/background-destination-mobile.jpg';

const Container = styled.div`
    background: url(${imgDesktop}) center top no-repeat;
    background-size: cover;
    background-attachment: fixed;
    width: 100vw;
    height: 100vh;
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

const WrapperDestination = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 75%;
    margin: auto;
    height: 85vh;
    // border: solid 1px #af22;
`

const TitleImg = styled.div`    
    display: flex;
    // flex-direction: column;
    // justify-content: center;
    align-items: flex-end;
    width: 50%;
    padding: 1rem;


    @keyframes rotate {
        from {
            tranform: rotate(0);
        }

        to {
            transform: rotate(360deg)
        }
    }

    img {
        width: 80%;
        padding: 2rem;
        animation: rotate 30s infinite linear;
    }
`

const WrapperSlider = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    height: 80%;
    padding-top: 2rem;
    color: #FFF;
    // border: solid 1px #fa54aa;       

`

const HeaderSlider = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;

    button {
        display: block;
        padding: .5rem;
        background-color: transparent;
        text-transform: uppercase;
        letter-spacing: 9px;
        border: none;
        cursor: pointer;
        font-family: Barlow Condensed, sans-serif;
        font-weight: 300;
        font-size: 1.2vw;
        color: rgba(255, 255, 255, .8);
        transition: all ease .5s;


        &:hover {
            border-bottom: 2px solid rgba(255, 255, 255, .3);
        }
    }
`

const ContentSlider = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5rem;
    width: 65%;
    height: 76%;

    h1 {
        font-family: 'Bellefair';
        font-style: normal;
        font-weight: 400;
        font-size: 6.5rem;
        text-transform: uppercase;
    }

    p {
        font-family: 'Barlow';
        font-style: normal;
        font-weight: 400;
        font-size: 1.25rem;
        line-height: 32px;
        color: #D0D6F9;
        padding-bottom: 3.5rem;        
    }

    hr {
        width: 110%;
        border: none;

        border-bottom: solid 1px #383B4B;
    }

`

const InfoSlider = styled.div`
    display: flex;
    gap: 80px;

    span {
        display: inline-block;         
        font-family: 'Bellefair';
        font-style: normal;
        font-weight: 300;
        font-size: 2rem;
        line-height: 32px;
        text-transform: uppercase;
    }
`

export {
    Container,
    WrapperDestination,
    TitleImg,
    WrapperSlider,
    HeaderSlider,
    ContentSlider,
    InfoSlider
};