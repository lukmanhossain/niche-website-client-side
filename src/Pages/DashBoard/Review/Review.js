import { Grid, Typography } from '@mui/material';
import React from 'react';
import { Container } from 'react-bootstrap';
import Ratings from './Ratings';
import './Review.css';

const rating = [
    {
        img: "https://i.ibb.co/bgYbdZ6/1.jpg",
        name: "Micel knee",
        description: "Very Satisfy with Your's Products and Services"
    },
    {
        img: "https://i.ibb.co/ZJGjcCZ/2.jpg",
        name: "kiff Roff",
        description: "Good Products & satisfy with your's Products"
    },
    {
        img: "https://i.ibb.co/kKgFs1J/3.jpg",
        name: "Zooke",
        description: "Good Products & Well Services. Best of luck"
    }
]

const Review = () => {
    return (
        <Container>
            <Typography sx={{ color: 'secondary.main', fontWeight: 500, mt: 3, mb: 1 }} variant="h5" component="div">
                Our Review Section
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    rating.map(ratings => <Ratings
                        key={ratings.name}
                        ratings={ratings}
                    ></Ratings>)
                }
            </Grid>
        </Container>
    );
};

export default Review;