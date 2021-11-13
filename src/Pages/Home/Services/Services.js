import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Service from '../Service/Service';


const services = [
    {
        img: "https://i.ibb.co/ZB0hDSp/1.jpg",
        name: "Tune-ups & Builds",
        description: "an interval of time during which a sequence of a recurring succession of events or phenomena is completed"
    },
    {
        img: "https://i.ibb.co/6874jy2/all-single-parts-components-of-blue-black-modern-aerodynmic-carbon-fiber-racing-sport-road-bike-bicy.jpg",
        name: "Complete Overhaul",
        description: "an interval of time during which a sequence of a recurring succession of events or phenomena is completed"
    },
    {
        img: "https://i.ibb.co/28W1LNq/2.jpg",
        name: "Custom parts & Accessories",
        description: "an interval of time during which a sequence of a recurring succession of events or phenomena is completed"
    },
    {
        img: "https://i.ibb.co/qkZ63wS/3.jpg",
        name: "Parts Modify",
        description: "an interval of time during which a sequence of a recurring succession of events or phenomena is completed"
    },
    {
        img: "https://i.ibb.co/P9vgKxs/2.jpg",
        name: "Cycle fitting and Delivery",
        description: "an interval of time during which a sequence of a recurring succession of events or phenomena is completed"
    }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ color: 'secondary.main', fontWeight: 500, m: 3 }} variant="h5" component="div">
                    Cycle Services we provide & Repairing
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;