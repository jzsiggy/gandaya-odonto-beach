import styled from 'styled-components';

import { IoCloseOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import stars from '../../../assets/images/stars.jpg'
import grapefruit from '../../../assets/images/grapefruit.png'

const Container = styled(motion.div)`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    overflow: scroll;
`

const EventImage = styled.div`
    width: 85%;
    padding-bottom: 51%;
    margin: 10px 0;
    background-image: url(${props => props.img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 15px 15px;
`

const ToggleMarketPlace = styled.div`
    width: 80%;
    padding: 10px 0;
    margin: 5% 0;
    display: flex; 
    justify-content: space-between;
    align-items: center;

    font-size: 1.1em;

    border: 1px solid #86A3B8;
    border-radius: 100px;
`

const Item = styled.div`
    transition: 0.3s ease all;

    width: 50%;
    height: calc(100% + 20px);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    // font-weight: ${props => props.active ? 'bold' : 'normal'};

    color: ${props => props.active ? '#5F6F94' : '#82899C'};

    border-radius: 100px;
    background-color: ${props => props.active ? '#86A3B8' : 'none'};
`

const ListContainer = styled(motion.div)`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 60px;
`

const Wrapper = styled.div`
    width: 80%;
    height: 20%;
    max-height: 80px;
    min-height: 80px;
    margin: 8px 0;
    // border: 1px solid grey;
    display: flex; 
    align-items: center;
    justify-content: center;

    background-color: white;

    border-radius: 12px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-decoration: none;
`

const WrapperLink = styled(Link)`
    width: 80%;
    height: 20%;
    max-height: 100px;
    min-height: 100px;
    margin: 8px 0;
    // border: 1px solid grey;
    display: flex; 
    align-items: center;
    justify-content: center;

    background-color: white;

    border-radius: 12px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-decoration: none;
`

const Informative = styled.div`
    width: 80%;
    height: 100%;

    display: flex; 
    align-items: center;
    justify-content: space-between;

    text-decoration: none;
`

const TicketInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    height: 75%;
`

const QuantitySelector = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60px;
    font-weight: bold;
`

const Description = styled.div`
    color: gray;
    font-size: 0.8em;
`

const Price = styled.div`
    text-align: center;
    color: #5F6F94;
    font-weight: bold;
`

const X = styled(IoCloseOutline)`
    position: fixed;
    top: 20px;
    left: 20px;
    font-size: 3em;
`

const ImageWrapper = styled.div`
    width: 20%;

    display: flex;
    justify-content: center;
`

const SellerImage = styled.div`
    height: 35px;
    width: 35px;

    border-radius: 100%;

    background-image: url('${props => props.img}');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`

const ErrorIcon = styled.div`
    height: 150px;
    width: 180px;
    opacity: 1;

    background-image: url(${grapefruit});
    background-size: cover;
    background-position: center;
    text-decoration: none;
`

const Button = styled.div`
    height: 8%;
    margin: 10px 0;
    min-height: 50px;
    width: 80%;
    align-self: center;
    
    text-align: center;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 5px;
    font-weight: bold;
    color: white;
    // background-color: #9D3C72;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${stars});
    background-size: cover;
    background-position: center;
    text-decoration: none;

    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    position: absolute;
    bottom: 0;
`

const InfoIcon = styled.div`
    position: absolute;
    top: 15px;
    right: 15px;
    background-color: rgb(35, 48, 77);
    height: 50px;
    width: 50px;
    border-radius: calc(50px / 2);
    opacity: 0.9;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
`

export {
    Container,
    EventImage,
    ListContainer, 
    ToggleMarketPlace, 
    Item,
    Wrapper, 
    WrapperLink, 
    Informative,
    TicketInfo,
    Description, 
    Price, 
    X,
    ImageWrapper,
    SellerImage,
    QuantitySelector,
    Button,
    ErrorIcon,
    InfoIcon
};