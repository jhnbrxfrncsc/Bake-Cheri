import React, { useState, useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../redux/actions/products';

// MaterialUI
import {
    Typography,
    Grid,
    Box,
    CircularProgress,
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import useStyle from './productsStyles';
import CardItem from './CardItem';
import Filter from './Filter';

const Products = () => {
    const classes = useStyle();
    const dispatch = useDispatch();
    const selector = useSelector( state => state.products );

    // Pagination state
    const itemsPerPage = 9;
    const [page, setPage] = useState(1);
    const [data, setData] = useState(selector);
    const [loading, setLoading] = useState(false);
    const noOfPages = Math.ceil(data.length / itemsPerPage);
    
    useEffect(() => {
        let mounted = true;
        if(mounted) {
            dispatch(getProducts());
            setData(selector);
        }
        return () => {
            mounted = false;
        }
    }, [dispatch, selector]);

    const handleChange = (event, value) => {
        setLoading(false);
        setPage(value);
        setTimeout(() => {
            setLoading(true);
        }, 100);
    };
    
    const handleFilter = (name) => {
        const newItems = selector.filter(item => item.category.indexOf(name) >= 0);
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
                    data.length ? (
                    data
                    .slice((page - 1) * itemsPerPage, page * itemsPerPage)
                    .map((data) => {
                        return(
                        <Grid item xs={12} sm={6} md={4} key={data.id}>
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
                    ) : (
                        <Typography variant="h3">
                            <CircularProgress />
                        </Typography>
                    )
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
