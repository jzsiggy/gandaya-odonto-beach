import styled from 'styled-components';

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(10px);
`

const Modal = styled.div`
    height: 70vh;
    width: 70vw;
    padding: 0px 20px;
    z-index: 5;
    background-color: white;

    border-radius: 5px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: black;
`

const Input = styled.input`
    display: block;
    width: calc(100% - 32px);
    padding: 8px 16px;
    line-height: 25px;
    font-size: 14px;
    font-weight: 500;
    font-family: inherit;
    border-radius: 6px;
    -webkit-appearance: none;
    color: #99A3BA;
    border: 1px solid #CDD9ED;
    background: #fff;
    transition: border .3s ease;
    &::placeholder {
        color: #CBD1DC;
    }
    &:focus {
        outline: none;
        border-color: #275EFE;
    }
`

const StyledInput = styled.input`
    display: block;
    width: calc(100% - 32px);
    padding: 8px 16px;
    line-height: 25px;
    font-size: 14px;
    font-weight: 500;
    font-family: inherit;
    border-radius: 6px;
    -webkit-appearance: none;
    color: #99A3BA;
    border: 1px solid #CDD9ED;
    background: #fff;
    transition: border .3s ease;
    &::placeholder {
        color: #CBD1DC;
    }
    &:focus {
        outline: none;
        border-color: #275EFE;
    }

    white-space: nowrap;
    display: block;
    &:not(:first-child):not(:last-child) {
        border-radius: 0;
    }
    &:first-child {
        border-radius: 6px 0 0 6px;
    }
    &:last-child {
        border-radius: 0 6px 6px 0;
    }
    &:not(:first-child) {
        margin-left: -1px;
    }

    position: relative;
    z-index: 1;
    flex: 1 1 auto;
    width: 1%;
    margin-top: 0;
    margin-bottom: 0;
`

const FormGroup = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    & > span {
        white-space: nowrap;
        display: block;
        &:not(:first-child):not(:last-child) {
            border-radius: 0;
        }
        &:first-child {
            border-radius: 6px 0 0 6px;
        }
        &:last-child {
            border-radius: 0 6px 6px 0;
        }
        &:not(:first-child) {
            margin-left: -1px;
        }
    }
    & > span {
        text-align: center;
        padding: 8px 12px;
        font-size: 14px;
        line-height: 25px;
        color: #99a3ba;
        background: #eef4ff;
        border: 1px solid #cdd9ed;
        transition: background 0.3s ease, border 0.3s ease, color 0.3s ease;
    }
    &:focus-within {
        & > span {
            color: #fff;
            background: #678efe;
            border-color: #275efe;
        }
    }
`

const InputGroup = styled.div`
    margin: 10px 0px;  
    width: 90%  
`

const Submit = styled.div`
    margin: 10px 0px;
`

const Label = styled.label`
    font-size: 0.8em;
    margin-left: 5px;
`

export {
    Overlay,
    Modal,
    Input, StyledInput,
    Submit,
    Label,
    InputGroup,
    FormGroup
}