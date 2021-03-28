import React, { useState } from 'react';
import { 
    Box,
    Collapse,
    Grid,
    Grow,
    Slide,
    Typography
} from '@material-ui/core';
import useStyles from './deliveryStyles';
import deliveryData from '../../assets/data/deliveryData';

const Services = () => {
    const classes = useStyles();
    const [animation, setAnimation] = useState(false);
    
    const handleAnimation = () => {
        const scrollDown = window.scrollY;
        if(scrollDown >= 620){
            setAnimation(true);
        } 
    };

    window.addEventListener('scroll', handleAnimation );
    return (
        <Collapse in={animation} timeout={2000}>
            <Box
                p={3}
                className={classes.root}
            >
                <Slide 
                    direction="right" 
                    in={animation} 
                    timeout={3000}
                >
                    <Typography
                        align="center"
                        variant="h4"
                        className={classes.font1}
                    >
                        How to get yours <span className={classes.title}>Delivered</span>
                    </Typography>
                </Slide>
                <Slide 
                    direction="left" 
                    in={animation} 
                    timeout={3000}
                >
                    <Box
                        className={classes.divider}
                    />
                </Slide>
                <Grid 
                    container
                    spacing={5}
                    className={ classes.gridContainer }
                >
                {
                    deliveryData.map((data, index) => {
                        return(
                            <Grow 
                                in={animation} 
                                timeout={1000} 
                                style={{ transitionDelay: `${index + 1}s` }}
                                key={index}
                            >
                                <Grid 
                                    item 
                                    xs={12}
                                    md={4}
                                    className={classes.card}
                                    key={index}
                                >
                                    <Box
                                        className={classes.serviceImg}
                                    > {data.icon} </Box>
                                    <Typography 
                                        variant="h4" 
                                        align="center"
                                        className={classes.font3}
                                        style={{ color: "#f8bbd0" }}
                                    >
                                        { data.name }
                                    </Typography>
                                    <Typography 
                                        variant="h6" 
                                        className={classes.font3}
                                        align="center"
                                        style={{ fontSize: "1em", color: "#e5ceff" }}
                                    >
                                        { data.description }
                                    </Typography>
                                </Grid>
                            </Grow>
                        )
                    })
                }
                </Grid> 
            </Box>
        </Collapse>
    )
}

export default Services;