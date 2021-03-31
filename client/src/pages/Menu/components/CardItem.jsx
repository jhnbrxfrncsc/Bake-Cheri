import React, {  useEffect } from 'react';
import useStyle from './productsStyles';
import Skeleton from '@material-ui/lab/Skeleton';
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
    IconButton,
    Box,
} from '@material-ui/core';
import { FaCartPlus } from 'react-icons/fa';

const CardItem = ({ name, title, price, image, loading, setLoading }) => {
    const classes = useStyle();

    useEffect(()=> {
        setTimeout(() => {
            setLoading(true);
        }, 5000);
    }, [setLoading])
    return(
        <Card>
                <CardActionArea>
                    {
                        !loading ? (
                            <Skeleton animation="wave" variant="rect" className={classes.media} />
                        ) : (
                            <CardMedia
                                className={classes.media}
                                image={image}
                                title={title}
                            >
                                <IconButton 
                                    aria-label="add to cart" 
                                    component="span"
                                    className={classes.iconBtn}
                                >
                                    <FaCartPlus />
                                </IconButton>
                                <Box className={classes.price}>
                                    <Typography className={classes.priceTxt}>
                                        ₱{price}
                                    </Typography>
                                </Box>
                            </CardMedia>
                        )
                    }
                    <CardContent style={{ backgroundColor: "#f8bbd0" }}>
                        {
                            !loading ? (
                                <Skeleton animation="wave" height={10} />
                            ) : (
                                <Typography 
                                    align="center"
                                    variant="h6" 
                                    component="h2" 
                                    className={classes.font2}
                                >
                                    {name}
                                </Typography>
                            )
                        }
                    </CardContent>
                </CardActionArea>
            </Card>
    )
}

export default CardItem
