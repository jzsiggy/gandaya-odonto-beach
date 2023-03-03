import { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import { Link, useLocation, useParams } from "react-router-dom";
import Loader from "../../../assets/components/loader/Loader";
import Login from "../../../assets/components/login/Login";
// import StripeProvider from './cardFormStripe/StripeProvider';
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
    Image,
    PriceSpecificationContainer,
    PriceSpecificationRowWrapper,
    PriceSpecificationQuantity,
    PriceSpecificationDescription,
    PriceSpecificationAmount,
} from "./styles";
import useScript from "../../../assets/hooks/useScript";
import { useNavigate } from "react-router-dom";
import DonateModal from "./modal/DonateModal";
import { AnimatePresence } from "framer-motion";
import { Bars } from "react-loader-spinner";

const CheckoutTicket = (props) => {
    const navigate = useNavigate();
    const location = useLocation()
    useScript("https://sdk.mercadopago.com/js/v2", () => { })
    const user = useStore(state => state.user);
    const { alias } = useParams();
    let [codeCopied, setCodeCopied] = useState(false)
    let pixelId = useRef(null);
    let donationValue = useRef(0);

    let [products, setProducts] = useState(location.state?.products);
    let [showDonationModal, setShowDonationModal] = useState(false);

    let [mintingTickets, setMintingTickets] = useState(false)
    let [success, setSuccess] = useState(false)

    useEffect(() => {
        if (!location.state?.products) {
            navigate(`/events/${alias}/tickets`)
        }
    }, [])

    const getEventByAlias = async () => {
        return await client.get(`event/alias/${alias}`)
        .then(res => {
            if (res.data.event.pixelId) {
                pixelId.current = pixelId;
                window.fbq('init', `${res.data.event.pixelId}`);
                window.fbq('trackSingle', `${res.data.event.pixelId}`, 'InitiateCheckout')
                window.fbq('trackSingle', process.env.REACT_APP_PIXEL_ID, 'InitiateCheckout');
            }
            return(res.data.event);
        })
        .catch(err => err)
    }

    const fetchPixPayment = async () => {
        pixelId.current && window.fbq('trackSingle', `${pixelId.current}`, 'AddPaymentInfo')
        window.fbq('trackSingle', process.env.REACT_APP_PIXEL_ID, 'AddPaymentInfo');
        console.log(donationValue.current)
        return await client.post(`/ticket/payment/pix`, {
            products: products.map(p => ({
                ticketSpecId: p.id,
                description: p.description,
                quantity: p.quantity,
                promo: p.codeUsed
            })),
            donation: donationValue.current
        })
        .then(res => {
            return(res.data.payment)
        })
    }

    const fetchCardPayment = async (eventId) => {
        pixelId.current && window.fbq('trackSingle', `${pixelId.current}`, 'AddPaymentInfo')
        window.fbq('trackSingle', process.env.REACT_APP_PIXEL_ID, 'AddPaymentInfo');
        console.log(donationValue.current)
        return await client.post(`/ticket/payment/card/mp`, {
            products: products.map(p => ({
                ticketSpecId: p.id,
                description: p.description,
                quantity: p.quantity,
                promo: p.codeUsed
            })),
            eventId,
            donation: donationValue.current
        })
        .then(res => {
            const mp = new window.MercadoPago(process.env.REACT_APP_MP_PUBLICKEY);

            const checkout = mp.checkout({
                preference: {
                    id: res.data.payment.response.id
                },
                autoOpen: true,
            })

            checkout.open()
            return(res.data.payment)
        })
    }

    // const mintFreeTickets = async () => {
    //     setMintingTickets(true);

    //     client.post(`/ticket/mint/free`, {
    //         products: products.map(p => ({
    //             ticketSpecId: p.id,
    //             description: p.description,
    //             quantity: p.quantity
    //         }))
    //     })
    //     .then(res => { setMintingTickets(false); setSuccess(true); setTimeout(() => {  document.getElementById("redirect_link").click() }, 2000) })
    // }

    const copyText = () => {
        //  if ( !navigator.userAgent.includes("Instagram") ) { 
        //     navigator.clipboard.writeText(pixPayment.code) 
        // } else {
        // 
        // }

        let textarea = document.createElement("textarea");
        textarea.textContent = pixPayment.code;
        textarea.style.position = "fixed";
        textarea.style.width = '2em';
        textarea.style.height = '2em';
        textarea.style.padding = 0;
        textarea.style.border = 'none';
        textarea.style.outline = 'none';
        textarea.style.boxShadow = 'none';
        textarea.style.background = 'transparent';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();

        document.execCommand("copy");
        document.body.removeChild(textarea);
        setCodeCopied(true);
    }

    const calculatePixFee = () => {
        let totalPixFee = products.reduce((acc, curr) => acc + curr.quantity*curr.pixFee, 0)
        if (!totalPixFee) return "taxa zero!"
        else return `taxa R$ ${totalPixFee.toFixed(2)}`
    }

    const calculateCardFee = () => {
        let totalCardFee = products.reduce((acc, curr) => acc + curr.quantity*curr.cardFee, 0)
        if (!totalCardFee) return "taxa zero!"
        else return `taxa R$ ${totalCardFee.toFixed(2)}`
    }

    const { isLoading: isEventLoading, isError: isEventError, data: event, error: eventError } = useQuery(['event', alias], getEventByAlias, { keepPreviousData: false });

    const { isLoading: isPixPaymentLoading, isError: isPixPaymentError, data: pixPayment, error: pixPaymentError, refetch: refetchPixPayment } = useQuery(
        'checkoutTicketPixPayment', 
        fetchPixPayment, 
        {
            enabled: false,
            cacheTime: 0
        }
    );

    const { isLoading: isCardPaymentLoading, isError: isCardPaymentError, data: cardPayment, error: cardPaymentError, refetch: refetchCardPayment } = useQuery(
        'checkoutTicketCardPayment', 
        () => fetchCardPayment(event.id), 
        {
            enabled: false,
            cacheTime: 0
        }
    );

    return (
        <Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
        <AnimatePresence exitBeforeEnter={true} initial={false}>
        { 
        showDonationModal && 
        <DonateModal key={Math.floor(Math.random() * 10000)}
        price={ 
            products.reduce((acc, curr) => acc + curr.quantity*curr.price, 0) +
            ( showDonationModal == "card" ? products.reduce((acc, curr) => acc + curr.quantity*curr.cardFee, 0) :
            products.reduce((acc, curr) => acc + curr.quantity*curr.pixFee, 0) )
        } 
        onAccept={ (value) => donationValue.current = value }
        onClick={
            // showDonationModal == "free" ? mintFreeTickets : 
            showDonationModal == "card" ? refetchCardPayment : 
                                          refetchPixPayment
        }
        onClose={
            () => setShowDonationModal(false)
        }
        /> 
        }
        {
        !user ? <Login /> :
        isEventLoading ? <Loader /> :
        event && location.state?.products &&
            <>
                <ImageContainer>
                    <Image img={`${process.env.REACT_APP_S3_URL}/${event.backgroundArtImage.key}`} />
                </ImageContainer>
                <PriceSpecificationContainer>
                <PriceSpecificationRowWrapper style={{"fontSize": '0.5em', "color": "#82899C"}}>
                    <PriceSpecificationQuantity>QTDE</PriceSpecificationQuantity>
                    <PriceSpecificationDescription>LOTE</PriceSpecificationDescription>
                    <PriceSpecificationAmount>PREÇO</PriceSpecificationAmount>
                </PriceSpecificationRowWrapper>
                    {
                        products && products.map((p, count) => {
                            return (
                                <PriceSpecificationRowWrapper key={count}>
                                    <PriceSpecificationQuantity>{p.quantity}x</PriceSpecificationQuantity>
                                    <PriceSpecificationDescription>{p.description}</PriceSpecificationDescription>
                                    <PriceSpecificationAmount>{(p.quantity*p.price).toFixed(2)}</PriceSpecificationAmount>
                                </PriceSpecificationRowWrapper>
                            )
                        })
                    }
                    <hr />
                    <div style={{width: "100%", height: "1px", borderBottom: "1px solid rgba(0, 0, 0, 0.1)"}} />
                    <hr />
                    <PriceSpecificationRowWrapper>
                        <PriceSpecificationQuantity></PriceSpecificationQuantity>
                        <PriceSpecificationDescription style={{"fontSize": '0.5em', "color": "#82899C"}}>TOTAL</PriceSpecificationDescription>
                        <PriceSpecificationAmount style={{"color": "#9D3C72"}}>R$ {(products.reduce((acc, curr) => acc + curr.quantity*curr.price, 0)).toFixed(2)} <span style={{color: 'gray', fontSize: '0.5em'}}>&nbsp;+ taxas</span></PriceSpecificationAmount>
                    </PriceSpecificationRowWrapper>
                </PriceSpecificationContainer>
                <PixQRCodeContainer>
                    {
                        isPixPaymentLoading || isCardPaymentLoading ?
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
                        : (products.reduce((acc, curr) => acc + curr.quantity*curr.price, 0) + donationValue.current == 0) ?
                            <ButtonGroup>
                                {
                                mintingTickets ? 
                                <Button>
                                    <Bars
                                        height="30"
                                        width="30"
                                        color="white"
                                        ariaLabel="bars-loading"
                                        wrapperStyle={{width: "100%", display: 'flex', 'align-items': 'center', 'justify-content': 'center'}}
                                        wrapperClass=""
                                        visible={true}
                                    />
                                </Button> 
                                :
                                success ? 
                                <>
                                <Button>
                                    <div>Ingresso garantido</div>
                                </Button> 
                                <div style={{fontWeight: '300', fontSize: '0.8em', 'textAlign': 'center'}}>Você será redirecionado para seus ingressos em poucos segundos</div>
                                </> 
                                :
                                <Button onClick={() => setShowDonationModal("free")}>
                                    <div>Garanta seu Ingresso</div>
                                </Button>
                                }
                            </ButtonGroup>
                        :
                        <ButtonGroup>
                            <Button onClick={() => setShowDonationModal("pix")}>
                                <div>Pagar com PIX </div>
                                <span style={{fontSize: "0.8em"}}>
                                {
                                    <>{calculatePixFee()}</>
                                }
                                </span>
                            </Button>
                            <Button onClick={() => setShowDonationModal("card")}>
                                <div>Pagar com Cartão</div>
                                <span style={{fontSize: "0.8em"}}>
                                {
                                    <>{calculateCardFee()}</>
                                }
                                </span>
                            </Button>
                        </ButtonGroup>
                    }
                </PixQRCodeContainer>
            </>
        }
        </AnimatePresence>
        <Link id="redirect_link" style={{"display": "none"}} to={'/wallet'} ></Link>
        </Container>
    )
}

export default CheckoutTicket