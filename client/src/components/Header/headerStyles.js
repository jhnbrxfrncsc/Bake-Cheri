import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles(theme => ({
    font1: {
        fontFamily: "'Sniglet', cursive",
        color: "#f8bbd0",
    },
    font2: {
        fontFamily: "'Oswald', sans-serif",
        letterSpacing: 3,
    },
    icon: {
        textDecoration: "none"
    },
    links : {
        color: "#fff",
        textDecoration: "none",
        '&:hover' : {
            textDecoration: "underline"
        },
        [theme.breakpoints.down('md')] : {
            backgroundColor: "#f8bbd0",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            '&:hover' : {
                opacity: 0.9,
                transition: "all 1s ease",
            }
        },
    },
    linkmarginleft: {
        color: "#fff",
        marginLeft: "15%",
        textDecoration: "none",
        '&:hover' : {
            textDecoration: "underline"
        },
        [theme.breakpoints.down('md')] : {
            marginLeft: 0,
            backgroundColor: "#f8bbd0",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            '&:hover' : {
                opacity: 0.9,
                transition: "all .6s ease",
            }
        },
    },
    navicon: {
        textAlign: "center",
        position: "absolute",
        zIndex: 999
    },
    navlinks:{
        position: "absolute",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        left: "0",
        [theme.breakpoints.down('md')] : {
            height: "calc(100vh - 50vh)",
            top: "9vh",
            flexDirection: "column",
        },
        [theme.breakpoints.down('xs')] : {
            top: "8vh",
        },
        transition: "all 1s ease"
    },
    burger: {
        display : "none",
        [theme.breakpoints.down('md')] : {
            display: "inline-block",
            fontSize: "2em",
            cursor: "pointer"
        }
    },
    nodisplay: {
        [theme.breakpoints.down('md')] : {
            display: "none",
            height: 0,
            transition: "all 1s ease",
        }
    }
}));


export default useStyles;