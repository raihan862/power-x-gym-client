import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Catagories = () => {
    const ourTarget = [
        {
            image: 'https://i.ibb.co/qNxmYQP/work-out.png',
            title: 'progression',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
            bgImage: 'https://i.ibb.co/ymjLjSN/progression-img.jpg'
        },
        {
            image: 'https://i.ibb.co/qNxmYQP/work-out.png',
            title: 'workout',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
            bgImage: 'https://i.ibb.co/FDRGBnF/workout-img.jpg'
        },
        {
            image: 'https://i.ibb.co/FHh63dN/nutrition.png',
            title: 'nutrition',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
            bgImage: 'https://i.ibb.co/PGgRTTn/nutrition.jpg'
        }
    ]
    return (
        <Container style={{marginTop:"80px"}} id="services">
            <Row>
                {
                    ourTarget.map(item =>
                        <Col md={6} lg={4} style={{marginTop:"15px"}}>
                            
                                <Card style={{minHeight:"400px",backgroundPosition:"100% 100%",backgroundImage:`linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.4)),url(${item.bgImage})`,backgroundSize:"cover",color:"white",position:"relative"}}>
                                   
                                    <Card.Body style={{ position:"absolute",top:"20%"}}>
                                    <img src={item.image} alt="" width="30%" minHeight="60px" style={{margin:"auto",padding:"10px"}}/>
                                        <h2 style={{padding:"10px"}}>{item.title}</h2>
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

export default Catagories;