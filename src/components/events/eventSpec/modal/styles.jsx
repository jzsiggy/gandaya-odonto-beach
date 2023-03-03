import styled from "styled-components";
import { IoCloseOutline } from 'react-icons/io5'
import { motion } from "framer-motion";

const Container = styled(motion.div)`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Modal = styled.div`
    width: 80%;
    height: 70%;
    // border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    overflow-y: scroll;
`

const ListItem = styled.div`
    width: 100%;
    height: 15%;
    min-height: 50px;
    display: flex;

    align-items: center;
    justify-content: space-between;

    font-weight: bold;
    color: grey;
`

const UserImage = styled.div`
    margin: 0 10px;

    height: 42px;
    width: 42px;

    border-radius: 50%;

    background-image: url(${props => props.img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`

const X = styled(IoCloseOutline)`
    position: fixed;
    top: 20px;
    left: 20px;
    font-size: 3em;
`

const ErrorWrapper = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;

    color: gray;
    font-weight: bold;
`

export {
    Container, 
    Modal,
    ListItem,
    UserImage,

    ErrorWrapper,

    X
}