import React,{ useState } from 'react';
import {
    Typography,
    Grid,
    Box,
    Slide,
    Grow,
    Fade
} from '@material-ui/core';
import useStyle from './BestSellersStyles';
import CardItem from './CardItem';
import image1 from '../../assets/img/cake-5.jpg';
import image2 from '../../assets/img/cake-6.jpg';
import image3 from '../../assets/img/header-2.jpg';


const Products = () => {
    const classes = useStyle();
    const [animation, setAnimation] = useState(false)

    const handleAnimation = () => {
        if(window.scrollY >= 1200) {
            setAnimation(true)
        }
    }

    window.addEventListener('scroll', handleAnimation);
    return (
        <Box m={3}>
            <Slide direction="right" in={animation} timeout={2000}>
                <Typography 
                    variant="h4"
                    color="primary" 
                    align="center"
                    gutterBottom
                    className={classes.font1}
                >
                    OUR <span id="best-sellers" className={classes.title}> BEST SELLERS </span>
                </Typography>
            </Slide>
            <Slide direction="left" in={animation} timeout={2000}>
                <Box
                    className={classes.divider}
                />
            </Slide>
            <Fade in={animation} timeout={3000}>
                <Grid container spacing={4} alignItems="center" justify="center">
                        <Grid item xs={12} sm={6} md={4}>
                            <CardItem name="Chocolate Cake" title="Chocolate Cake" image={image1} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <CardItem name="Rainbow Cake" title="Rainbow Cake"  image={image2} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <CardItem name="Caraberry Cake" title="Caraberry Cake"  image={image3} />
                        </Grid> 
                </Grid>
            </Fade>
        </Box>
    )
}

export default Products;
