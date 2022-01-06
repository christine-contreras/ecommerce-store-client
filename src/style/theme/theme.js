import { createTheme } from '@mui/material/styles'
import { orange, teal, brown, grey } from '@mui/material/colors'

//https://material-ui.com/customization/default-theme/#default-theme
//https://material-ui.com/customization/color/#color
export const theme = createTheme({
  palette: {
    // mode: 'light',
    primary: {
      main: '#f8d7b1',
      light: '#ffffe3',
      dark: '#b47a43',
      contrastText: '#fff',
    },
    secondary: {
      main: '#FFF8ED',
      light: '#fff',
      dark: '#cabeaf',
    },
    info: {
      main: '#291108',
      light: '#533731',
      dark: '#040000',
    },
    text: {
      primary: '#291108',
    },
    // background: {
    //   default: '#fff',
    //   paper: '#f8f4ef',
    // },
  },
  typography: {
    h1: {
      fontSize: '4em',
      '@media (max-width:600px)': {
        fontSize: '3em',
      },
      fontFamily: '"Afterglow", cursive',
    },
    h2: {
      fontSize: '3.5em',
      '@media (max-width:600px)': {
        fontSize: '2.5em',
      },
      fontFamily: '"Afterglow", cursive',
    },
    h3: {
      fontSize: '3em',
      '@media (max-width:600px)': {
        fontSize: '2em',
      },
      fontFamily: '"Afterglow", cursive',
    },
    h4: {
      fontSize: '2.5em',
      '@media (max-width:600px)': {
        fontSize: '1.5em',
      },
      fontFamily: '"Afterglow", cursive',
    },
    // h5: {
    //   fontFamily: '"Libre Caslon Text", serif',
    // },
    h6: {
      fontSize: '4em',
      '@media (max-width:600px)': {
        fontSize: '3em',
      },
      fontFamily: '"Leky Calgria"',
    },
    subtitle1: {
      fontSize: '1.25em',
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: '.9em',
      fontWeight: 900,
    },
  },
})

export default theme
