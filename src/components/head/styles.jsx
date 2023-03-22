import styled from "styled-components";

import logo from '../../assets/images/logo.png'
// import logo from '../../assets/images/ml.png'

// import logo from '../../assets/images/logo_reduzido.png'
// import logo from '../../assets/images/G.svg'

const HeaderWrapper = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #18122B;

    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    z-index: 5;
`

const Header = styled.div`
    // height: 60px;
    width: 90%;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

const Logo = styled.div`
    width: 105px;
    height: 60px;

    background-image: url(${logo});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
` 

const HeadItem = styled.div`
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    font-size: 1.5em;
    color: gray;

    transition: 0.1s ease all;

    &:active {
        transform: scale(1.1) rotate(3deg);
    }
`

const Menu = styled.div`
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    font-size: 1.7em;
    color: rgba(220, 234, 216);

    transition: 0.1s ease all;

    position: absolute;
    left: 30px;

    &:active {
        transform: scale(1.1) rotate(3deg);
    }
`

const Support = styled.a`
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    font-size: 1.7em;
    color: rgba(220, 234, 216);

    transition: 0.1s ease all;

    position: absolute;
    right: 30px;

    &:active {
        transform: scale(1.1) rotate(3deg);
    }
`

export {
    HeaderWrapper,
    Header,
    Logo,
    HeadItem,
    Menu, Support
};