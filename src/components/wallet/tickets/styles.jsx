import styled from "styled-components";
import { Link } from "react-router-dom";

import stars from '../../../assets/images/galaxy.jpg'

const ListContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow-x: scroll;
    display: flex;
    // flex-direction: column;
    align-items: center;

    scroll-snap-type: x mandatory;
`

const Wrapper = styled(Link)`
    width: 80%;
    height: 15%;
    min-height: 100px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 10px 0;

    background-color: #fff;

    // border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    
    text-decoration: none;
    cursor: pointer;
`

const Image = styled.div`
    height: 90%;
    width: 30%;
    background-image: url(${props => props.img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 10px;
`

const Description = styled.div`
    height: 80%;
    width: 60%;
    background-size: contain;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

const Title = styled.span`
    font-weight: bold;
    font-size: 1.2em;
    color: grey;
`

const Date = styled.span`
    color: grey;  
`


const TicketSpecContainer = styled.div`
    min-width: 80%;
    margin: 0 10%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    background: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3)), url(${stars});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    scroll-snap-align: center;
`

const EventTitle = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    align-items: center;
    justify-content: center;

    text-align: center;

    font-size: 1em;
    font-weight: bold;
`

const QRCodeContainer = styled.div`
    width: 125px;
    height: 125px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`

const QRCode = styled.div`
    height: 100%;
    width: 100%;
    background-image: url('${props => props.img}');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`

const Informative = styled.div`
    width: 80%;
    height: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`

export {
    ListContainer,
    Wrapper,
    Image,
    Description,
    Title,
    Date,

    TicketSpecContainer,
    EventTitle,
    QRCodeContainer,
    QRCode,
    Informative
}