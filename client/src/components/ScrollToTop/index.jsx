import { Fade, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';

const useStyles = makeStyles({
    root: {
        position: "fixed",
        bottom: 15,
        right: 15,
        color: "#ffffff",
        backgroundColor: "#f8bbd0",
        borderRadius: 25,
        zIndex: 999,
    },
    NoDisplay: {
        display: "none"
    }
});


const ScrollToTop = () => {
    const classes = useStyles();
    const [visible, setVisibility] = useState(false);
    const ScrollY = window.scrollY;

    const ScrollVisibility = () => {
        if(ScrollY >= 400) {
            setVisibility(true);
        } else {
            setVisibility(false);
        }
    }
    
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    window.addEventListener('scroll', ScrollVisibility)

    return (
        <Fade in timeout={1000}>
            <div className={ visible ? classes.root : classes.NoDisplay }>
                <IconButton 
                    onClick={scrollToTop}
                >
                    <AiOutlineArrowUp />
                </IconButton>
            </div>
        </Fade>
    )   
}

export default ScrollToTop;
