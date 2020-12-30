import { createMuiTheme } from '@material-ui/core';

const lightTheme = createMuiTheme({
  palette: {
    type: 'dark',
    common: {
      black: '#000',
      white: '#fff',
    },
    background: {
      default: '#121212',
      paper: '#212121',
    },
    primary: {
      main: '#90caf9',
      dark: '#333',
      contrastText: '#fff',
    },
    secondary: {
      light: '#90caf9',
      main: '#212121',
      dark: '#c51162',
      contrastText: '#fff',
    },
    text: {
      primary: '#fff',
      secondary: '#fff',
      disabled: 'rgba(255, 255, 255, 0.5)',
      hint: 'rgba(255, 255, 255, 0.5)',
    },
  },
  overrides: {},
});

export default lightTheme;
