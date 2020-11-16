import React from 'react';
import NavBar from '../../ShareComponents/Navbar/NavBar';

import { Button, Col, Container, Row } from 'react-bootstrap';
const Header = () => {
    const headerBG = "https://i.ibb.co/Y31Xbt7/header-BGCopy.jpg"
    return (
        <div style={{ minHeight: "900px", backgroundImage: `linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.5)),url(${headerBG})`, backgroundSize: "100% 100%",backgroundPosition:"100% " }}>
            <Container>
                <NavBar></NavBar>
                <Row style={{marginTop:"80px" ,textAlign:"left"}}>
                    <Col md={6} style={{color:"white",marginTop:"15px"}}>
                        <h1 style={{fontSize:"50px"}}>THE BEST FITNESS<br/> STUDIO IN TOWN</h1>
                        <p style={{padding:"20px 0px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ea dolor tempore quisquam soluta assumenda et architecto rem expedita illo. Qui vero adipisci dignissimos eaque quis soluta minus,
                        est recusandae?</p>
                        <Button variant="" style={{backgroundColor:"#FCD842" ,color: "black", padding: "8px 40px",fontSize:"20px", fontWeight:"800" }}>JOIN US</Button>
                    </Col>
                    
                    <Col md={6} style={{textAlign:"right",marginTop:"15px"}}>
                       <iframe width="450" height="350" src="https://www.youtube.com/embed/wnHW6o8WMas" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Header;