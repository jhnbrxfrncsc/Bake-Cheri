import React, { useState } from 'react';
import { Box, Slide, Typography } from '@material-ui/core';
import useStyles from './styles';

// image
import menuImg from '../../assets/img/portrait-3.jpg';

const MenuHeader = () => {
    const classes = useStyles();
    const [animation, setAnimation] = useState(false)

    const handleAnimation = () => {
        if(window.scrollY >= 2000) {
            setAnimation(true)
        }
    }

    window.addEventListener('scroll', handleAnimation);
    return (
        <Slide direction="right" in={animation} timeout={2500}>
            <Box
                key="menu"
                className={classes.image}
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <span
                    className={classes.imageSrc}
                    style={{
                        backgroundImage: `linear-gradient(rgba(243, 229, 245, 0.5), rgba(252, 228, 236, 0.5)), url(${menuImg})`,
                    }}
                />
                <span>
                    <Typography
                        variant="h1"
                        align="center"
                        className={classes.menuText}
                    >
                        <em><b>Menu</b></em>
                    </Typography>
                </span>
            </Box>
        </Slide>
    )
}

export default MenuHeader
