import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';
import SplitCardForm from './SplitCardForm';

const stripePromise = loadStripe('pk_test_51Ha1hsEGLbU7xdvfaEFs0QLW43c6o73yJ7HXHlkOQkWGoBNu6qBnhLwluQOErLRpcv2NS8mTOnalPENDGoOEdG3V00YHX2mT5u');
const Payment = ({ handleOrderProcess}) => {
    
    return (
        <div className="container p-5">
            <h3 className="text-center py-2">Bank Payment</h3>
            <Elements stripe={stripePromise}>
                <SplitCardForm handleOrderProcess={handleOrderProcess}></SplitCardForm>
            </Elements>
        </div>
    );
};

export default Payment;