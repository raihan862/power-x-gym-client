import React, { useMemo } from "react";
import './SplitCardForm.css'
import {
    useStripe,
    useElements,
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement
} from "@stripe/react-stripe-js";
import { Button, Col, Container, Row } from "react-bootstrap";


const useOptions = () => {
    const options = useMemo(
        () => ({
            style: {
                base: {
                    fontSize: '18px' ,
                    color: "#424770",
                    letterSpacing: "0.025em",
                    fontFamily: "Source Code Pro, monospace",
                    "::placeholder": {
                        color: "#aab7c4"
                    }
                },
                invalid: {
                    color: "#9e2146"
                }
            }
        }),
        []
    );

    return options;
};

const SplitCardForm = ({ handleOrderProcess}) => {
    const stripe = useStripe();
    const elements = useElements();
    const options = useOptions();
    const handleSubmit = async event => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        const payload = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardNumberElement)
        });
        // console.log("[PaymentMethod]", payload);
        // console.log(payload);
        handleOrderProcess(payload.paymentMethod.id);
    };

    return (
        <Container >
            <Row>
                <Col sm={4}></Col>

                <Col sm={8}>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Card number
        <CardNumberElement cl className="form-control payment-input"
                                options={options}
                                onReady={() => {
                                    console.log("CardNumberElement [ready]");
                                }}
                                onChange={event => {
                                    console.log("CardNumberElement [change]", event);
                                }}
                                onBlur={() => {
                                    console.log("CardNumberElement [blur]");
                                }}
                                onFocus={() => {
                                    console.log("CardNumberElement [focus]");
                                }}
                            />
                        </label>
                        <br />
                        <label>
                            Expiration date
        <CardExpiryElement className="form-control"
                                options={options}
                                onReady={() => {
                                    console.log("CardNumberElement [ready]");
                                }}
                                onChange={event => {
                                    console.log("CardNumberElement [change]", event);
                                }}
                                onBlur={() => {
                                    console.log("CardNumberElement [blur]");
                                }}
                                onFocus={() => {
                                    console.log("CardNumberElement [focus]");
                                }}
                            />
                        </label>
                        <br />
                        <label>
                            CVC
        <CardCvcElement className="form-control payment-input"
                                options={options}
                                onReady={() => {
                                    console.log("CardNumberElement [ready]");
                                }}
                                onChange={event => {
                                    console.log("CardNumberElement [change]", event);
                                }}
                                onBlur={() => {
                                    console.log("CardNumberElement [blur]");
                                }}
                                onFocus={() => {
                                    console.log("CardNumberElement [focus]");
                                }}
                            />
                        </label>
                        <br />
                        <Button variant="warning" className="px-5" type="submit" disabled={!stripe}>
                            Pay
      </Button>
                    </form>
                </Col>
            </Row>
        
        </Container>
    );
};

export default SplitCardForm;
