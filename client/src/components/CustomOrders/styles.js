import { makeStyles } from '@material-ui/styles';
import BackgroundIMG from '../../assets/img/hero-7.jpg';

const useStyles = makeStyles(theme => ({
    root : {
        backgroundImage: `linear-gradient(rgba(243, 229, 245, 0.5), rgba(252, 228, 236, 0.5)),
        url(${BackgroundIMG})`,
        backgroundSize: "cover",
        backgroundPosition: "center" ,
        backgroundRepeat: "no-repeat",
        height: "20vh",
        borderRadius: 250,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // [theme.breakpoints.down('sm')]: {
        //     backgroundSize: "150% 70%",
        // },
        // [theme.breakpoints.down('xs')]: {
        //     backgroundSize: "200% 60%",
        //     height: "90vh",
        // },
    },
    hero : {
        minHeight: "calc(100vh - 40px)",
        // backgroundImage: `linear-gradient(rgba(243, 229, 245, 0.5), rgba(252, 228, 236, 0.5)),
        // url(${heroImg})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        [theme.breakpoints.down('sm')]: {
            minHeight: "calc(100vh - 40px)",
        },
        [theme.breakpoints.down('xs')]: {
            minHeight: "calc(100vh - 200px)",
        },
    },
    font1 : {
        fontFamily: "'Slackey', cursive",
        [theme.breakpoints.down('sm')]: {
            fontSize: "1.5em"
        },
    },
    font3 : {
        fontFamily: "'Oswald', sans-serif",
        color : "e5ceff",
        [theme.breakpoints.down('sm')]: {
            fontSize: ".9em"
        },
    },
    btn : {
        fontFamily: "'Oswald', sans-serif",
        color : "#fff",
        marginTop: 14,
        [theme.breakpoints.down('xs')]: {
            height: 18,
            fontSize: ".6em",
            padding: 12,
            // margin: "auto"
        },
    },
}));


export default useStyles;