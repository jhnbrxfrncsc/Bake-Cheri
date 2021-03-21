import { makeStyles } from '@material-ui/styles';
import dividerImg from '../../assets/img/divider-car-purple.png';
import fbIcon from '../../assets/img/fbIcon.png';
import igIcon from '../../assets/img/igIcon.png';
import twtIcon from '../../assets/img/twtIcon.png';

export const useStyles = makeStyles(theme => ({
    font1 : {
        fontFamily: "'Slackey', cursive",
    },
    font2 : {
        fontFamily: "'Oswald', sans-serif",
    },
    title: {
        fontFamily: "'Slackey', cursive",
        fontWeight: "bold",
        color: "#f8bbd0",
        fontSize: "1.5em",
    },
    divider : {
        backgroundImage: `url(${dividerImg})`,
        backgroundSize: "50% 40%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "50px",
        [theme.breakpoints.down('sm')] : {
            backgroundSize: "100% 40%",
        }
    },
    gridContainer : {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
        width: "100%",
        height: "100%"
    },
    card: {
        height: "100%",
        width: "100%",
        flexBasis: "20%",
    },
    facebook: {
        backgroundImage: `url(${fbIcon})`,
        backgroundSize: "30% 90%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100px",
        width: "100%",
        [theme.breakpoints.down('md')]:{
            margin: 25,
            backgroundSize: "50% 90%",
        },
        [theme.breakpoints.down('sm')]:{
            margin: 25,
            backgroundSize: "62% 90%",
        },
        [theme.breakpoints.down('xs')]:{
            margin: 25,
            backgroundSize: "100% 85%",
        },
    },
    instagram: {
        backgroundImage: `url(${igIcon})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "90px",
        width: "100%",
        padding: 0,
        [theme.breakpoints.down('md')]:{
            margin: 25,
        }
    },
    twitter: {
        backgroundImage: `url(${twtIcon})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "90px",
        width: "100%",
        padding: 0,
        [theme.breakpoints.down('md')]:{
            margin: 25,
        }
    },
}));