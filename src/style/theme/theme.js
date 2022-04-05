import { createTheme } from '@mui/material/styles'

//https://material-ui.com/customization/default-theme/#default-theme
//https://material-ui.com/customization/color/#color
export const theme = createTheme({
  palette: {
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
  },
  typography: {
    h1: {
      fontSize: '4em',
      '@media (max-width:600px)': {
        fontSize: '3em',
      },
      fontFamily: '"Afterglow"',
    },
    h2: {
      fontSize: '3.5em',
      '@media (max-width:600px)': {
        fontSize: '2.5em',
      },
      fontFamily: '"Afterglow"',
    },
    h3: {
      fontSize: '3em',
      '@media (max-width:600px)': {
        fontSize: '2em',
      },
      fontFamily: '"Afterglow"',
    },
    h4: {
      fontSize: '2.5em',
      '@media (max-width:600px)': {
        fontSize: '1.5em',
      },
      fontFamily: '"Afterglow"',
    },
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
