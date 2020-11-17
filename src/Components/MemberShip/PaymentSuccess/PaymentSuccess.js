import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../../ShareComponents/Footer/Footer';
import ShareHeader from '../../ShareComponents/ShareHeader/ShareHeader';

const PaymentSuccess = () => {
    return (
        <div>
            <ShareHeader title="Welcome"></ShareHeader>
            <Container style={{textAlign:"center"}} >
                <h1 style={{padding:"20px",color:"green"}}>You have Successfully<br/> Created your Account</h1>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default PaymentSuccess;