import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Product from '../Product/Product';

const products = [
    {
        id: 1,
        img: "https://i.ibb.co/gT68C7b/222.jpg",
        name: "CALFEE BAMBOO BICYCLE FRAMES",
        price: "$100.00",
        description: "an interval of time during which a sequence of a recurring succession of events or phenomena is completed"
    },
    {
        id: 2,
        img: "https://i.ibb.co/gT68C7b/222.jpg",
        name: "CANONDALE MOUNTAIN BIKE",
        price: "$580.00",
        description: "an interval of time during which a sequence of a recurring succession of events or phenomena is completed"
    },
    {
        id: 3,
        img: "https://i.ibb.co/gT68C7b/222.jpg",
        name: "LIFECYCLE MOUNTAIN SPORT ELECTRIC BIKE",
        price: "$490.00",
        description: "an interval of time during which a sequence of a recurring succession of events or phenomena is completed"
    },
    {
        id: 4,
        img: "https://i.ibb.co/gT68C7b/222.jpg",
        name: "LIFECYCLE STREET SPORT ELECTRIC BIKE",
        price: "$210.00",
        description: "an interval of time during which a sequence of a recurring succession of events or phenomena is completed"
    },
    {
        id: 5,
        img: "https://i.ibb.co/gT68C7b/222.jpg",
        name: "FELT B14 2012",
        price: "$310.00",
        description: "an interval of time during which a sequence of a recurring succession of events or phenomena is completed. A bicycle rider is called a cyclist, or bicyclist."
    },
    {
        id: 6,
        img: "https://i.ibb.co/gT68C7b/222.jpg",
        name: "MANTIS ORCHID FULL SUSPENSION",
        price: "$390.00",
        description: "an interval of time during which a sequence of a recurring succession of events or phenomena is completed"
    },
    {
        id: 7,
        img: "https://i.ibb.co/gT68C7b/222.jpg",
        name: "MERAX FINISS 26 ALUMINUM 21 SPEED",
        price: "$180.00",
        description: "an interval of time during which a sequence of a recurring succession of events or phenomena is completed"
    },
    {
        id: 8,
        img: "https://i.ibb.co/gT68C7b/222.jpg",
        name: "MONGOOSE MEN'S STATUS 2.2",
        price: "$350.00",
        description: "an interval of time during which a sequence of a recurring succession of events or phenomena is completed"
    },
    {
        id: 9,
        img: "https://i.ibb.co/gT68C7b/222.jpg",
        name: "THE RANGER 3.0",
        price: "$520.00",
        description: "an interval of time during which a sequence of a recurring succession of events or phenomena is completed. A bicycle rider is called a cyclist, or bicyclist."
    }
]

const Products = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, m: 3 }} variant="h4" component="div">
                    POPULAR IN STORE
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        products.map(product => <Product
                            key={product.name}
                            product={product}
                        ></Product>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Products;