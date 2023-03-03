import { motion } from 'framer-motion';
import styled from 'styled-components';

import stars from '../../../assets/images/stars.jpg'

const Container = styled(motion.div)`
    height: 100%;
    width: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;
    // justify-content: space-evenly;

    overflow-y: scroll;
`

const DescriptionContainer = styled.div`
    height: 30%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    text-align: center;
`

const ImageContainer = styled.div`
    margin-top: 10px;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`

const Image = styled.div`
    width: 100%;
    padding-top: 60%;
    background-image: url(${props => props.img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;   

    border-radius: 15px;
    // box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`

const PriceSpecificationContainer = styled.div`
    margin-top: 20px;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const PriceSpecificationRowWrapper = styled.div`
    width: 90%;
    height: 30px;
    display: flex;

    color: #86A3B8;
`

const PriceSpecificationQuantity = styled.div`
    width: 15%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const PriceSpecificationDescription = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: start;
`

const PriceSpecificationAmount = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: end;
`

const PixQRCodeContainer = styled.div`
    height: 75%;
    min-height: calc(150px + 75px + 1em) !important;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    -webkit-tap-highlight-color: transparent;
`

const PixQRCode = styled.div`
    height: 150px;
    width: 150px;
    background-image: url('data:image/gif;base64,${props => props.img}');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    transition: 0.1s ease all;

    &:active {
        transform: scale(1.1) rotate(3deg);
    }
`

const PixCopyCodeText = styled.span`
    margin-top: 15px;    
    transition: 0.1s ease all;

    &:active {
        transform: scale(1.1) rotate(3deg);
    }
`

const Button = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    margin: 10px 0;

    cursor: pointer;
    line-height: 1em;
    text-align: center;

    border-radius: 5px;
    // background-color: #9D3C72;
    background-image: url(${stars});
    background-size: cover;
    background-position: center;
    
    height: 50px;
    min-height: 50px;
    width: 100%;

    color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    ${props => props.disabled && 'background-color: rgb(133, 137, 145);'}
`

const ButtonGroup = styled.div`
    height: 50%;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-weight: bold;
`

const EventTitle = styled.div`
    font-weight: bold;
    font-size: 2em;
`

const TicketDescription = styled.div`
    font-weight: semi-bold;
    font-size: 1.5em;
`

const TicketPrice = styled.div`
    font-weight: semi-bold;
    font-size: 1.2em;
`

export {
    Container, 
    DescriptionContainer, 
    ImageContainer,
    Image,
    PixQRCodeContainer, 
    PixQRCode, 
    PixCopyCodeText,
    Button, 
    ButtonGroup,
    EventTitle,
    TicketDescription, 
    TicketPrice,
    PriceSpecificationContainer,
    PriceSpecificationRowWrapper,
    PriceSpecificationQuantity,
    PriceSpecificationDescription,
    PriceSpecificationAmount,
}