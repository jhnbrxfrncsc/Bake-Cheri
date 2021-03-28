import React, { useState } from 'react';
import { 
    Box,
    ButtonBase,
    Slide,
    Typography,
} from '@material-ui/core';
import menuItems from '../../assets/data/menuItems';
import MenuHeader from './MenuHeader';
import useStyles from './styles';

const Menu = () => {
const classes = useStyles();
const [animation, setAnimation] = useState(false)

const handleAnimation = () => {
    if(window.scrollY >= 1500) {
        setAnimation(true)
    }
}

window.addEventListener('scroll', handleAnimation);
return (
    <Box className={classes.menuContainer}>
        <MenuHeader/>
        <div className={classes.root}>
            {
                menuItems.map((image, index) => (
                    <Slide 
                        direction="left" 
                        in={animation} 
                        timeout={3000}
                        key={image.title}
                        style={{
                            transitionDelay: `${index+1}s`
                        }}
                    >
                        <ButtonBase
                            focusRipple
                            className={classes.image}
                            focusVisibleClassName={classes.focusVisible}
                            style={{
                                width: image.width,
                            }}
                        >
                            <span
                                className={classes.imageSrc}
                                style={{
                                backgroundImage: `url(${image.url})`,
                                }}
                            />
                            <span className={classes.imageBackdrop} />
                            <span className={classes.imageButton}>
                                <Typography
                                    component="span"
                                    variant="subtitle1"
                                    color="inherit"
                                    className={classes.imageTitle}
                                >
                                    {image.title}
                                    <span className={classes.imageMarked} />
                                </Typography>
                            </span>
                        </ButtonBase>
                    </Slide>
                ))
            }
        </div>
    </Box>
    );
}

export default Menu;