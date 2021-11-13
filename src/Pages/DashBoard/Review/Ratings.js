import React from 'react';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';
import Rating from 'react-rating';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

const Ratings = (props) => {
    const { img, name, description } = props.ratings;
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ p: 3 }} >
                <Avatar
                    alt="Remy Sharp"
                    src={img}
                    sx={{ width: 60, height: 60, ml: 12 }}
                />
                <Typography sx={{ color: 'info.main', fontWeight: 500 }} variant="h6" gutterBottom component="div">
                    {name}
                </Typography>
                <Typography variant="body2" gutterBottom component="div">
                    {description}
                </Typography>
                <Rating
                    initialRating={4.5}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly></Rating>
            </Paper>
        </Grid>

    );
};

export default Ratings;