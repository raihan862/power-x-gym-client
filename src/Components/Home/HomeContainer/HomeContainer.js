import React from 'react';
import Footer from '../../ShareComponents/Footer/Footer';

import AboutUs from '../AboutUs/AboutUs';
import Catagories from '../Catagories/Catagories';
import Header from '../Header/Header';
import TrainingPrograms from '../TrainingPrograms/TrainingPrograms';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const HomeContainer = () => {
    return (
        <div>
            <Header></Header>
            <Catagories></Catagories>
            <AboutUs></AboutUs>
            <TrainingPrograms></TrainingPrograms>
            <WhyChooseUs></WhyChooseUs>
            <Footer></Footer>
          
        </div>
    );
};

export default HomeContainer;