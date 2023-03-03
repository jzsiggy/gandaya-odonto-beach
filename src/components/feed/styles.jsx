import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled(motion.div)`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: rgb(35, 48, 77);
`

const ListContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: scroll;
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

    border-radius: 15px;

    border: 3px solid white;

    box-shadow: 3px 3px 0 0 black, 6px 6px 0 0 white, 9px 9px 0 0 black; //, 10px 10px 0 0 white;

    transition: 0.3s ease all;
    &:active {
        transform: scale(1.1) rotate(3deg);
        // box-shadow: 0 0 0 0 white, 0 0 0 0 black;
    }

    &:hover {
        // box-shadow: 0 0 0 0 white, 0 0 0 0 black;
    }
`

const Image = styled.div`
    width: 100%;
    padding-bottom: 100%;
    background-image: url(${props => props.img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 15px;
`

const DescriptionWrapper = styled.div`
    height: 75px;
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Description = styled(Link)`
    height: 75%;
    width: 100%;
    display: flex;    
    flex-direction: column;
    justify-content: space-evenly;
    text-decoration: none;

    color: rgba(23, 25, 37, 1);
`

const Title = styled.span`
    font-weight: bold;
    font-size: 1.2em;
`

const Date = styled.span`
    font-size: 0.8em;
    color: rgba(130, 137, 156, 1);

    display: flex;
    align-items: center;
`

const SearchContainer = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-evenly;
`

const Icon = styled.span`
    width: 15%;
`

const SearchForm = styled.input`
    width: 70%;
    height: 70%;

    border: 0;
    outline: 0;

    border-bottom: 1.5px solid #6A4F4F;

    font-family: rajdhani;
    font-size: 1.3em;
    font-weight: bold;
`

const Shadow = styled.div`
    position: fixed;
    bottom: 40px;
    height: 100px;
    width: 100%;

    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #2C5697 100%);
    background-blend-mode: multiply;
    mix-blend-mode: multiply;
    opacity: 0.45;
`

export {
    Container,
    
    ListContainer,
    Wrapper,
    Image,
    DescriptionWrapper,
    Description,
    Title,
    Date,

    SearchContainer,
    Icon,
    SearchForm,

    Shadow
}