import { motion } from 'framer-motion';
import styled from 'styled-components';

const Container = styled(motion.div)`
    top: 0;
    left: 0;
    position: fixed;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(6px);

    z-index: 3;
`

const Modal = styled(motion.div)`
    width: 80%;
    height: 50%;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: white;
    // display: flex;
    // flex-direction: column;
    // justify-content: space-evenly;
    // align-items: center;
`

const Close = styled.div`
    transition: 0.2s ease all;
    
    position: relative;
    top: 30px;
    left: 30px;

    font-size: 2.2em;
    color: #383838;

    &:active {
        transform: scale(1.1) rotate(3deg);
    }
`

export {
    Container,
    Modal,
    Close
}