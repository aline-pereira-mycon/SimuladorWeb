'use client';
import { Montserrat } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const montsserat = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#5451FA',
    },
    secondary: {
      main: '#3A4256',
    },
    text: {
      primary: '#3A4256',
      secondary: '#3A4256',
      disabled: '#7d8596',
    },
  },
  typography: {
    h5: {
      fontWeight: 800,
    },
    h6: {
      fontWeight: 500,
      fontSize: '1rem',
      lineHeight: 2,
    },
    fontFamily: 'Montserrat',
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#5451FA',
          }),
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          // Some CSS
          borderRadius:'20px',
          fontSize:'1rem',
          fontWeight:'700',
          textTransform:'lowercase',
        },
      },
    },
  },
  
});

export default theme;
