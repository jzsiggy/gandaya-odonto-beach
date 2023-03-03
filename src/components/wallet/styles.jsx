import { motion } from 'framer-motion';
import styled from 'styled-components';

const Container = styled(motion.div)`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Header = styled.div`
    width: 80%;
    height: 15%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 1.1em;
`

const Item = styled.span`
    font-weight: ${props => props.active ? 'bold' : 'normal'};
`

const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export {
    Container,
    Header,
    Item,
    Content
}