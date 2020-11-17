
import React, { useState } from 'react';
import ShareHeader from '../ShareComponents/ShareHeader/ShareHeader';
import Footer from '../ShareComponents/Footer/Footer'
import { Button, Card, Container } from 'react-bootstrap';
import { useEffect } from 'react';

const OurClasses = () => {
    const [classes, setClasses] = useState([])
    useEffect(() => {
        fetch('https://power-x-gym-server.herokuapp.com/classes')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])

    return (
        <div>
            <ShareHeader title='OUR CLASSES' />
            <Container className="p-4" style={{ paddingLeft: "70px", paddingRight: "70px" }}>
                <div className="row">
                    {
                        classes.map(singleClass=>  <div className="col-md-4">
                                                        <Card style={{ width: '20rem', height: "23rem" }}>
                                                            <Card.Img variant="top" style={{ height: "100%", width: '100%' }} src={singleClass.image} />
                                                            <Card.Body style={{ padding: 0 }}>
                                                                <Button className='classes-class' style={{ backgroundColor: '#fcd842', border: 'none', color: 'black', fontWeight: 800, width: '18rem', margin: 'auto', textAlign: 'center', textTransform: 'uppercase' }} variant="primary">Go somewhere</Button>
                                                            </Card.Body>
                                                        </Card>
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

