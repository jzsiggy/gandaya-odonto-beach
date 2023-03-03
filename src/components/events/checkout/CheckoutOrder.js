import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loader from "../../../assets/components/loader/Loader";
import Login from "../../../assets/components/login/Login";
import client from "../../../assets/service/client";
import useStore from "../../../store/store";
import { 
    Button,
    ButtonGroup,
    Container,
    DescriptionContainer, 
    EventTitle,
    TicketPrice, 
    PixQRCode, 
    PixQRCodeContainer, 
    TicketDescription, 
    PixCopyCodeText,
    ImageContainer,
    Image
} from "./styles";
import CardForm from "./cardFormMP/CardForm";

const CheckoutOrder = () => {
    const user = useStore(state => state.user);
    const { orderId } = useParams();
    let [codeCopied, setCodeCopied] = useState(false)
    // let [displayCardForm, setDisplayCardForm] = useState(false)

    const fetchOrderSpec = async () => {
        return await client.get(`/order/${orderId}`)
        .then(res => {
            return(res.data.order)
        })
    }

    const fetchPixPayment = async () => {
        return await client.post(`/order/payment/pix`, {
            orderId: order.id
        })
        .then(res => {
            return(res.data.payment)
        })
    }

    const copyText = () => {
        navigator.clipboard.writeText(pixPayment.code)
        setCodeCopied(true);
    }

    const { isLoading: isOrderLoading, isError: isOrderError, data: order, error: orderError } = useQuery(
        ['checkoutOrderSpec', orderId], 
        fetchOrderSpec, 
        {
            enabled: !!orderId,
            keepPreviousData: false,
            refetchOnWindowFocus: false
        }
    );

    const { isLoading: isPixPaymentLoading, isError: isPixPaymentError, data: pixPayment, error: pixPaymentError, refetch: refetchPixPayment } = useQuery(
        'checkoutOrderPixPayment', 
        fetchPixPayment, 
        {
            enabled: false,
            cacheTime: 0,
            refetchOnWindowFocus: false
        }
    );

    return (
        // displayCardForm ? <CardForm amount={parseFloat(order.price)} fee={order.price*0.05} ticketSpecId={orderId}/> :
        <Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
        {
        !user ? <Login /> :
        isOrderLoading ? <Loader /> :
        order ?
            <>
                <ImageContainer>
                    <Image img={`${process.env.REACT_APP_S3_URL}/${order.ticket.event.backgroundArtImage.key}`} />
                </ImageContainer>
                <DescriptionContainer>
                    <EventTitle>{order.ticket.event.name}</EventTitle>
                    <TicketDescription>{order.ticket.ticketSpec.description}</TicketDescription>
                    <TicketPrice>{order.price}</TicketPrice>
                </DescriptionContainer>
                <PixQRCodeContainer>
                    {
                        isPixPaymentLoading ?
                        <Loader />
                        :
                        pixPayment ? 
                        <>
                            <PixQRCode img={pixPayment.QRCode} onClick={copyText} /> 
                            <PixCopyCodeText onClick={copyText}>
                                {
                                    !codeCopied ?
                                    <>clique para copiar o código</> :
                                    <>código copiado 👍</>
                                }
                            </PixCopyCodeText>
                        </>
                        : 
                        <ButtonGroup>
                            <Button>
                                <div onClick={() => refetchPixPayment()}>Pagar com PIX </div>
                                <span style={{fontSize: "0.8em"}}>
                                { 
                                    order.price*0.05 < 5 ? 
                                        <>taxa R$ 5.00</> 
                                    : 
                                        <>taxa R$ {(order.price*0.05).toFixed(2)}</>
                                }
                                </span>
                            </Button>
                            <Button disabled={true}>
                                <div>Pagar com Cartão</div>
                                <span style={{fontSize: "0.8em"}}>INDISPONÍVEL</span>
                            </Button>
                        </ButtonGroup>
                    }
                </PixQRCodeContainer>
            </>
        :
            <>Nenhuma Venda Encontrada</>
        }
        </Container>
    )
}

export default CheckoutOrder