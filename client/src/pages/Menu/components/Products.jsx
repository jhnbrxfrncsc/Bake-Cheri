import React, { useState } from 'react';
import {
    Typography,
    Grid,
    Box,
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import useStyle from './productsStyles';
import CardItem from './CardItem';
import Filter from './Filter';

import menuData from '../../../assets/data/menuData';

const Products = () => {
    const classes = useStyle();
    const itemsPerPage = 9;
    const [page, setPage] = useState(1);
    const [data, setData] = useState(menuData);
    const [loading, setLoading] = useState(false);
    const noOfPages = Math.ceil(data.length / itemsPerPage);

    const handleChange = (event, value) => {
        setLoading(false);
        setPage(value);
        setTimeout(() => {
            setLoading(true);
        }, 2000);
    };
    
    const handleFilter = (name) => {
        const newItems = menuData.filter(item => item.category.indexOf(name) >= 0);
        setLoading(false);
        setData(newItems);
        setPage(1);
        setTimeout(() => {
            setLoading(true);
        }, 1000);
    }


    return (
        <Box m={3} className={classes.center}>
            <Typography 
                variant="h4"
                color="primary" 
                align="center"
                gutterBottom
                className={classes.font1}
            >
                OUR <span id="best-sellers" className={classes.title}> PRODUCTS </span>
            </Typography>
            <Box m={3} className={classes.filterWrapper}>
                <Filter name="All" onClick={() => handleFilter("All")} />
                <Filter name="Cakes" onClick={() => handleFilter("Cakes")} />
                <Filter name="Cupcakes" onClick={() => handleFilter("Cupcakes")} />
                <Filter name="Doughnuts" onClick={() => handleFilter("Doughnuts")} />
                <Filter name="Sweets" onClick={() => handleFilter("Sweets")} />
            </Box>
            <Grid container spacing={4} alignItems="center" justify="center">
                {
                    data
                    .slice((page - 1) * itemsPerPage, page * itemsPerPage)
                    .map((data, index) => {
                        return(
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <CardItem 
                                name={data.name} 
                                title={data.name} 
                                price={data.price} 
                                image={data.image} 
                                loading={loading}
                                setLoading={setLoading}
                            />
                        </Grid>
                        )
                    })
                }
            </Grid>
            <Box className={classes.pagination}>
                <Pagination 
                    count={noOfPages}
                    page={page}
                    color="primary" 
                    onChange={handleChange}
                    defaultPage={1}
                    showFirstButton 
                    showLastButton
                />
            </Box>
        </Box>
    )
}

export default Products;
