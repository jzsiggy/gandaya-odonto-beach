import { motion } from 'framer-motion';
import styled from 'styled-components';

import kiss from '../../../../assets/images/giphy-kiss.gif'
import heart from '../../../../assets/images/fire-heart.gif'

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
    max-width: 400px;
    height: 65%;
    // border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    text-align: center;

    color: black;
`

const Kiss = styled.div`
    background: url(${kiss});
    background-size: cover;
    background-position: center;
    text-decoration: none;

    height: 100px;
    width: 150px;
`

const Heart = styled.div`
    background: url(${heart});
    background-size: cover;
    background-position: center;
    text-decoration: none;

    height: 150px;
    width: 150px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: white;
`

export {
    Container,
    Modal,
    Kiss,
    Heart
}