
import React, { useState } from 'react';
import ShareHeader from '../ShareComponents/ShareHeader/ShareHeader';
import Footer from '../ShareComponents/Footer/Footer'
import { Button, Card, Container } from 'react-bootstrap';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { featchUser } from '../../Redux/Action/Action';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const OurClasses = () => {
    const classes = useSelector(state => state.users)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(featchUser())
    }, [])
    const history = useHistory()
    return (
        <div>
            <ShareHeader title='OUR CLASSES' />
            <Container className="p-4" style={{ paddingLeft: "70px", paddingRight: "70px" }}>
                <div className="row">
                    {
                        classes.map(singleClass =>
                         <div className="col-md-4 mb-4">
                              <Link to ={`/classes/detail/${singleClass._id}`}>
                            <Card style={{ width: '20rem', height: "23rem", position: "relative" }}  >
                                <Card.Img variant="top" style={{ height: "100%", width: '100%' }} src={singleClass.image} />
                                <Card.Body style={{ padding: 0 }}>
                                    <Button className='classes-class py-2' style={{ backgroundColor: '#fcd842', border: 'none', color: 'black', fontWeight: 800, width: '18rem', margin: 'auto', textAlign: 'center', textTransform: 'uppercase', position: 'absolute', bottom: '-15px', right: '15px' }} variant="primary">{singleClass.title}</Button>
                                </Card.Body>
                            </Card>
                            </Link>
                        </div>
                        )
                    }
                </div>
            </Container >
            <Footer />
        </div >
    );
};

export default OurClasses;

