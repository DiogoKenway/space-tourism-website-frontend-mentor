import styled from "styled-components";
import imgDesktop from '../../../assets/crew/background-crew-desktop.jpg';
import imgTablet from '../../../assets/crew/background-crew-tablet.jpg';
import imgMobile from '../../../assets/crew/background-crew-mobile.jpg';


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

const GlideWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    margin: auto;
    // border: solid 1px #c030c3;
`

const Container = styled.div`
    width: 80%;
    height: 85%;
    display: flex;
    justify-content: space-between;
    align-items: end;
    margin: auto;
    // border: solid 1px #c1c1c1;   
`

const SectionInfo = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 2rem 0;
    height: 100%;
    color: #FFF;
    align-self: center;
`

const RoleInformation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 40%;
    width: 40%;
    gap: 1.5rem;

    // border: solid 2px #11aa20;

    h2 {
        text-transform: uppercase;
        color: #D0D6F9;
        font-size: clamp(3vw, 3rem, 2rem);
        letter-spacing: 8px;
        text-align: start;
        font-weight: 200;
        margin-bottom: 2rem; 

        strong {
            margin-right: 1rem;
            font-weight: 100;
        }
    }

    h3 {
        font-family: 'Bellefair';
        font-style: normal;
        font-weight: 400;
        font-size: clamp(2.5vw, 3rem, 2rem);
        line-height: 37px;
        opacity: .5;
    }
    
    h1 {
        font-family: 'Bellefair';
        font-style: normal;
        font-weight: 400;
        font-size: clamp(4vw, 3rem, 2rem);
        line-height: 64px;
        text-transform: uppercase;
    }

    p {
        font-family: 'Barlow';
        font-weight: 400;
        font-size: 18px;
        line-height: 32px;
        color: #D0D6F9;
        white-space: normal;
    }
`

const NavigationPoints = styled.div`
    width: 200px;
    display: flex;
    gap: 1.25rem;
`

const Dot = styled.span`
    width: 15px;
    height: 15px;
    border-radius: 100%;
    background-color: #363841;
    cursor: pointer;
`


const SectionPhoto = styled.section`
    // border: solid 1px red;
    // padding: 0 8rem;

    transform: translateX(-250px);
    img {
        width: 135%;
    }    
`

export { 
    BgImage,
    GlideWrapper,
    Container,
    SectionInfo,
    RoleInformation,
    NavigationPoints,
    Dot,
    SectionPhoto
};