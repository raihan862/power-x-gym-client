import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Catagories from '../Catagories/Catagories';
import Header from '../Header/Header';
import TrainingPrograms from '../TrainingPrograms/TrainingPrograms';

const HomeContainer = () => {
    return (
        <div>
            <Header></Header>
            <Catagories></Catagories>
            <AboutUs></AboutUs>
            <TrainingPrograms></TrainingPrograms>
        </div>
    );
};

export default HomeContainer;