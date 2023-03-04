import { motion } from 'framer-motion';
import styled from 'styled-components';

const Container = styled(motion.div)`
    top: 0;
    left: 0;
    position: fixed;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.4);

    backdrop-filter: blur(10px);
`

const Modal = styled(motion.div)`
    width: 80%;
    height: 50%;
    // border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    color: black;
`

const Title = styled.span`
    font-size: 1.5em;
    font-weight: 500;

    text-align: center;
`

const Description = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 1.2em;
`

const ButtonGroup = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

const Button = styled.div`
    width: 45%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    font-size: 1.5em;
`

const Input = styled.input`
    width: 70%;
    height: 30px;

    text-align: center;

    border: 0;
    outline: 0;

    border-bottom: 1.5px solid #6A4F4F;

    font-family: rajdhani;
    font-size: 1.3em;
    font-weight: bold;
`

export {
    Container,
    Modal,
    Title,
    Description,
    ButtonGroup,
    Button,
    Input
}