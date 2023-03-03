import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import stars from '../../assets/images/stars.jpg'

const Container = styled(motion.div)`
    
`

const MenuWrapper = styled(motion.div)`
    z-index: 10;
    background-color: white;

    left: 0;
    top: 0;

    border-radius: 0 20px 20px 0;

    position: fixed;
    height: 100%;
    width: 60vw;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Overlay = styled(motion.div)`
    z-index: 9;

    position: fixed;
    height: 100vh;
    width: 100vw;

    left: 0;
    top: 0;

    background-color: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
`

const Close = styled.div`
    transition: 0.2s ease all;
    
    position: absolute;
    top: 30px;
    left: 30px;

    font-size: 2.2em;
    color: #383838;

    &:active {
        transform: scale(1.1) rotate(3deg);
    }
`

const ItemWrapper = styled.div`
    display: flex;
    flex-direction: column;

    height: 50%;
    justify-content: center;
    line-height: 3em;
`

const ItemLink = styled(Link)`
    transition: 0.2s ease all;
    
    font-weight: 300;
    font-size: 1.5em;

    text-decoration: none;
    color: black;

    &:active {
        transform: scale(1.1) rotate(3deg);
    }

    background-image: url(${stars}); -webkit-background-clip: text; -webkit-text-fill-color: transparent;

    ${props => props.active && "font-weight: bold;"}
`

const ItemExternal = styled.a`
    transition: 0.2s ease all;
    
    font-weight: bold;
    font-size: 1.5em;

    text-decoration: none;
    color: black;

    &:active {
        transform: scale(1.1) rotate(3deg);
    }
`

export {
    Container,
    MenuWrapper,
    Overlay,
    Close,

    ItemWrapper,
    ItemLink,
    ItemExternal
}