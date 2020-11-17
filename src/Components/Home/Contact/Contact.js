import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

import './contact.css'
import emailjs from 'emailjs-com';
import { MdEmail, MdPhone } from 'react-icons/md'
import { FaPhoneSquareAlt } from 'react-icons/fa'
import ShareHeader from '../../ShareComponents/ShareHeader/ShareHeader';
import Footer from '../../ShareComponents/Footer/Footer';

const Contact = () => {

    const handleSubmit = e => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_4fhg0yh', e.target, 'user_6Cd8fAzxIjUKjzbH4qyzj')
            .then((result) => {
                console.log(result.text);
                alert("Thank You for your message, i will replay you as soon as possible")
                e.target.reset()
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div>
            <ShareHeader title="Contact Us"></ShareHeader>
            <footer id="contact" className="footerSection">
                
                <Container id="container">

                    <Row  >
                        <Col sm={12} md={6} style={{  display: "flex", alignItems: "center" }} >
                            <div>
                                <h1 id="h1Style">Let me build a beautiful website For You</h1>

                            </div>
                        </Col>
                        <Col sm={12} md={6} id="form">
                         
                            
                            <div id="iconContainer">
                                <h6 style={{  textAlign: "left" }}><FaPhoneSquareAlt className="contactIcon" /> +880 1766034162 </h6>
                                <h6 style={{  textAlign: "left" }}><MdEmail className="contactIcon" />  raihankabir862@gmail.com </h6>
                            </div>

                            <Form style={{ margin: "auto" }} className="userForm" onSubmit={handleSubmit}>
                                <Form.Group controlId="exampleForm.ControlInput1">

                                    <Form.Control type="text" placeholder="name" name="name" required />
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlType">

                                    <Form.Control type="email" placeholder="email" name="email" required>

                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlTextarea1">

                                    <Form.Control as="textarea" rows={6} name="message" required />
                                </Form.Group>
                                <Button variant="primary"  type="submit" style={{ margin: "auto", width: "150px", display: "block", marginBottom: "20px" }}>Submit</Button>
                            </Form>
                            
                        </Col>
                    </Row>

                    
                </Container>
            </footer>
            <div style={{marginTop:"-80px"}}>
            <Footer ></Footer>
            </div>
        
        </div>
    );
};

export default Contact;