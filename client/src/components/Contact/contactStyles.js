import { makeStyles } from '@material-ui/styles';
import bgImage from '../../assets/img/cupcake-header.jpg';

export const useStyles = makeStyles(theme => ({
    container: {
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `linear-gradient(rgba(243, 229, 245, 0.5), rgba(252, 228, 236, 0.5)),
        url(${bgImage})`,
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },
    form: {
        backgroundColor: "#b29ddb",
        height: "calc(100vh - 28vh)",
        width: "60vh",
        padding: "25px",
        fontFamily: "'Oswald', sans-serif",
    },
    form1: {
        padding: 30,
    },
    font1 : {
        fontFamily: "'Slackey', cursive",
        color: "#fff"
    },
    textArea : {
        fontFamily: "'Oswald', sans-serif",
        color:"#fff",
        height: "20vh"
    },
    btn : {
        fontFamily: "'Oswald', sans-serif",
        color:"#fff",
        marginTop: 10,
    },
    title: {
        fontFamily: "'Slackey', cursive",
        fontWeight: "bold",
        color: "#f8bbd0",
        fontSize: "1.5em",
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
}));