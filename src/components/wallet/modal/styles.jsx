import styled from "styled-components";
import { IoCloseOutline } from 'react-icons/io5'

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Modal = styled.div`
    position:relative;

    width: 80%;
    height: 70%;
    // border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

const TextWrapper = styled.div`
    width: 80%;
    height: 40%
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
`

const FormWrapper = styled.div`
    width: 80%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
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

const X = styled(IoCloseOutline)`
    position: absolute;
    top: 15px;
    left: 15px;
    font-size: 1.5em;
`

export {
    Container, 
    Modal,
    TextWrapper,
    FormWrapper,
    Input,
    X
}