import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Services from '../Services/Services';
import Bikes from '../Upcoming/Bikes/Bikes';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Services></Services>
            <Bikes></Bikes>
        </div>
    );
};

export default Home;