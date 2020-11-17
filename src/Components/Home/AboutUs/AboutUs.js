import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const AboutUs = () => {
    const aboutImg ="https://i.ibb.co/Zc6JYYv/about.jpg";
    return (
        <Container style={{marginTop:"80px",minHeight:"600px"}} id="about">
            <Row>
                <Col md={6} style={{padding:"30px"}}>
                        <img src={aboutImg} alt="" width ="100%" height="550px" />
                </Col>
                <Col md={6} style={{textAlign:"left",padding:"30px"}} id>
                    <h1>About US</h1>
                    <h2 style={{color:"#FCD842"}}>WE ARE HERE TO DREAM!</h2>
 
                    <h2>OUR TEAM IS HERE TO SURVE YOU</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Odio eos Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, fuga excepturi alias doloribus, sit necessitatibus repellendus debitis in eum ducimus nihil dicta libero. Nobis dolorem commodi eum atque. Doloremque ut iusto commodi itaque aliquam laboriosam reiciendis error assumenda unde cumque. asperiores aspernatur nisi non veritatis voluptatum facere. Distinctio, unde repellendus.</p>
                    
 
                </Col>
            </Row>
        </Container>
            
        
    );
};

export default AboutUs;