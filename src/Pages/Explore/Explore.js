import React from 'react';
import { Container } from '@mui/material';
import Products from '../Home/Products/Products';
import Navigation from '../Shared/Navigation/Navigation';

const Explore = () => {
    return (
        <Container>
            <Navigation></Navigation>
            <Products></Products>
        </Container>
    );
};

export default Explore;