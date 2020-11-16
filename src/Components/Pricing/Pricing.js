import React from 'react';
import { Col, Container, Row,Card, Button } from 'react-bootstrap';
import Footer from '../ShareComponents/Footer/Footer';
import ShareHeader from '../ShareComponents/ShareHeader/ShareHeader';
import {TiTick} from 'react-icons/ti'
import { Link } from 'react-router-dom';
const Pricing = () => {
    const ourTarget = [
        {
            
            title: 'ADVANCE PLAN',
            price: 140,
            features:["Mobile-optimized","Best Hoisting","Free Custom","Outstanding","Happy Customer"],
            bgImage: 'https://i.ibb.co/ymjLjSN/progression-img.jpg'
        },
        {
             
            title: 'BASIC PLAN',
            price : 120,
            features:["Mobile-optimized","Best Hoisting","Free Custom","Outstanding","Happy Customer"],
            bgImage: 'https://i.ibb.co/FDRGBnF/workout-img.jpg'
        },
        {
            title: 'BEGINERS PLAN',
            price : 90,
            features:["Mobile-optimized","Best Hoisting","Free Custom","Outstanding","Happy Customer"],
            bgImage: 'https://i.ibb.co/PGgRTTn/nutrition.jpg'
        }
    ]
    return (
        <div>
            <ShareHeader title= "PRICING PLAN"/>
            <div style={{textAlign:"center",padding:"30px 10px"}}>
            <h2> <span style={{color:"#FCD842"}}>CHOOSE THE OFER</span> THAT SUITS YOU</h2>
            <small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et non laborum, accusamus quibusdam earum illo.</small>
            </div>
               
            <Container style={{marginTop:"80px"}} id="services">
            <Row>
                {
                    ourTarget.map(item =>
                        <Col md={6} lg={4} style={{marginTop:"15px"}}>
                            
                                <Card style={{minHeight:"600px",backgroundPosition:"center",backgroundImage:`linear-gradient(rgba(0,0,0,.07),rgba(0,0,255,.07)),url(${item.bgImage})`,backgroundSize:"cover",color:"white",position:"relative"}}>
                                   
                                    <Card.Body style={{textAlign:"center"}}>
                                        <h5 style={{color:"#FCD842"}}>BILLED MONGTHLT</h5>
                                        <h2 style={{padding:"10px"}}>{item.title}</h2>
                                        <h1 style={{color:"#FCD842"}}>$ {item.price}</h1>
                                        {
                                            item.features.map(ft=>
                                                <h6> <TiTick/> {ft} </h6>
                                                )
                                        }
                                        <Link to="/membership">
                                         <Button variant="" style={{backgroundColor:"#FCD842",padding:"5px 25px"}} >Purchase</Button>
                                         </Link>
                                    </Card.Body>
                                  
                                </Card>
                          
                        </Col>

                    )
                }
            </Row>
        </Container>
            <Footer/>
        </div>
    );
};

export default Pricing;