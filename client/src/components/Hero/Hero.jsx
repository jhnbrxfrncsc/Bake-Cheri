import React from 'react';
import useStyles from './heroStyles';
import { Box, Slide } from '@material-ui/core';

const Hero = () => {
    const classes = useStyles();
    return (
        <Box className={classes.hero}>
            <Slide direction="down" in timeout={3000}>
                <Box
                    className={classes.heroImg}
                />
            </Slide>
        </Box>
    )
}

export default Hero;
