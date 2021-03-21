import React from 'react';
import { Box, Typography } from '@material-ui/core';
import useStyles from './footerStyles';

const Footer = () => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Typography variant="h5" className={classes.font}>
                ©2017 BakeCheri™ All rights reserved.
            </Typography>
        </Box>
    )
}

export default Footer
