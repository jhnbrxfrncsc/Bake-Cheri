import { makeStyles } from '@material-ui/styles';
import dividerImg from '../../assets/img/divider-hearts.png';

const useStyles = makeStyles(theme => ({
    root : {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#b29ddb",
        color : "#fff",
    },
    font1 : {
        fontFamily: "'Slackey', cursive",
        color : "#fff",
    },
    font2 : {
        fontFamily: "'Sniglet', cursive;",
        color : "#fff"
    },
    font3 : {
        fontFamily: "'Oswald', sans-serif",
        color : "#fff"
    },
    title: {
        fontWeight: "bold",
        color: "#f8bbd0",
        fontSize: "1.5em"
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
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    serviceImg: {
        fontSize: "3em",
        color: "#ffeeff"
    },
}));


export default useStyles;