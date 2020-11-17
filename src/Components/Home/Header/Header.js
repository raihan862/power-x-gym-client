import React from 'react';
import NavBar from '../../ShareComponents/Navbar/NavBar';

import './header.scss'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () => {
    
    return (
        <div id="header-container" >
            <Container>
                <NavBar></NavBar>
                <Row style={{marginTop:"80px" ,textAlign:"left"}}>
                    <Col md={6} id="colStyle">
                        <h1 style={{fontSize:"50px"}}>THE BEST FITNESS<br/> STUDIO IN TOWN</h1>
                        <p style={{padding:"20px 0px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ea dolor tempore quisquam soluta assumenda et architecto rem expedita illo. Qui vero adipisci dignissimos eaque quis soluta minus,
                        est recusandae?</p>
                        <Link to="/pricing">
                        <Button variant="" id="joinusBtn">JOIN US</Button>
                        </Link>
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