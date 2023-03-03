import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import logo from '../../assets/images/logo.png'
import zodiac from '../../assets/images/zodiac.png'
// import bg_gif from '../../assets/images/home_bg.gif'

const Page = styled.div`
    height: 100vh;
    width: 100vw;

    display: flex;
    align-items: center;
    justify-content: center;

    color: white;
    font-weight: 700;
`

// const Logo = styled.div`
//     position: absolute;
//     top: 10px;
//     left: 10px;

//     background-image: url(${logo_png});
//     background-size: cover;
//     background-repeat: no-repeat;
//     background-position: center;

//     height: 80px;
//     width: 80px;

//     z-index: 2;
// `

const Area = styled.div`
    height: 400px;
    width: 310px;

    // min-height: 350px;
    // min-width: 300px;

    // width: 90%;
    // height: 50%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    z-index: 2;
`

const Text = styled.div`
    background-image: url(${logo});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    height: calc(4 * 40px);
    width: calc(4 * 70px);
`

const ButtonArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    height: 55%;
    width: 85%;
`

const ToggleButtonArea = styled.div`
    height: 25%;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
`

const BigButtonArea = styled.div`
    height: 60%;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    // font-family: 'Aicho', sans-serif;
`

const ToggleButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 45%;
    height: 60%;
    border: 3px solid white;
    border-radius: 100px;
    ${props => props.active && "background-color: white; color: black;"}

    transition: 0.5s ease all;
    &:active {
        transform: scale(1.02) rotate(1.5deg);
    }

    cursor: pointer;
`

const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 80%;
    height: 30%;
    border-radius: 5px;
    color: rgba(220, 234, 216);
    border: 3px solid rgba(220, 234, 216);

    box-shadow: 3px 3px 0 0 black, 6px 6px 0 0 rgba(220, 234, 216), 9px 9px 0 0 black; //, 10px 10px 0 0 white;

    transition: 0.3s ease all;
    &:active {
        transform: scale(1.1) rotate(3deg);
    }

    &:hover {
        box-shadow: 0 0 0 0 rgba(220, 234, 216), 0 0 0 0 black;
    }

    cursor: pointer;
`

const ButtonLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 90%;
    height: 35%;
    border-radius: 5px;
    color: rgba(220, 234, 216);

    border: 3px solid rgba(220, 234, 216);

    box-shadow: 3px 3px 0 0 black, 6px 6px 0 0 rgba(220, 234, 216), 9px 9px 0 0 black; //, 10px 10px 0 0 white;

    transition: 0.3s ease all;
    &:active {
        transform: scale(1.1) rotate(3deg);
    }

    &:hover {
        box-shadow: 0 0 0 0 white, 0 0 0 0 black;
    }

    cursor: pointer;

    text-decoration: none;
`

// const Clip = styled.div`
//     background: no-repeat center center;
//     background-size: 100%;
//     color: transparent;
//     -webkit-background-clip: text;
//     background-clip: text;
//     ${props => props.active && `background-image: url(${bg_gif});`}
// `

const Overlay = styled.div`
    height: 100vh;
    width: 100vw;

    position: fixed;
    top: 0;
    left: 0;

    background-color: rgba(0, 0, 0, 0.55);
    z-index:1;
`

const LoadContainer = styled.div`
    position: fixed;

    top: 0; 
    right: 0;
    height: 100vh;
    width: 100vw;

    background-color: rgba(255, 255, 255, 0.99);

    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 20;
`

// const LoadLogo = styled.div`
//     background-image: url(${logo_png_blck});
//     background-size: cover;
//     background-repeat: no-repeat;
//     background-position: center;

//     height: 125px;
//     width: 150px;

//     z-index: 21;
// `

const Lace = styled.div`
    height: 1em;
    width: 105vw;
    transform: rotate(-10deg);
    border: 2px solid black;
    background-color: red;
    overflow: hidden;

    display: flex;

    padding-top: 2px;
    padding-bottom: 5px;
`

const scroll = keyframes`
    100% {
        transform: translateX(100%);
    }
`

const ScrollText = styled.div`
    animation: ${scroll} 10000ms linear infinite;
    width: 100%;
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Zodiac = styled.div`
    background-image: url(${zodiac});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    height: calc(4 * 70px);
    width: calc(4 * 70px);

    position: fixed;
    right: -140px;
    top: -140px;

    z-index: 600;
    animation: ${rotate} 100s linear infinite;
`

export {
    Page,
    // Logo,
    Area,
    Text,
    ButtonArea,
    ToggleButtonArea,
    BigButtonArea,
    ToggleButton,
    Button, ButtonLink,
    // Clip,
    Overlay,
    LoadContainer, Lace, ScrollText,
    Zodiac
}