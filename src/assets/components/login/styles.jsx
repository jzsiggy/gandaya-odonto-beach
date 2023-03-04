import styled from 'styled-components';

import stars from '../../images/bg.jpg'

// import instagramRedirect from '../../images/insta_gif.gif'

const Container = styled.div`
    position: fixed;    
    top: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;

    background: linear-gradient(0deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3)), url(${stars});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    z-index: 70;
`

const Modal = styled.div`
    width: 80%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;


`

// const Logo = styled.div`
//     height: calc(162px * 0.7);
//     width: calc(273px * 0.7);

//     background-image: url(${logo});
//     background-size: cover;
//     background-repeat: no-repeat;
//     background-position: center;
// `

// const InstagramBrowserRedirectGif = styled.div`
//     height: calc(791px * 0.6);
//     width: calc(380px * 0.6);

//     background-image: url(${instagramRedirect});
//     background-size: cover;
//     background-repeat: no-repeat;
//     background-position: center;
// `

const Form = styled.div`
    transition: 1s ease all;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 400px;
    max-height: 90%;
    width: 80%;
    min-width: 270px;
    max-width: 400px;

    color: black;

    border-radius: 5px;
    background-color: rgba(255, 255, 255, 1);
    padding: 20px 10px;
`

export {
    Container,
    Modal,
    // InstagramBrowserRedirectGif,
    Form
}