import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Product = (props) => {
    const { name, img, price, description } = props.product;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, border: 1, borderColor: 'grey.500', borderRadius: 1, boxShadow: 3 }}>
                <CardMedia
                    component="img"
                    style={{ width: '310px', height: '165px', margin: '0 auto' }}
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography sx={{ color: 'success.main' }} variant="h6" component="div">
                        {name}
                    </Typography>
                    <Typography sx={{ color: 'success.main' }} variant="h6" component="div">
                        {price}
                    </Typography>
                    <Typography variant="body2">
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Product;