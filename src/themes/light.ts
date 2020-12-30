import { colors, createMuiTheme } from '@material-ui/core';

const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    common: {
      white: '#fff',
    },
    action: {
      active: colors.blueGrey[600],
    },
    background: {
      default: '#fafafa',
      paper: '#fff',
    },
    primary: {
      main: '#1068BF',
      dark: '#1068BF',
      contrastText: '#fff',
    },
    secondary: {
      light: '#0B5CAD',
      main: '#0B5CAD',
      dark: '#c51162',
      contrastText: '#fff',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
    },
  },
  overrides: {},
});

export default lightTheme;
