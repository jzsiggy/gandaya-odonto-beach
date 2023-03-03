import { motion } from 'framer-motion';
import styled from 'styled-components';

const Container = styled(motion.div)`
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`

const ProfilePicture = styled.div`
    height: 100px;
    width: 100px;

    border-radius: 50%;

    background-image: url(${props => props.img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`

export {
    Container,
    ProfilePicture
}