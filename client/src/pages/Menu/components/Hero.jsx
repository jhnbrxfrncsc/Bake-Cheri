import React from 'react';
import useStyles from './heroStyles';
import { Box, Slide, Typography, Zoom } from '@material-ui/core';

const Hero = () => {
    const classes = useStyles();
    return (
        <Box className={classes.hero}>
            <Slide direction="down" in timeout={2000}>
                <Box
                    className={classes.heroImg}
                >
                    <Zoom 
                        in 
                        timeout={1000}
                        style={{ transitionDelay: '2s' }}
                    >
                        <Typography variant="h1" style={{ color: "#000" }}>
                            MENU
                        </Typography>
                    </Zoom>
                </Box>
            </Slide>
        </Box>
    )
}

export default Hero;
