import useScript from "../../../../assets/hooks/useScript"
import { useNavigate } from 'react-router-dom';

import Loader from '../../../../assets/components/loader/Loader';

import client from "../../../../assets/service/client";

const CardForm = (props) => {
    let navigate = useNavigate();
    useScript("https://sdk.mercadopago.com/js/v2", () => {
        const mp = new window.MercadoPago(process.env.REACT_APP_MP_PUBLICKEY);

        const bricksBuilder = mp.bricks();

        const renderCardPaymentBrick = async (bricksBuilder) => {
            const settings = {
                locale: 'pt',
                customization: {
                    visual: {
                        hideFormTitle: true,
                        style: {
                            theme: 'flat',
                            customVariables: {
                                inputBackgroundColor: "rgb(253, 248, 241)",
                                formBackgroundColor: "rgb(253, 248, 241)",
                                fontSizeExtraSmall: "0.7em", fontSizeSmall: "0.7em", fontSizeMedium: "0.7em", fontSizeLarge: "0.7em", fontSizeExtraLarge: "0.7em",
                                inputVerticalPadding: "5px",
                                formPadding: "5px",

                            }
                        }
                    }
                },
                initialization: {
                    amount: props.amount + props.fee, 
                    // payer: {
                    //     email: 'jzsiggy@gmail.com' 
                    // },
                },
                callbacks: {
                    onReady: () => {
                        let loader = document.getElementById("card_payment_loader");
                        loader.parentNode.removeChild(loader);

                        let form = document.getElementById("cardPaymentBrick_container");
                        form.style.display = null;
                    },
                    onSubmit: (cardFormData) => {
                    return new Promise((resolve, reject) => {
                        client.post("ticket/payment/card/mp", {
                            ticketSpecId: props.ticketSpecId,
                            amount: props.amount,
                            fee: props.fee,
                            mp_device_id: window.MP_DEVICE_SESSION_ID,
                            cardFormData
                        })
                        .then((response) => {
                                navigate("/payment-succeeded");
                                resolve();
                        })
                        .catch((error) => {
                            let element = document.getElementById("card_payment_error_message");
                            element.style.display = null;
                            reject();
                        })
                        });
                    },
                    onError: (error) => { 
                    // callback called to all error cases related to the Brick
                    },
                },
            };
            const cardPaymentBrickController = await bricksBuilder.create('cardPayment', 'cardPaymentBrick_container', settings);
        };
        renderCardPaymentBrick(bricksBuilder);   
    })

    return (
        <div style={{"width": "80%", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "space-evenly"}}>
            <div id="card_payment_loader"><Loader /></div>
            <div id="cardPaymentBrick_container" style={{"display": "none"}}></div>
            <div id="card_payment_error_message" style={{"display": "none", "textAlign": "center", "fontSize": "0.7em"}}>não foi possível aceitar o seu pagamento... tente novamente mais tarde</div>
        </div>
    )
}

export default CardForm