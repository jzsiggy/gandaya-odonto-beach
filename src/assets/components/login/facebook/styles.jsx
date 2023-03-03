import styled from 'styled-components';
import { IoLogoFacebook } from 'react-icons/io5'

const Container = styled.div`
    height: 40px;    
    width: 250px;
    border-radius: 5px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: rgb(53, 120, 234);
    font-size: 1em;;
    color: white;
`

const Text = styled.div`
    text-align: center;
    font-family: helvetica;
    font-weight: bold;
` 

const SocialLogo = styled(IoLogoFacebook)`
    font-size: 1.5em;
`

export {
    Container,
    Text,
    SocialLogo
}