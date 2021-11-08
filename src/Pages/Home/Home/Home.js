import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigationbar/Navigation';
import Banner from '../Banner/Banner';
import MiddleBanner from '../MiddleBanner/MiddleBanner';
import Services from '../Services/Services';
import Subscribe from '../Subscribe/Subscribe';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <MiddleBanner></MiddleBanner>
            <Testimonials></Testimonials>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default Home;