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
    Shadow
} from './styles'

import { BsCalendarEvent, BsSpotify } from 'react-icons/bs';

import { RiInstagramFill } from 'react-icons/ri'

import client from "../../../assets/service/client";
import Loader from '../../../assets/components/loader/Loader';

const EventList = ({isVisible}) => {
    const getEventList = async () => {
        return await client.get(`event/organizer/${process.env.REACT_APP_ORGANIZER_ID}`)
        .then(res => {
            return res.data.events
        })
        .catch(err => err.message)
    }

    const parseDate = (date) => {
        let d = new window.Date(date);
        return d.toLocaleString("pt-br", {
            month: "short", day:"numeric", weekday: "short"
        });
    }

    const parseTime = (date) => {
        let d = new window.Date(date);
        return d.toLocaleString("pt-br", {
            hour: "numeric", minute: "numeric"
        });
    }
    
    const { isLoading, isError, data: events, error } = useQuery('events', getEventList);

    return (
        <Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
            <svg width="0" height="0">
                <radialGradient id="insta-gradient" r="150%" cx="30%" cy="107%">
                    <stop stopColor="#fdf497" offset="0" />
                    <stop stopColor="#fdf497" offset="0.05" />
                    <stop stopColor="#fd5949" offset="0.45" />
                    <stop stopColor="#d6249f" offset="0.6" />
                    <stop stopColor="#285AEB" offset="0.9" />
                </radialGradient>
            </svg>
            <ListContainer>
            { 
                isLoading ? <Loader /> :
                isError ? <>ERROR</> :
                !events.length ? <>Nenhum evento encontrado</> :
                events.map(event => {
                    let link = event.alias.toString();
                    let imgKey = event.backgroundArtImage.key;
                    return (
                        <Wrapper key={event.id}>
                            <Image to={`/events/${link}`} img={`${process.env.REACT_APP_S3_URL}/${imgKey}`} />
                            <DescriptionWrapper>
                                <Description to={`/events/${link}`}>
                                    <Title>{event.name}</Title>
                                    <Date><BsCalendarEvent style={{color: '#86A3B8'}}/> &nbsp; {parseDate(event.date)}</Date>
                                </Description>
                                <div style={{display: "flex", alignItems: "center"}}>
                                {
                                    event.spotify &&
                                    <a target="_blank" href={`${event.spotify}`} style={{display: "flex", alignItems: "center"}}><BsSpotify style={{ color: "rgb(113, 211, 111)", 'fontSize': "1.5em" }} /></a>
                                }
                                {
                                    event.instagram &&
                                    <a target="_blank" href={`${event.instagram}`} style={{display: "flex", alignItems: "center"}}>
                                        <RiInstagramFill style={{ fontSize: "1.7em", fill: "url(#insta-gradient)", marginLeft: "10px" }} 
                                        />
                                    </a>
                                }
                                </div>
                            </DescriptionWrapper>
                        </Wrapper>
                    )
                }) 
            }
            </ListContainer>
            {/* <Shadow /> */}
        </Container>
    )
}

export default EventList