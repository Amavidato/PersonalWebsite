import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: ['"Fredoka"', 'sans-serif'].join(',')
    },
    palette: {
        primary: {
            light: '#6d6d6d',
            main: '#424242',
            dark: '#1b1b1b',
            contrastText: '#fff'
        },
        secondary: {
            light: '#9effff',
            main: '#00ff7f',
            dark: '#14cba8',
            contrastText: '#000'
        }
    }
});

export default theme;
