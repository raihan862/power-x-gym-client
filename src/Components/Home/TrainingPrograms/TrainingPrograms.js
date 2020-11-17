import React from 'react';
import "../../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";
import ourClasses from '../../../Data';
import { Container, Row } from 'react-bootstrap';
import { settings } from './setting';
import Slider from "react-slick";
const TrainingPrograms = () => {
  const  data = ourClasses.slice(0,4)
    return (
        <Container style={{marginTop:"60px"}}>
            <h1 style={{padding:"20px"}}>TRAINING <span style={{color:"#FCD842"}}>PROGRAMS</span> </h1>
             <Slider {...settings}>
            {
                data.map(dt=>
                    <div style={{position:"relative"}} >
                    <h1 style={{position:"absolute",backgroundColor:"#FCD842",padding:"10px",bottom:"40px",marginLeft:"10px"}}> {dt.title} </h1>
                    <img src={dt.image} width="100%" height="500px" style={{padding:"10px"}}/>
                       
                    </div>
                    )
            }
            </Slider>
            
        </Container>
    );
};

export default TrainingPrograms;