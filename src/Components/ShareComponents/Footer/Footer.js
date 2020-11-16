import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './footer.css'
import {FaYoutube,FaFacebook,FaInstagram,FaWhatsapp,FaTwitter} from 'react-icons/fa'
const Footer = () => {
    return (
        <div style={{backgroundColor:"#171426",marginTop:"80px"}}>
        <Container >
            <Row id="ui-list">
                <Col md={3}>
                <h1 style={{color:"white"}}>Power <span style={{color:"yellow"}}>X</span></h1>   
                </Col>
                <Col md={2}>
                    <h6>Need Help?</h6>
                    <ul>
                        <li>Help Center</li>
                        <li>Email Support</li>
                        <li>Live Chat</li>
                        <li>Gift Certification</li>
                        <li>Send Us Feedback</li>
                    </ul>
                </Col>
                <Col md={2}>
                <h6>Digital Resources</h6>
                    <ul>
                        <li>Articles</li>
                        <li>E-books</li>
                    </ul>
                </Col>
                <Col md={2}>
                <h6>Connect With Us</h6>
                    <div id="icons" style={{display:"flex",justifyContent:"space-between"}}>
                         <FaYoutube />
                         <FaFacebook/>
                         <FaInstagram/>
                         <FaTwitter/>
                         <FaWhatsapp/>
                    </div>
                    <h6>Form</h6>
                </Col>
                <Col md={2}>
                    <h6>Join Our NewsLatter</h6>
                    <small>GEt exclusive news,features, updates from the shredder weight Loss Academy </small>
                </Col>
            </Row>
            <div style={{color:"white",textAlign:"center",display:"block", marginTop:"60px"}}>
            <p style={{marginBottom:"0px",padding:"5px"}} >&copy; Copy Right Reserved</p>
            </div>
           
        </Container>
        </div>
    );
};

export default Footer;