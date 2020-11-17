import React from 'react';
import "../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";
import ourClasses from '../../../Data';
import { Col, Container, Row } from 'react-bootstrap';

import Slider from "react-slick";
import { Link } from 'react-router-dom';
import './traning.scss'
const TrainingPrograms = () => {
    const data = [
        {
            title: "CARDIO TRANING",
            image: "https://i.ibb.co/0F2PW89/chest-min.jpg"
        },
        {
            title: "YOGA TRANING SESSION",
            image: "https://i.ibb.co/NtGQ5tw/youga.png"
        }
    ]
    return (
        <Container style={{ marginTop: "60px",textAlign:"center" }}>
            <h1 style={{ padding: "20px" }}>TRAINING <span className="spanStyle"  >PROGRAMS</span> </h1>
            <Row>
                {
                    data.map(dt =>
                        <Col md={6}>
                            <Link to="/classes" >
                                <div style={{ position: "relative" }} >
                                    <h2 id="traningTitle"> {dt.title} </h2>
                                    <img src={dt.image} width="100%" height="500px" style={{ padding: "10px" }} />

                                </div>
                            </Link>
                        </Col>
                    )
                }
            </Row>
        </Container>
    );
};

export default TrainingPrograms;