import { makeStyles } from "@material-ui/styles";


export default makeStyles({
    root: {
        backgroundColor: "#f8bbd0",
        backgroundImage: "url('/img/gradientBG.svg')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        height: "100vh",
        padding: "5% 20%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    font1 : {
        fontFamily: "'Slackey', cursive",
    },
    font2 : {
        fontFamily: "'Oswald', sans-serif",
        color: "#fff"
        // b29ddb
        // f8bbd0
    },
    title : {
        fontSize: "1.5em",
        fontWeight: "bold",
        color: "#fff"
    },
    paper: {
        height: "90vh",
        padding: 30,
        width: "80%" ,
        backgroundColor: "#f8bbd0"
    },
});