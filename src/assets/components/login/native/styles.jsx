import styled from 'styled-components';
import stars from '../../../../assets/images/stars.jpg'

const FormContainer = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-bottom: 20px;
`

const Input = styled.input`
    margin: 7px 0;
        
    margin-top: 2px;
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

const Submit = styled.div`
    width: 220px;
    height: 2em;
    border-radius: 5px;
    border: none;
    padding: 5px 10px;
    margin: 7px 0;

    display: flex;
    align-items: center;
    justify-content: center;

    // background-color: #9D3C72;
    background-image: url(${stars});
    background-size: cover;
    background-position: center;
    color: white;
`

export {
    FormContainer,
    Input,
    Submit
}