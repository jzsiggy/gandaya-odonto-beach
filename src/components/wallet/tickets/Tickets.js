import { useEffect, useState } from "react"
import { useQuery } from "react-query";
import Login from "../../../assets/components/login/Login";
import client from "../../../assets/service/client";
import useStore from "../../../store/store";
import Loader from '../../../assets/components/loader/Loader';
import TicketSpec from "./TicketSpec/TicketSpec";

import {
    ListContainer,
    Wrapper,
    Image,
    Description,
    Title,
    Date
} from './styles'

const Tickets = ()=> {
    const user = useStore(state => state.user);

    const getUserTickets = async () => {
        return await client.get(`/user/${user.id}/tickets`)
        .then(res => {
            return(res.data.tickets)
        })
        // .catch(err => err.message)
    }

    const { isLoading, isError, data: tickets, error } = useQuery('userTickets', getUserTickets, {enabled: !!user});

    return (
        !user ? <Login /> :
        <ListContainer className="no-scroll">
            { tickets && tickets?.length >= 1  && <div style={{paddingLeft: "10%"}} />}
            { 
                isLoading ? <Loader /> :
                !isError && tickets && tickets?.length ?
                    tickets.map(ticket => {
                        return (
                            <TicketSpec key={ticket.id} id={ticket.id} />
                        )
                    }) 
                :
                <div style={{width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                    <div style={{height: "2em"}} />
                    <span style={{fontSize: "1.2em", color: "gray"}}>Você ainda não possui nenhum ingresso</span>
                    <div style={{height: "2em"}} />
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
                </div>
            }
            { tickets && tickets?.length >= 1  && <div style={{paddingRight: "10%"}} />}
        </ListContainer>
    )
}

export default Tickets