import React from 'react';
import { Button } from '@material-ui/core';
import useStyles from './productsStyles';

const Filter = ({ name, onClick }) => {
    const classes = useStyles();
    return (
        <Button
            className={classes.filterBtn}
            variant="contained"
            size="medium"
            color="primary"
            onClick={onClick}
        >
            {name}
        </Button>
    )
}

export default Filter;