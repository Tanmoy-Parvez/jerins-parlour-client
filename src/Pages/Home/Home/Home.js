import React from 'react';
import Navigation from '../../Shared/Navigationbar/Navigation';
import Banner from '../Banner/Banner';
import MiddleBanner from '../MiddleBanner/MiddleBanner';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <MiddleBanner></MiddleBanner>
            <Testimonials></Testimonials>

        </div>
    );
};

export default Home;