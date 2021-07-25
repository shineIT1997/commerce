import { createTheme } from '@material-ui/core/styles';

export const secondaryFont = '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      tablet: 640,
      laptop: 1024,
      desktop: 1280,
    },
  },
  palette: {
    primary: {
      main: '#f2874d',
      dark: '#BA5821',
      50: '#fae8e3',
      100: '#facab2',
      200: '#f7a881',
      300: '#f2874d',
      400: '#ee6e21',
      500: '#DF6E2A',
      600: '#D56826',
      700: '#C86123',
      800: '#BA5821',
      900: '#a04e1f',
    },
    secondary: {
      main: '#3F3BED',
      dark: '#000fb9',
      50: '#ede7fd',
      100: '#cfc5f9',
      200: '#ad9ef6',
      300: '#8876f3',
      400: '#6858f1',
      500: '#3F3BED',
      600: '#2a37e6',
      700: '#002fde',
      800: '#002ad7',
      900: '#000fb9',
    },
    gray: {
      main: '#222222',
      100: '#f5f5f5',
      200: '#efefef',
      300: '#CECECE',
      400: '#9F9F9F',
      500: '#9f9f9f',
      600: '#767676',
      700: '#626262',
      800: '#333333',
      900: '#222222',
    },
    color: {
      error: '#EB0000',
      warning: '#F5B100',
      success: '#27AE60',
      disabled: '#EFEFEF',
      background: '#FAFAFD',
      white: '#fff',
      black: '#000',
    },
    stripe: {
      main: '#6863d8',
    },
  },

  typography: {
    h1: {
      fontSize: 95,
      fontWeight: 300,
      letterSpacing: -1.5,
      lineHeight: '129px',
    },
    h2: {
      fontSize: 59,
      fontWeight: 300,
      letterSpacing: -0.5,
      lineHeight: '88px',
    },
    h3: {
      fontSize: 48,
      fontWeight: 'normal',
      lineHeight: '65px',
    },
    h4: {
      fontSize: 34,
      fontWeight: 'normal',
      lineHeight: '46px',
      letterSpacing: 0.25,
    },
    h5: {
      fontSize: 24,
      fontWeight: 600,
      lineHeight: '33px',
    },
    h6: {
      fontSize: 20,
      fontWeight: 600,
      lineHeight: '27px',
      letterSpacing: 0.15,
    },
    subtitle1: {
      fontSize: 16,
      fontWeight: 600,
      lineHeight: '26px',
      letterSpacing: 0.15,
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 600,
      lineHeight: '22px',
      letterSpacing: 0.1,
    },
    body1: {
      fontSize: 16,
      fontWeight: 'normal',
      lineHeight: '26px',
      letterSpacing: 0.5,
    },
    body2: {
      fontSize: 14,
      fontWeight: 'normal',
      lineHeight: '26px',
      letterSpacing: 0.25,
    },
    button: {
      textTransform: 'initial',
    },
  },

  spacing: 8,
});

export default theme;
