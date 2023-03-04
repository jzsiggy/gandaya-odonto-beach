import { useQuery } from 'react-query'
import React, { useState, useEffect } from "react";
import { AnimatePresence } from 'framer-motion';

import { Link, useParams } from "react-router-dom";
import client from "../../../assets/service/client";
import FriendsModal from "./modal/FriendsModal";

import { BsSpotify } from 'react-icons/bs';

import { RiInstagramFill } from 'react-icons/ri'

import GoogleMapReact from 'google-map-react';

import {
    Container,
    Wrapper,
    Image,
    DescriptionWrapper,
    Description,
    Title,
    Date,
    Button,
    MapContainer,
    TextContainer,
    Text,
    Scroll
} from './styles';
import Loader from '../../../assets/components/loader/Loader';

const EventSpec = () => {
    const [showModal, setShowModal] = useState(false)
    let { alias } = useParams();

    const getEventSpecs = async () => {
        return await client.get(`event/alias/${alias}`)
        .then(res => {            
            if (res.data.event.pixelId) {
                window.fbq('init', `${res.data.event.pixelId}`);
                window.fbq('trackSingle', `${res.data.event.pixelId}`, 'PageView')
                window.fbq('trackSingle', process.env.REACT_APP_PIXEL_ID, 'PageView');
            }

            console.log(res.data.event)
            return res.data.event;
        })
    }

    const renderMarkers = (map, maps) => {
        let marker = new maps.Marker({
          position: {lat: parseFloat(specs.location.lat), lng: parseFloat(specs.location.lon)},
          map,
          title: 'Hello World!'
        });
    }

    const parseDate = (date) => {
        let d = new window.Date(date);
        return d.toLocaleString("pt-br", {
            month: "short", day:"numeric", weekday: "short"
        });
    }

    const { isLoading, isError, data: specs, error } = useQuery(['eventSpec', alias], getEventSpecs, { keepPreviousData: false });

    return (
        <>
        <svg width="0" height="0">
            <radialGradient id="insta-gradient" r="150%" cx="30%" cy="107%">
                <stop stopColor="#fdf497" offset="0" />
                <stop stopColor="#fdf497" offset="0.05" />
                <stop stopColor="#fd5949" offset="0.45" />
                <stop stopColor="#d6249f" offset="0.6" />
                <stop stopColor="#285AEB" offset="0.9" />
            </radialGradient>
        </svg>
        {
        isLoading ? <Loader /> :
        isError ? 
        <>
        <div style={{
            height: '200px',
            width: '80%',
            maxWidth: "350px",
            backgroundImage: "url('https://i.kym-cdn.com/photos/images/original/001/042/619/4ea.jpg')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "15px"
        }} />
        <div style={{height: "2em"}} />
        <span style={{fontSize: "1.2em", color: "gray"}}>Erro ao encontrar o evento</span>
        <div style={{height: "2em"}} />
        </>
        :
        showModal ? <FriendsModal key="friends-modal" closeModal={() => setShowModal(false)} eventId={specs.id} /> :
        specs ? 
        (
            <Container key="event-spec" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                {/* { specs.listAvailable && <ToggleFriendList onClick={() => setShowModal(true)}/> } */}
                <Scroll className="no-scroll">
                <Wrapper>
                    <Image img={`${process.env.REACT_APP_S3_URL}/${specs?.backgroundArtImage?.key}`} />
                    <DescriptionWrapper>
                        <Description>
                            <Title>{specs.name}</Title>
                            <Date>{parseDate(specs.date)}</Date>
                        </Description>
                        <div style={{display: "flex", alignItems: "center"}}>
                            {
                                specs.spotify &&
                                <a target="_blank" href={`${specs.spotify}`} style={{display: "flex", alignItems: "center"}}><BsSpotify style={{ color: "rgb(113, 211, 111)", 'fontSize': "1.5em" }} /></a>
                            }
                            {
                                specs.instagram &&
                                <a target="_blank" href={`${specs.instagram}`} style={{display: "flex", alignItems: "center"}}>
                                    <RiInstagramFill style={{ fontSize: "1.7em", fill: "url(#insta-gradient)", marginLeft: "10px" }} 
                                    />
                                </a>
                            }
                        </div>
                    </DescriptionWrapper>
                </Wrapper>
                <TextContainer>
                    <div style={{fontWeight: "bold", margin: "0 0 10px 0"}} >Descrição</div>
                    <Text>{specs.description}</Text>
                    <div style={{margin: "10px 0"}} >clique <Link to="/feed">aqui</Link> pra ver as fotos da última edição!</div>
                    {
                        specs.location && 
                        <MapContainer>
                            <GoogleMapReact
                            bootstrapURLKeys={{ key: process.env.REACT_APP_GMAPS_API_KEY }} 
                            defaultCenter={{lat: parseFloat(specs.location.lat), lng: parseFloat(specs.location.lon)}} 
                            defaultZoom={15} 
                            onGoogleApiLoaded={({map, maps}) => renderMarkers(map, maps)}
                        />
                        </MapContainer>
                    }
                </TextContainer>
                </Scroll>
                <Button to='tickets'>Garanta seu Ingresso</Button>
            </Container>
        )
        :
        <></>
        }
        </>
    )
}

export default EventSpec;