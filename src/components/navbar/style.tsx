import styled from 'styled-components';

const WrapperHeader = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    @media(max-width: 450px) {
        justify-content: space-between;
        padding-right: 2rem;
    }
`

// const NavbarOutside = styled.div`
//     display: block;
//     position: fixed;
//     width: 100%;
//     min-height: 100vh;
//     background-color: 0, 0, 0, .3;
//     top: 0;
//     z-index: 3;
//     border: solid 1px red;
// `

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

const MenuMobile = styled.div`
    display: none;   
    
    @media (max-width: 768px) {
        display: none;
    }

    @media (max-width: 450px) {
        display: flex ;
        justify-content: flex-end;
        align-items: center;
        margin-top: 1.5rem;
        z-index: 6;
        cursor: pointer;
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
    position: relative;

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
        padding-top: 5rem;
        margin: 0;
        z-index: 5;
        transition: all .5s ease;
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
        position: relative;
        cursor: pointer;
        padding: .5rem;
        position: absolute;
        top: 2rem;
        right: 30px;
    }
`




export {
    WrapperHeader,
    Logo,
    MenuMobile,
    NavigationBar,
    CloseIcon
    // NavbarOutside
};