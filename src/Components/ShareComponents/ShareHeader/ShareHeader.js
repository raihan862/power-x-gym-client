import React from 'react';
import NavBar from '../Navbar/NavBar';

import { Button, Col, Container, Row } from 'react-bootstrap';
const ShareHeader = (props) => {
    const headerBG = "https://i.ibb.co/Y31Xbt7/header-BGCopy.jpg"
    return (

        <div style={{ minHeight: "300px", backgroundImage: `linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.5)),url(${headerBG})`, backgroundSize: "cover",backgroundPosition:"100% " }}>
            <Container>
                <NavBar />
                <div style={{display:"block",margin:"auto",marginTop:"80px",textAlign:"center"}}>
    <h1 style={{fontSize:"50px",color:"white"}}>{props.title}</h1>
                </div>
            </Container>

        </div>
    );
};

export default ShareHeader;