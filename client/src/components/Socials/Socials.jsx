import React from 'react';
import { 
    Box,
    Grid,
    Link,
    Typography
} from '@material-ui/core';
import { useStyles } from './socialsStyle';

const Socials = () => {
    const classes = useStyles()
    return (
        <Box m={3}>
            <Typography
                align="center"
                variant="h4" 
                color="primary"
            >
                <span className={classes.title}>Follow Us</span>
            </Typography>
            <Box
                className={classes.divider}
            />
            <Grid container spacing={0} className={classes.gridContainer}>
                <Grid item xs={12} sm={4} className={classes.card}>
                    <Link 
                        href="#"
                    >
                        <Box className={classes.facebook}/>
                    </Link>
                </Grid>
                <Grid item xs={12} sm={4} className={classes.card}>
                    <Link 
                        href="#"
                    >
                        <Box className={classes.instagram}/>
                    </Link>
                </Grid>
                <Grid item xs={12} sm={4} className={classes.card}>
                    <Link href="#">
                        <Box className={classes.twitter} />
                    </Link>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Socials;
