import React from 'react';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { blue } from '@mui/material/colors';

const theme = createTheme({
    palette: {
      primary: {
          main: '#0a2540',
          dark: '#0a2540',
          ribbon: '#0a2540',
      },
      secondary: {
        main: blue[700]
      },
      background: {
         ribbon: '#0a2540'
      },
      text: {
        primary: '#0a2540',
        secondary: '#FFF'
      }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: { 
                body: {
                    margin: 0,
                }
            }
        }
    },
    typography: {
        allVariants: {
            color: '#0a2540'
        },
        body2: {
          fontSize: 13,
          color: '#757575'
        },
        body1: {
          fontSize: 14
        },
        caption: {
          color: '#757575'
        }
    }
  });

export default function MyApp({ Component, pageProps }) {
    return (    
    <ThemeProvider theme={theme}>
        <CssBaseline/>
          <>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Component {...pageProps} />
              </LocalizationProvider>
          </>
    </ThemeProvider>
  )
}