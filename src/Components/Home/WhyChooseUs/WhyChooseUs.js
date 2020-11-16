import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const WhyChooseUs = () => {
    const chooseUsCards = [
        {
            image: 'https://i.ibb.co/MRJDTBk/fitness.png',
            title: 'Free fitness training',
            description: 'Free Personal Training Online - we will Design & Manage your personalized free workout plan, exercise & weight loss program!'
        },
        {
            image: 'https://i.ibb.co/8bJ0hTd/tons.png',
            title: 'Tons of cardio & strength',
            description: 'Regular cardio exercise can help you lose weight, get better sleep, and reduce your risk for chronic disease.'
        },
        {
            image: 'https://i.ibb.co/52qrrHh/commitment.png',
            title: 'No commitment memberships',
            description: 'With our no commitment membership, there is no lengthy minimum term. Enjoy a rolling monthly membership that you can cancel or change at any time, perfect if you want to give us a try.'
        }
    ]
    return (
        <Container style={{marginTop:"80px"}}>
            <h1 style={{padding:"10px"}}><span style={{color:"#FCD842"}}>Why</span>  Choose Us</h1>
            <Row>
                {
                    chooseUsCards.map(item =>
                        <Col md={6} lg={4} style={{marginTop:"15px"}}>
                            
                                <Card style={{height:"350px",padding:"10px 3px",border :"1px solid #FCD842",boxShadow:"5px 5px 10px rgba(0,0,0,.1),-5px -5px 10px rgba(0,0,0,.2) "}}>
                                   
                                    <Card.Body >
                                    <img src={item.image} alt="" width="35%"   style={{margin:"auto",padding:"10px"}}/>
                                        <h5 style={{padding:"10px",fontWeight:"800px"}}>{item.title}</h5>
                                        <p style={{textAlign:"left"}}>
                                            {item.description}
                                        </p>
                                        
                                    </Card.Body>
                                </Card>
                          
                        </Col>

                    )
                }
            </Row>
        </Container>
    );
};

export default WhyChooseUs;