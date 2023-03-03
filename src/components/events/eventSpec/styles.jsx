import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaUserFriends } from 'react-icons/fa'
import { motion } from 'framer-motion';

import stars from '../../../assets/images/stars.jpg'

const Container = styled(motion.div)`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Scroll = styled.div`
    overflow: scroll;
    height: 92%;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
`

const Wrapper = styled.div`
    width: 85%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 10px 0;

    background-color: #fff;

    // border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-decoration: none;
`

const Image = styled.div`
    width: 100%;
    padding-bottom: 60%;
    background-image: url(${props => props.img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 15px 15px 0 0;
`

const DescriptionWrapper = styled.div`
    height: 75px;
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Description = styled.div`
    height: 75%;
    width: 100%;
    display: flex;    
    flex-direction: column;
    justify-content: space-evenly;

    color: rgba(23, 25, 37, 1);
`

const Title = styled.span`
    font-weight: bold;
    font-size: 1.2em;
`

const Date = styled.span`
    font-size: 0.8em;
    color: rgba(130, 137, 156, 1);
`

const TextContainer = styled.div`
    margin-top: 10px;
    width: 80%;

    color: rgba(220, 234, 216);

    white-space: pre-wrap;
`

const Text = styled.span``

const MapContainer = styled.div`
    height: 200px;
    width: 100%;
    padding: 15px 0 5px 0;
`

const Button = styled(Link)`
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
    color: rgba(220, 234, 216);
    // background-color: #9D3C72;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${stars});
    background-size: cover;
    background-position: center;
    text-decoration: none;

    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    // box-shadow: 3px 3px 0 0 white, 6px 6px 0 0 black, 9px 9px 0 0 white; //, 12px 12px 0 0 black;
`

const ToggleFriendList = styled(FaUserFriends)`
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 2em;
    color: white;
`

export {
    Container,
    Scroll,

    Wrapper,
    Image,
    DescriptionWrapper,
    Description,
    Title,
    Date,

    TextContainer,
    Text,
    MapContainer,
    Button,
    ToggleFriendList
}