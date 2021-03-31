import React, { useState } from 'react';
import useStyles from './headerStyles';
import { Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { AppBar, Box, Toolbar, Typography } from '@material-ui/core';

const Header = () => {
    const classes = useStyles();
    const [nav, setNav] = useState(true);
    const [navPosition, setNavPosition] = useState("static");
    
    const changeNavPosition = () => {
        const scrollDown = window.scrollY
        if(scrollDown >= 100){
            setNavPosition("fixed");
        } else {
            setNavPosition("static");
        }
    };

    const changeNavScreen = () => {
        const navScreen = window.innerWidth;
        if(navScreen <= 1280){
            setNav(false);
        } else {
            setNav(true);
        }
    };
    
    const openNav = () => {
        setNav(!nav);
    } 

    const handleClick = () => {
        if(window.innerWidth < 1280){
            setNav(false);
        } else {
            setNav(nav);
        }
    } 

    window.addEventListener('scroll', changeNavPosition);
    window.addEventListener('resize', changeNavScreen);
    return (
        <header>
            <AppBar position={navPosition} >
                <Toolbar style={{ zIndex: 9999 }}>
                    <Box
                        p={0}
                        m={0}
                        className={classes.navicon}
                        style={{
                            marginLeft: "-100px",
                            left: "50%",
                        }}
                    >
                        <Link to="/" className={classes.icon}>
                        <Typography 
                            variant="h3" 
                            style={{ 
                                fontFamily: "'Sniglet', cursive", 
                                color: "#f8bbd0" 
                            }}
                        >
                            BakeCheri
                        </Typography>
                    </Link>
                    </Box>

                    { 
                        nav ? (
                            <AiOutlineClose
                                className={classes.burger} 
                                onClick={openNav}
                            />
                        ) : (
                            <BiMenu  
                                className={classes.burger} 
                                onClick={openNav}
                            />
                        )
                    }

                    <Box
                        p={0}
                        m={0}
                        className={ nav ? classes.navlinks : classes.nodisplay }
                    >
                        <Link 
                            to="/" 
                            onClick={handleClick}
                            className={classes.links}
                        >
                            <Typography 
                                variant="body2"  
                                className={classes.font2}
                            >
                                HOME
                            </Typography>
                        </Link>
                        <Link 
                            to="/menu" 
                            onClick={handleClick}
                            className={classes.links}
                        >
                            <Typography 
                                variant="body2" 
                                className={classes.font2}
                            >
                                MENU
                            </Typography>
                        </Link>
                        <Link 
                            to="/new-product" 
                            onClick={handleClick}
                            className={classes.linkmarginleft}
                        >
                            <Typography 
                                variant="body2"  
                                className={classes.font2}
                            >
                                ADD PRODUCT
                            </Typography>
                        </Link>
                        <Link 
                            to="/contact" 
                            onClick={handleClick}
                            className={classes.links}
                        >
                            <Typography 
                                variant="body2"  
                                className={classes.font2}
                            >
                                CONTACT
                            </Typography>
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </header>
    )
}

export default Header
