import React, { useState } from 'react';
import { useHistory } from 'react-router';

import Footer from '../ShareComponents/Footer/Footer';
import ShareHeader from '../ShareComponents/ShareHeader/ShareHeader';
import MemberShipForm from './MemberShipForm/MemberShipForm';
import Payment from './Payment/Payment';

const MemberShip = () => {

    const [userData, setUserData] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [orderData, setOrderData] = useState({});
    const history = useHistory()
    const handleOrderProcess = (payment_id) => {
        const newOrderData = {
            ...userData,
            paymentId: payment_id,
            orderDate: new Date()
        }
        setOrderData(newOrderData)

        fetch('https://power-x-gym-server.herokuapp.com/payment', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
            .then(response => response.json())
            .then(data => {
                 history.push("/success")
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }


    return (
        <div>
            <ShareHeader title="YOUR GYM MEMBERSHIP"></ShareHeader>
            {isSubmit ?
                <Payment handleOrderProcess={handleOrderProcess}></Payment> :
                <MemberShipForm setIsSubmit={setIsSubmit} setUserData={setUserData}></MemberShipForm>}

            <Footer></Footer>
        </div>
    );
};

export default MemberShip;