import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Bike from '../Bike/Bike';


const bikes = [
    {
        img: "https://i.ibb.co/gT68C7b/222.jpg",
        name: "Tune-ups & Builds",
        price: "$120",
        description: "an interval of time during which a sequence of a recurring succession of events or phenomena is completed"
    },
    {
        img: "https://i.ibb.co/gT68C7b/222.jpg",
        name: "Adjust & Install",
        price: "$150",
        description: "an interval of time during which a sequence of a recurring succession of events or phenomena is completed"
    },
    {
        img: "https://i.ibb.co/gT68C7b/222.jpg",
        name: "Personal bike fit",
        price: "$110",
        description: "an interval of time during which a sequence of a recurring succession of events or phenomena is completed"
    },
    {
        img: "https://i.ibb.co/gT68C7b/222.jpg",
        name: "Free Delivery",
        price: "$140",
        description: "an interval of time during which a sequence of a recurring succession of events or phenomena is completed"
    },
    {
        img: "https://i.ibb.co/gT68C7b/222.jpg",
        name: "Free Delivery",
        price: "$130",
        description: "an interval of time during which a sequence of a recurring succession of events or phenomena is completed"
    },
    {
        img: "https://i.ibb.co/gT68C7b/222.jpg",
        name: "Free Delivery",
        description: "an interval of time during which a sequence of a recurring succession of events or phenomena is completed"
    }
]

const Bikes = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ color: 'secondary.main', fontWeight: 600, }} variant="h5" component="div">
                    Our Upcoming Cycles
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