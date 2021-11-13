import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Bike from '../Bike/Bike';


const bikes = [
    {
        img: "https://i.ibb.co/S3BM3Jy/1.jpg",
        name: "DALE MOUNTAIN BIKE",
        price: "$580.00",
        description: "an interval of time during which a sequence of a recurring succession of events or phenomena is completed"
    },
    {
        img: "https://i.ibb.co/QnbhCjz/2.jpg",
        name: "SPORT ELECTRIC BIKE",
        price: "$210.00",
        description: "an interval of time during which a sequence of a recurring succession of events or phenomena is completed"
    },
    {
        img: "https://i.ibb.co/BKDgL76/3.jpg",
        name: "FELT B14 2012",
        price: "$310.00",
        description: "an interval of time during which a sequence of a recurring succession of events or phenomena is completed"
    },
    {
        img: "https://i.ibb.co/Tb5SBC6/4.jpg",
        name: "JAPANY MOUNTAIN BIKE",
        price: "$520.00",
        description: "an interval of time during which a sequence of a recurring succession of events or phenomena is completed"
    },
    {
        img: "https://i.ibb.co/6X7RrMN/5.jpg",
        name: "MANTIS FULL SUSPENSION",
        price: "$390.00",
        description: "an interval of time during which a sequence of a recurring succession of events or phenomena is completed"
    },
    {
        img: "https://i.ibb.co/2tGs8B7/6.jpg",
        name: "THE RANGER 3.0",
        price: "$520.00",
        description: "an interval of time during which a sequence of a recurring succession of events or phenomena is completed"
    }
]

const Bikes = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ color: 'secondary.main', fontWeight: 600, m: 3 }} variant="h5" component="div">
                    Upcoming Cycles
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        bikes.map(bike => <Bike
                            key={bike.name}
                            bike={bike}
                        ></Bike>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Bikes;