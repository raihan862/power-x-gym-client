import React, { useEffect, useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../ShareComponents/Footer/Footer';
import ShareHeader from '../ShareComponents/ShareHeader/ShareHeader';

const ClassDetail = () => {
     
    const { id } = useParams()
     const data = useSelector(state=>state.users)
  
     const details = data.filter(dt=>dt._id ==id)
     console.log(details);
    
     
    
    return (
        <div>
            <ShareHeader title={details[0].title.toUpperCase()}/>
            <div className="container m-5">
                <div className="row">
                    <div className="col-md-7">
                        <img src={details[0].image} width='80%' height="400px" alt="" />
                        <p className='pt-3'>{details[0].description}</p>
                        <ul>
                            <li>Having Slimmer Shapely Thighs</li>
                            <li>Getting Stronger Body</li>
                            <li>Increased Metabolism</li>
                            <li>Increase Muscular Endurance</li>
                            <li>Maximum Results in Less Time</li>
                            <li>Firm Hips and Tummy</li>
                        </ul>
                    </div>
                    <div className="col-md-5">
                        <Row>
                        {
                            details[0].schedules &&
                            details[0].schedules.map(day =>
                             <div className="col-md-6">
                                <div id="dateStyle"style={{marginTop:"15px",padding:"5px 10px",boxShadow: "5px 5px 10px rgba(0, 0, 0, .1),-5px -5px 10px rgba(255, 255, 255, 1)"}}>
                                    <h6 style={{ textTransform: 'uppercase' }}>{day.day}</h6>
                                    <p style={{color:"#FCD842"}}>{day.start} - {day.end}</p>
                                </div>
                            </div>)
                        }
                        </Row>
                        <Link to='/pricing'>
                        <Button variant="" style={{position:"absolute",bottom:"20px",left:"auto",padding:"10px 35px",backgroundColor:"#FCD842"}}><h6>JOIN US</h6></Button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ClassDetail;