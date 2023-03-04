import { useEffect, useState } from "react";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";

import { BsDashLg, BsInfoLg, BsPlusLg } from "react-icons/bs";

import {
    Container,
    ListContainer, 
    ToggleMarketPlace,
    Item, 
    Wrapper, 
    WrapperLink,
    Description, 
    Price, 
    SellerImage,
    ImageWrapper,
    Informative,
    TicketInfo,
    QuantitySelector,
    Button,
    EventImage,
    InfoIcon,
    ErrorIcon
} from './styles';

import client from "../../../assets/service/client";
import { useQuery } from "react-query";
import Loader from "../../../assets/components/loader/Loader";
import { AnimatePresence } from "framer-motion";
import InfoModal from "./modal/InfoModal";

const TicketList = () => {
    let [showTickets, setShowTickets] = useState(true);
    let [showOrders, setShowOrders] = useState(false);
    let [showInfo, setShowInfo] = useState(false);
    let [searchParams, setSearchParams] = useSearchParams();
    let { alias } = useParams();

    let promo = searchParams.get("promo");

    let [quantity, setQuantity] = useState({});
    let [products, setProducts] = useState([]);

    const getQuantity = (ticketSpecId) => {
        return quantity[ticketSpecId] || 0;
    }

    const incrementQuantity = (ticketSpecId, multiplier, orderLimit) => {
        let delta = multiplier || 1
        let limit = orderLimit || Infinity

        let updatedQuantity = {}
        updatedQuantity[ticketSpecId] = quantity[ticketSpecId] ? quantity[ticketSpecId] + delta : delta
        updatedQuantity[ticketSpecId] = updatedQuantity[ticketSpecId] > limit ? limit : updatedQuantity[ticketSpecId]

        setQuantity(quantity => ({
            ...quantity,
            ...updatedQuantity
        }))
    }

    const decrementQuantity = (ticketSpecId, multiplier) => {
        let delta = multiplier || 1
        let updatedQuantity = {}
        updatedQuantity[ticketSpecId] = quantity[ticketSpecId] && quantity[ticketSpecId] - delta

        setQuantity(quantity => ({
            ...quantity,
            ...updatedQuantity
        }))
    }

    const parseProducts = (tickets, promo) => {
        let state = []
        for (let ticketSpecId of Object.keys(quantity)) {
            if (quantity[ticketSpecId]) {
                let ticketSpec = tickets.filter(t => t.id == ticketSpecId)[0]
                state.push({
                    ...ticketSpec, quantity: quantity[ticketSpecId], codeUsed: promo
                })
            }
        } 

        setProducts([...state]);
    }

    useEffect(() => {
        if (products.length) {
            document.getElementById("link_to_checkout").click()
        }
    }, [products])

    const getEventByAlias = async () => {
        return await client.get(`event/alias/${alias}`)
        .then(res => {
            if (res.data.event.pixelId) {
                window.fbq('init', `${res.data.event.pixelId}`);
                window.fbq('trackSingle', `${res.data.event.pixelId}`, 'ViewContent')
                window.fbq('trackSingle', process.env.REACT_APP_PIXEL_ID, 'ViewContent');
            }
            return(res.data.event);
        })
        .catch(err => err)
    }

    const getActiveTickets = async (eventId) => {
        return await client.get(`event/${eventId}`)
        .then(res => {
            return(res.data.event.activeTicketSpecs);
        })
        .catch(err => err)
    }

    const getPromoTickets = async () => {
        if (promo) {
            return await client.get(`ticket/promo/${promo}`)
            .then(res => {
                return(res.data.ticketSpecs);
            })
            .catch(err => err)
        } else return null
    }

    const getEventOrders = async (eventId) => {
        return await client.get(`event/${eventId}/orders`)
        .then(res => {
            return(res.data.orders);
        })
        .catch(err => err)
    }

    const { isLoading: isEventLoading, isError: isEventError, data: event, error: eventError } = useQuery(['event', alias], getEventByAlias, { keepPreviousData: false });
    const { isLoading: isTicketsLoading, isError: isTicketsError, data: tickets, error: ticketsError } = useQuery(['eventTickets', alias], () => getActiveTickets(event.id), {enabled: (!!showTickets) && (!!event), keepPreviousData: false});
    const { isLoading: isPromoLoading, isError: isPromoError, data: promoTickets, error: promoError } = useQuery(['eventTicketsPromo', alias], () => getPromoTickets(), {enabled: (!!showTickets) && (!!event), keepPreviousData: false});
    const { isLoading: isOrdersLoading, isError: isOrdersError, data: orders, error: ordersError } = useQuery(['eventOrders', alias], () => getEventOrders(event.id), {enabled: (!!showOrders) && (!!event), keepPreviousData: false});

    if (isEventLoading || (showTickets && isTicketsLoading) || (showOrders && isOrdersLoading)) {
        return (
            <Container>
                <Loader />
            </Container>
        )
    }

    return (
        <Container className="no-scroll" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
            {/* { showInfo && <InfoModal onClose={() => setShowInfo(false)} /> } */}
            {/* <InfoIcon onClick={() => setShowInfo(true)} ><BsInfoLg style={{fontSize: '1.2em'}} /></InfoIcon> */}
            <EventImage img={`${process.env.REACT_APP_S3_URL}/${event?.backgroundArtImage?.key}`} />
            <AnimatePresence exitBeforeEnter={true} initial={false}>
            {
                showTickets && (tickets || promoTickets) && (
                    <>
                    <ListContainer key="event-tickets" initial={{ x: -300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -300, opacity: 0 }} transition={{ duration: 0.2 }}>
                    {
                    !!tickets && !!tickets?.length &&
                        tickets.map(ticket => {
                            return (
                                <Wrapper key={ticket.id}>
                                    <Informative>
                                        <TicketInfo>
                                            <Description>{ticket.description}</Description>
                                            <Price>R${ticket.price}</Price>
                                        </TicketInfo>
                                        <QuantitySelector>
                                            <BsDashLg onClick={() => decrementQuantity(ticket.id, ticket.multiplier)} style={{"fontSize": "0.8em", "color": "#5F6F94"}}/> 
                                            <span style={{color: "#86A3B8"}}>{getQuantity(ticket.id)}</span>
                                            <BsPlusLg onClick={() => incrementQuantity(ticket.id, ticket.multiplier, ticket.orderLimit)} style={{"fontSize": "0.8em", "color": "#5F6F94"}}/>
                                        </QuantitySelector>
                                    </Informative>
                                </Wrapper>
                            )
                        })
                    }
                    {
                    !!promoTickets && !!promoTickets?.length &&
                        promoTickets.map(ticket => {
                            if (!!tickets && !!tickets?.length && tickets.map(t => t.id).includes(ticket.id)) { return <></> }
                            return (
                                <Wrapper key={ticket.id}>
                                    <Informative>
                                        <TicketInfo>
                                            <Description>{ticket.description}</Description>
                                            <Price>R${ticket.price}</Price>
                                        </TicketInfo>
                                        <QuantitySelector>
                                            <BsDashLg onClick={() => decrementQuantity(ticket.id, ticket.multiplier)} style={{"fontSize": "0.8em", "color": "#5F6F94"}}/> 
                                            <span style={{color: "#86A3B8"}}>{getQuantity(ticket.id)}</span>
                                            <BsPlusLg onClick={() => incrementQuantity(ticket.id, ticket.multiplier, ticket.orderLimit)} style={{"fontSize": "0.8em", "color": "#5F6F94"}}/>
                                        </QuantitySelector>
                                    </Informative>
                                </Wrapper>
                            )
                        })
                    }
                    { 
                    !tickets?.length && !promoTickets?.length && 
                    <div style={{width: "90%", height: "100%", minHeight: "200px", display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center"}}>
                        <div style={{width: "100%", height: "70%", maxHeight: "400px", display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center"}}>
                            <ErrorIcon />
                            <span style={{fontSize: "0.8em"}}>Não há ingressos disponíveis no momento 🤭</span>
                            {/* <span style={{fontSize: "0.8em"}}>Já quer entrar no clima?</span> */}
                            <span style={{fontSize: "0.8em"}}>Clique <Link to="/feed">aqui</Link> para ver as fotos da última edição.</span>
                        </div>
                    </div> 
                    }
                    </ListContainer>
                    <Button onClick={() => parseProducts(promoTickets?.length ? [...tickets, ...promoTickets] : tickets, promo)}>
                        Continuar
                    </Button>
                    <Link id="link_to_checkout" style={{"display": "none"}} to={`/events/${alias}/tickets/checkout`} state={{ products }}></Link>
                    </>
                )
            }
            {
                showOrders && orders && (
                    <ListContainer key="event-orders" initial={{ x: 300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 300, opacity: 0 }} transition={{ duration: 0.2 }}>
                    {
                    orders.length ?
                        orders.map(order => {
                            return (
                                <WrapperLink to={`/events/${event.id}/order/${order.id}/checkout`} key={order.id}>
                                    <Informative>
                                    <ImageWrapper>
                                        <SellerImage img={`${process.env.REACT_APP_S3_URL}/${order.seller.profileImage.key}`}/>
                                    </ImageWrapper>
                                    <Description>{order.ticket.ticketSpec.description}</Description>
                                    <Price>R${order.price}</Price>
                                    </Informative>
                                </WrapperLink>
                            )
                        })
                    :
                        <div style={{width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <span>Não Há Ingressos Disponíveis</span>
                        </div>
                    }
                    </ListContainer>
                )
            }
            </AnimatePresence>
        </Container>
    )
}

export default TicketList