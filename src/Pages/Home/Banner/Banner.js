import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Grid } from '@mui/material';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: 'SPORT ELECTRIC BIKE',
        imgPath:
            'https://i.ibb.co/LNYhSh4/1.jpg',
    },
    {
        label: 'FELT B14 2018',
        imgPath:
            'https://i.ibb.co/BKDgL76/3.jpg',
    },
    {
        label: 'MANTIS FULL SUSPENSION',
        imgPath:
            'https://i.ibb.co/3vvctG4/3.jpg',
    },
    {
        label: 'FELT B14 2012',
        imgPath:
            'https://i.ibb.co/rx0W7L7/4.jpg',
    },
    {
        label: 'THE RANGER 3.0',
        imgPath:
            'https://i.ibb.co/zrzhW1P/5.jpg',
    },
];

const Banner = () => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Grid container spacing={2} sx={{ mt: 1, bgcolor: '#f3e5f5', color: 'white' }}>
            <Grid item xs={12} md={5} sx={{ px: 2 }}>
                <Typography variant="h4" sx={{ fontSize: 30, color: 'black', marginY: 3 }}>
                    Oop! Look Street Bicycle
                </Typography>
                <Typography variant="h6" sx={{ fontSize: 16, fontWeight: 380, color: 'black', marginBottom: 1, padding: 2 }}>
                    An interval of time during which a sequence of a recurring succession of events or phenomena is completed. A bicycle, also called a bike or cycle, is a human-powered or motor-powered, pedal-driven, single-track vehicle, having two wheels attached to a frame, one behind the other. A bicycle rider is called a cyclist, or bicyclist.
                </Typography>
            </Grid>
            <Grid item xs={12} md={7} sx={{ maxWidth: 400, flexGrow: 1, border: 1, borderColor: 'grey.500', borderRadius: 1, bgcolor: '#e8eaf6' }}>
                <Paper
                    square
                    elevation={0}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        height: 50,
                        marginX: 1,
                        pl: 3,
                        borderRadius: 1,
                        bgcolor: 'background.default',
                    }}
                >
                    <Typography>{images[activeStep].label}</Typography>
                </Paper>
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                    {images.map((step, index) => (
                        <div key={step.label}>
                            {Math.abs(activeStep - index) <= 2 ? (
                                <Box
                                    component="img"
                                    sx={{
                                        height: 255,
                                        display: 'block',
                                        maxWidth: 599,
                                        overflow: 'hidden',
                                        width: '100%',
                                        borderRadius: 3,
                                        padding: 1,
                                    }}
                                    src={step.imgPath}
                                    alt={step.label}
                                />
                            ) : null}
                        </div>
                    ))}
                </AutoPlaySwipeableViews>
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    sx={{
                        marginX: 1,
                        borderRadius: 1,
                        marginBottom: 1,
                    }}
                    nextButton={
                        <Button
                            size="small"
                            onClick={handleNext}
                            disabled={activeStep === maxSteps - 1}
                        >
                            Next
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowLeft />
                            ) : (
                                <KeyboardArrowRight />
                            )}
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowRight />
                            ) : (
                                <KeyboardArrowLeft />
                            )}
                            Back
                        </Button>
                    }
                />
            </Grid>

        </Grid >
    );
};

export default Banner;