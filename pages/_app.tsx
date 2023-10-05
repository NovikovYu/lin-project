import { Provider } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material';
import type { AppProps } from 'next/app';
import { store } from '../store/store';
import '@/styles/globals.css';
import 'typeface-inter';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0C6748',
      dark: '#084530',
      light: '#0E7B56',
      contrastText: '#fff',
    },
    secondary: {
      main: '#9C27B0',
      dark: '#7B1FA2',
      light: '#BA68C8',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    error: {
      main: '#D32F2F',
      dark: '#C62828',
      light: '#EF5350',
      contrastText: '#fff',
    },
    text: {
      primary: '#18204A',
      secondary: '#586691',
      disabled: '#989FB9',
    },
    grey: {
      50: '#F8F9FD',
      100: '#F0F3FA',
      200: '#DDE1EE',
      300: '#DDE1EE',
      400: '#989FB9',
      500: '#586691',
      600: '#18204A',
      700: '#0E122A',
      800: '#090C1B',
      900: '#05070F',
      A100: '#D5D5D5',
      A200: '#AAAAAA',
      A400: '#616161',
      A700: '#303030',
    },
    background: {
      default: '#F0F3FA',
    },
    action: {
      hover: 'rgba(12, 103, 72, 0.05)',
    },
  },
  typography: {
    fontFamily: 'Inter',
    h1: {
      fontWeight: 600,
      fontSize: 96,
      letterSpacing: -1.5,
    },
    h2: {
      fontWeight: 600,
      fontSize: 60,
      letterSpacing: -0.5,
    },
    h3: {
      fontWeight: 600,
      fontSize: 48,
      letterSpacing: '116.7%',
    },
    h4: {
      fontWeight: 600,
      fontSize: 34,
      letterSpacing: '123.5%',
    },
    h5: {
      fontWeight: 600,
      fontSize: 24,
      letterSpacing: '133.4%',
    },
    h6: {
      fontWeight: 600,
      fontSize: 20,
      letterSpacing: '160%',
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: 20,
      letterSpacing: '160%',
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: 14,
      letterSpacing: '157%',
      lineHeight: '157%',
    },
    body1: {
      fontWeight: 400,
      fontSize: 16,
      letterSpacing: '150%',
    },
    body2: {
      fontWeight: 400,
      fontSize: 14,
      letterSpacing: '143%',
    },
    caption: {
      fontWeight: 400,
      fontSize: 12,
      letterSpacing: '166%',
    },
    overline: {
      fontWeight: 400,
      fontSize: 12,
      letterSpacing: '266%',
      textTransform: 'uppercase',
    },
  },
  breakpoints: {
    values: {
      xs: 444,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
