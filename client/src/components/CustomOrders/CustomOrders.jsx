import React, { useState } from 'react';
import useStyles from './styles';
import { Box, Button, Collapse, Typography } from '@material-ui/core';

const CustomOrders = () => {
    const classes = useStyles();
    const [animation, setAnimation] = useState(false);

    const handleAnimation = () => {
        if(window.scrollY >= 900){
            setAnimation(true)
        }
    }
    
    window.addEventListener('scroll', handleAnimation)
    return (
        <Box m={3}>
            <Collapse in={animation} timeout={2000}>
                <Box className={classes.root}>
                    <Typography 
                        variant="h4"
                        color="primary"
                        align="center"
                        className={classes.font1}
                        >
                        Custom Orders?
                    </Typography>
                    <Typography 
                        variant="h5"
                        color="primary"
                        align="center"
                        className={classes.font3}
                        >
                        Would you like to place a Custom Order or have a special request? 
                    </Typography>
                    <Button 
                        variant="contained"
                        color="secondary"
                        size="small"
                        className={classes.btn}
                        >
                        Get a quote
                    </Button>
                </Box>
            </Collapse>
        </Box>
    )
}

export default CustomOrders;
