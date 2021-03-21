import { makeStyles } from '@material-ui/styles';
import dividerImg from '../../assets/img/divider-cake.png';

const useStyles = makeStyles(theme => ({
    root : {
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        // alignItems: "center",
        // backgroundColor: "#c4c4c4"
    },
    font1 : {
        fontFamily: "'Slackey', cursive",
        zIndex: -999,
    },
    font2 : {
        fontFamily: "'Sniglet', cursive;",
    },
    font3 : {
        fontFamily: "'Oswald', sans-serif",
    },
    title: {
        fontWeight: "bold",
        color: "#f8bbd0",
        fontSize: "1.5em"
    },
    divider : {
        backgroundImage: `url(${dividerImg})`,
        backgroundSize: "40% 40%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "50px",
        [theme.breakpoints.down('md')] : {
            backgroundSize: "50% 40%",
        },
        [theme.breakpoints.down('sm')] : {
            backgroundSize: "60% 40%",
        },
        [theme.breakpoints.down('xs')] : {
            backgroundSize: "100% 40%",
        },
        zIndex: -999,
    },
    gridContainer : {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    card: {
        display: "flex",
        flexBasis: "26%",
        [theme.breakpoints.down('md')]: {
            flexBasis: "26%",
        },
        [theme.breakpoints.down('sm')]: {
            flexBasis: "38%",
        },
        [theme.breakpoints.down('xs')]: {
            flexBasis: "60%",
        },
        transition: "all 1s ease"
    },
    serviceImg: {
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "6em",
        width: "6em",
        [theme.breakpoints.down('md')]: {
            height: "6em",
            width: "5em"
        },
        [theme.breakpoints.up('lg')]: {
            width: "5em"
        }
    },
    rightSide: {
        display: "flex",
        flexDirection: "column",
        paddingLeft: "20px",
        fontSize: "5em",
    },
}));


export default useStyles;