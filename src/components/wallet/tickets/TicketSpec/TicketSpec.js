import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import useStore from '../../../../store/store';
import { useParams } from "react-router-dom"
import client from "../../../../assets/service/client";
import OrderModal from "../../modal/OrderModal";
import TransferModal from "../../modal/TransferModal";

import Loader from '../../../../assets/components/loader/Loader';
import QrCode from "../../../../assets/components/QrCode";

import {
    TicketSpecContainer,
    EventTitle,
    QRCodeContainer,
    QRCode,
    Informative
} from '../styles';
import Login from "../../../../assets/components/login/Login";

const TicketSpec = (props) => {
    const user = useStore(state => state.user);
    const { id } = props;
    const [showOrderModal, setOrderModal] = useState(false);
    const [showTransferModal, setTransferModal] = useState(false);

    const fetchTicket = async () => {
        return await client.get(`/ticket/${id}`)
        .then(res => {
            return(res.data.ticket)
        })
        // .catch(err => err)
    }

    const transferTicket = async (receiverEmail) => {
        return await client.post(`/ticket/transfer/email`, {
            ticketId: id,
            receiverEmail
        })
        .then(res => {
            return(res.data)
        })
    }

    const anounceTicket = async (price) => {
        return await client.post(`/order/new`, {
            ticketId: id,
            price
        })
        .then(res => {
            return(res.data)
        })
    }

    const cancelOrder = async (ticketId) => {
        return await client.post(`/order/cancel/ticket`, {
            ticketId
        })
        .then(res => { })
        .finally(onFinally => {
            refetch();
        })
    }

    const closeModal = () => {
        refetch()
        
        setOrderModal(false)
        setTransferModal(false)
    }

    const { isLoading, isError, data: ticket, error, refetch } = useQuery(`userTicketSpec_${id}`, fetchTicket, { enabled: !!id, cacheTime: 0 });

    return ( 
        !user ? <Login /> :
        isLoading ? <Loader /> :
        isError ? <>Error</> :
        (ticket && ticket?.event && ticket?.ticketSpec) ?
        <TicketSpecContainer>
                {
                showOrderModal ? <OrderModal onClickFn={anounceTicket} closeModal={closeModal}/> :
                showTransferModal ? <TransferModal onClickFn={transferTicket} closeModal={closeModal}/> :
                <>
                <Informative>
                    <EventTitle>{ticket.event.name}</EventTitle>
                    <span>{ticket.ticketSpec.description}</span>
                </Informative>
                <QRCodeContainer>
                    {/* <QRCode img={`${process.env.REACT_APP_QR_CODE_URL}/?size=200x200&data=${ticket.secret}`} /> */}
                    <QrCode content={ticket.secret} />
                </QRCodeContainer>
                <Informative>
                    <span onClick={() => setTransferModal(true)}>Transferir</span>
                    {/* {
                        !ticket.hasOrder ? 
                            <span onClick={() => setOrderModal(true)}>Anunciar</span>
                        :
                            <span onClick={() => cancelOrder(ticket.id)}>Cancelar Anúncio</span>
                    } */}
                </Informative>
                </>
                }
            </TicketSpecContainer>
        :
            <></>
    )
}

export default TicketSpec