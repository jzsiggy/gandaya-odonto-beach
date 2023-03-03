import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CardForm from "./CardForm";
import "./Stripe.css";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLICKEY);

export default function StripeProvider(props) {
  const appearance = {
    theme: 'flat',
  };
  const options = {
    clientSecret: props.clientSecret,
    appearance,
  };

  return (
    <div style={{display: "flex", alignItems: "center", width: "90%"}}>
      {props.clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CardForm amount={props.amount}/>
        </Elements>
      )}
    </div>
  );
}