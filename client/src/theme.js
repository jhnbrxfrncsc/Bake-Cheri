import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#e5ceff',
            main: '#b29ddb',
            dark: '#826fa9',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ffeeff',
            main: '#f8bbd0',
            dark: '#c48b9f',
            contrastText: '#000',
        },
        type: "dark"
    },
    typography : {
        fontFamily : [
            'Oswald', 
            'SedanSC', 
            'Sniglet',
            'sans-serif', 
            'cursive'
        ].join(','),
    }
});

export default theme;