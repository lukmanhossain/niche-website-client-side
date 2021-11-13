import React from 'react';
import Review from '../../DashBoard/Review/Review';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Services from '../Services/Services';
import Bikes from '../Upcoming/Bikes/Bikes';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <Bikes></Bikes>
            <Review></Review>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;