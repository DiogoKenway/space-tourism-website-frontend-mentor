import styled from 'styled-components';

const WrapperHeader = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    // &:nth-child(1) .navbar-outside {
    //     display: block;
    //     position: fixed;
    //     width: 100%;
    //     min-height: 100vh;
    //     background-color: 0, 0, 0, .3;
    //     top: 0;
    //     z-index: 3;
    // }
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

    @media (max-width: 768px) {
        width: 30%;

        img {
            width: 20%;
        }

        hr {
            display: none;
        }
    }

    @media (max-width: 450px) {
        padding-left: .5rem;

        img {
            width: 12vw;
        }
    }
`

const BarsNavBar = styled.div`

    @media (max-width: 450px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        margin-top: 2rem;
        z-index: 5;
    }
`


const NavigationBar = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 65%;
    background-color: #806d6d33;
    backdrop-filter: blur(10px);
    margin-top: 2rem;

    li a {
        display: block;
        margin: 0 1rem;
        padding: 2rem 0;
        border-bottom: solid 2px transparent;
        font-size: 1vw;

        strong {
            color: white;
        }

        &:hover {
            border-bottom: 2px solid #FFF;
        }
    }

    @media(max-width: 768px) {
        width: 70%;
        
        li a {
            font-size: 2.1vw;

            strong {
                display: none;
            }
        }
        
    }

    @media (max-width: 450px) {
        width: 60%;
        position: fixed;
        min-height: 100vh;
        top: 0;
        right: 0;
        flex-direction: column;
        justify-content: flex-start;
        margin: 0;
        padding: 0;
        z-index: 5;
        transition: all .3s ease;
        backdrop-filter: blur(25px);

        li {
            display: block;
            width: 100%;

            a {
                display: inline-block;
                width: 90%;
                font-size: 4vw;
                padding: 1rem;
                border-bottom: none;

                strong {
                    display: inline-block;
                    padding-right: .5rem;

                }

                &:hover {
                    border-bottom: none;
                }
            }
        }
    }
    
`

const CloseIcon = styled.div`
    display: none;

    @media (max-width: 450px) {
        display: block;
        width: 100%;
        padding: 3rem 0;
        position: relative;

        img {
            position: absolute;
            top: 20%;
            right: 10%;
        }

    }
`




export { WrapperHeader, Logo, BarsNavBar, NavigationBar, CloseIcon };