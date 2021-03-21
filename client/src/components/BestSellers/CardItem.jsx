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

const CardItem = ({name, title, title2, image}) => {
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
                        {/* <Typography 
                            variant="caption" 
                            color="textSecondary" 
                            component="p" 
                            style={{ color: "#808080" }}
                        >
                            {title2}
                        </Typography> */}
                    </CardContent>
                </CardActionArea>
                {/* <CardActions className={classes.actions}>
                    <Button size="small" color="" variant="outlined">
                        Share
                    </Button>
                    <Button size="small" color="secondary" variant="contained">
                        Learn More
                    </Button>
                </CardActions> */}
            </Card>
    )
}

export default CardItem
