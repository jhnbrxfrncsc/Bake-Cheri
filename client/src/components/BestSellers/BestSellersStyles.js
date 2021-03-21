import { makeStyles } from '@material-ui/styles';
import dividerImg from '../../assets/img/divider-chef-violet.png';

const useStyle = makeStyles(theme => ({
    media: {
        height: 250,
        width: "100%",
        backgroundPosition: "center 30%",
        backgroundSize: "100% 100%",
        '&:hover' : {
            backgroundSize: "120% 120%",
            transition: "all 2s ease",
            '& $iconBtn' : {
                margin: "0",
                backgroundColor: "#b29ddb",
                color: "rgba(248,187,208, 0.8)",
                transition: "all .9s ease",
                '&:hover':{
                    backgroundColor: "rgba(178,157,219, 0.8)",
                }
            }
        },
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        overflow: "hidden"
    },
    iconBtn: {
        marginRight: "-60px",
        marginBottom: "-130px",
        fontSize: "2em",
        backgroundColor: "#b29ddb",
        color: "rgba(248,187,208, 0.8)",
        padding: 15,
        borderStartEndRadius: 0,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        '&:hover' : {
            color: "#fff",
            transition: "all .1s ease",
        },
    },
    // iconWrapper : {
    //     backgroundColor: "#000",
    //     width: 80 ,
    //     height: 100 ,
    //     borderRadius: 250,
    //     marginTop: "60px",
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     margin: "-1.9em"
    // },
    actions: {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8bbd0"
    },
    font1 : {
        fontFamily: "'Slackey', cursive",
    },
    font2 : {
        fontFamily: "'Oswald', sans-serif",
        color: "#fff"
    },
    title : {
        fontSize: "1.5em",
        fontWeight: "bold",
        color: "#f8bbd0"
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
}));

export default useStyle;