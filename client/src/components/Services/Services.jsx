import React, { useState } from 'react';
import { 
    Box,
    Grid,
    Grow,
    Slide,
    Typography
} from '@material-ui/core';
import useStyles from './servicesStyles';
import serviceData from '../../assets/data/serviceData';


const Services = () => {
    const classes = useStyles();
    const [animation, setAnimation] = useState(false);
    
    const handleAnimation = () => {
        const scrollDown = window.scrollY;
        if(scrollDown >= 200){
            setAnimation(true);
        } 
    };

    window.addEventListener('scroll', handleAnimation);
    return (
        <Box
            m={1}
            p={3}
            className={classes.root}
        >
            <Slide direction="left" in={animation} timeout={3000}>
                <Typography
                    align="center"
                    variant="h4" 
                    color="primary"
                    className={classes.font1}
                >
                    our <span className={classes.title}>Services</span>
                </Typography>
            </Slide>
            <Slide direction="right" in={animation} timeout={3000}>
                <Box
                    className={classes.divider}
                />
            </Slide>
            <Grid 
                container
                spacing={2}
                className={ classes.gridContainer }
            >
            {
                serviceData.map((data, index) => {
                    return(
                        <Grow 
                            in={animation} 
                            timeout={1000} 
                            style={{ 
                                transitionDelay:  window.innerWidth >= 800 ? '1s' : `${index+1}s`
                            }}
                        >
                            <Grid 
                                item 
                                xs={12} 
                                sm={6}
                                className={classes.card}
                                key={index}
                            >
                                <Box
                                    className={classes.serviceImg}
                                    style={{ backgroundImage: `url(${data.image})` }}
                                />
                                <Box
                                    className={classes.rightSide}
                                >
                                    <Typography 
                                        variant="h4" 
                                        color="primary"
                                        className={classes.font3}
                                        style={{ margin: 0 }}
                                    >
                                        { data.name }
                                    </Typography>
                                    <Typography 
                                        variant="h6" 
                                        color="secondary"
                                        className={classes.font3}
                                    >
                                        { data.description }
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grow>
                    )
                })
            }
            </Grid> 
        </Box>
    )
}

export default Services;