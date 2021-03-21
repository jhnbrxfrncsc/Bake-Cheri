import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300,
        width: '100%',
    },
    menuText: {
        position: "relative", 
        marginTop: "25%",
        color: "#fff",
        fontFamily: "'Oswald', sans-serif",
        [theme.breakpoints.down('xs')]: {
            fontSize: "2em"
        },
    },
    menuContainer: {
        height: 500,
        width: "100%",
        marginTop: 0,
        // backgroundColor: "#e5ceff",
        display: "flex",
        // flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        position: 'relative',
        height: 250,
        [theme.breakpoints.down('sm')]: {
            width: '100% !important', // Overrides inline-style
            height: 100,
        },
        '&:hover, &$focusVisible': {
        zIndex: 1,
        '& $imageBackdrop': {
            opacity: 0.15,
        },
        '& $imageMarked': {
            opacity: 0,
        },
        '& $imageTitle': {
            border: '4px solid currentColor',
        },
        },
    },
    focusVisible: {},
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
    },
        imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },
        imageTitle: {
        position: 'relative',
        fontFamily: "'Oswald', sans-serif",
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
        imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
}));

export default useStyles;