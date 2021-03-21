import { makeStyles } from '@material-ui/styles';
import heroBG from '../../assets/img/whiteDonut.png';
import heroImg from '../../assets/img/headerBcg.jpeg';

const useStyles = makeStyles(theme => ({
    heroImg : {
        backgroundImage: `url(${heroBG})`,
        backgroundSize: "90% 70%",
        backgroundPosition: "top" ,
        backgroundRepeat: "repeat-x",
        height: "100vh",
        boxShadow: 0,
        [theme.breakpoints.down('sm')]: {
            backgroundSize: "150% 70%",
        },
        [theme.breakpoints.down('xs')]: {
            backgroundSize: "200% 60%",
            height: "90vh",
        },
    },
    hero : {
        minHeight: "calc(100vh - 40px)",
        backgroundImage: `linear-gradient(rgba(243, 229, 245, 0.5), rgba(252, 228, 236, 0.5)),
        url(${heroImg})`,
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
    }
}));


export default useStyles;