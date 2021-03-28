import React from 'react';
import useStyle from './BestSellersStyles';
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
    IconButton,
} from '@material-ui/core';
import { FaCartPlus } from 'react-icons/fa';

const CardItem = ({name, title, image}) => {
    const classes = useStyle();
    return(
        <Card>
                <CardActionArea>
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
                </CardMedia>
                    <CardContent style={{ backgroundColor: "#f8bbd0" }}>
                        <Typography 
                            align="center"
                            variant="h6" 
                            component="h2" 
                            className={classes.font2}
                        >
                            {name.toUpperCase()}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
    )
}

export default CardItem
