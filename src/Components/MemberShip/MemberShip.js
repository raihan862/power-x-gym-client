import React, {  useState } from 'react';

import Footer from '../ShareComponents/Footer/Footer';
import ShareHeader from '../ShareComponents/ShareHeader/ShareHeader';
import MemberShipForm from './MemberShipForm/MemberShipForm';
import Payment from './Payment/Payment';

const MemberShip = () => {
 
    const [userData, setUserData] = useState({});
    const[isSubmit, setIsSubmit] = useState(false);
    const [orderData, setOrderData] = useState({});

    const handleOrderProcess =(payment_id) => {
        const newOrderData = {
            ...userData,
            paymentId: payment_id,
            orderDate: new Date()
        }
    setOrderData(newOrderData)
    }
    
    console.log(orderData);
    return (
        <div>
            <ShareHeader title = "YOUR GYM MEMBERSHIP"></ShareHeader>
            {isSubmit ? 
                <Payment handleOrderProcess={handleOrderProcess}></Payment> : 
            <MemberShipForm setIsSubmit={setIsSubmit} setUserData={setUserData}></MemberShipForm>}
                
            <Footer></Footer>
        </div>
    );
};

export default MemberShip;