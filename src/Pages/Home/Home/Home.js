import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Bikes from '../Upcoming/Bikes/Bikes';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Bikes></Bikes>
            <Services></Services>
        </div>
    );
};

export default Home;