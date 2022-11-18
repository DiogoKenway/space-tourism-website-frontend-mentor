import styled from 'styled-components';

const WrapperHeader = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const Logo = styled.div`
    width: 50%;
    padding-left: 2rem;
    margin-top: 2rem;
    position: relative;

    img {
        width: 5%;
    }

    hr {
        width: 90%;
        position: absolute;
        border: none;
        border-bottom: 1px solid #80808080;
        top: 20%;
        right: -4%;
        z-index: 5;
    }
`

const BarsNavBar = styled.div`
    display: none;
`

const NavigationBar = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 65%;
    background-color: #806d6d33;
    backdrop-filter: blur(10px);
    margin-top: 2rem;
`

const CloseIcon = styled.div`
    display: none;
`




export { WrapperHeader, Logo, BarsNavBar, NavigationBar, CloseIcon };