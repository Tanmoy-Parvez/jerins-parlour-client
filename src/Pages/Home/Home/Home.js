import React from 'react';
import Navigation from '../../Shared/Navigationbar/Navigation';
import Banner from '../Banner/Banner';
import MiddleBanner from '../MiddleBanner/MiddleBanner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <MiddleBanner></MiddleBanner>

        </div>
    );
};

export default Home;