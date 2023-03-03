import { useQuery } from 'react-query'

import {
    Container,
    ListContainer,
    Wrapper,
    Image,
    DescriptionWrapper,
    Description,
    Title,
    Date,
} from './styles'

const Feed = () => {
    const images = [
        '1-min.gif', 
        '1-min.jpg',
        '2-min.gif',
        '2-min.jpg',
        '4-min.jpg',
        '5-min.jpg',
        '6-min.jpg',
        '7-min.jpg',
        '9-min.jpg',
        '10-min.jpg',
        '11-min.jpg',
        '12-min.jpg',
        '13-min.jpg',
        '14-min.jpg',
        '15-min.jpg',
    ]
    return (
        <Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
            <ListContainer>
            { 
                images.map(image => {
                    return (
                        <Wrapper key={image}>
                            <Image img={`/feed/${image}`} />
                        </Wrapper>
                    )
                }) 
            }
            <div style={{minHeight:"10px"}} />
            </ListContainer>
        </Container>
    )
}

export default Feed