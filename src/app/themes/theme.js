import { createTheme } from '@mui/material/styles'
import { colorConstants } from '../constants/colorConstants'

const theme = createTheme({
  palette: {
    common: {
      black: colorConstants.black,
      blue: colorConstants.blue,
      bluePie: colorConstants.bluePie,
      blueAzure: colorConstants.blueAzure,
      blueDeep: colorConstants.blueDeep,
      blueSky: colorConstants.blueSky,
      blueNavy: colorConstants.blueNavy,
      blueTurquoise: colorConstants.blueTurquoise,
      blueSlate: colorConstants.blueSlate,
      bluePrussian: colorConstants.bluePrussian,
      caretDownColor: colorConstants.caretDownColor,
      caretUpColor: colorConstants.caretUpColor,
      informationCard: colorConstants.informationCard,
      lightBluePie: colorConstants.lightBluePie,
      shadowPaper: colorConstants.shadowPaper,
      shadowPaperDashboard: colorConstants.shadowPaperDashboard,
      grey: colorConstants.grey,
      greyDark: colorConstants.greyDark,
      greyLight: colorConstants.greyLight,
      greyDashboard: colorConstants.greyDashboard,
      greyDarkTable: colorConstants.greyDarkTable,
      greyButton: colorConstants.greyButton,
      royalBlue: colorConstants.royalBlue,
      shadowCard: colorConstants.shadowCard,
      skyBlue: colorConstants.skyBlue,
      white: colorConstants.white,
    },
    background: {
      default: colorConstants.background,
      blueLight: colorConstants.blueLight,
      white: colorConstants.white,
    },
    primary: {
      main: colorConstants.primary,
    },
    secondary: {
      main: colorConstants.secondary,
    },
    error: {
      main: colorConstants.error,
    },
  },
  typography: {
    fontFamily: ['sans-serif'].join(','),
    fontSize: 14,
    title: {
      color: colorConstants.blue,
      fontSize: '1rem',
      fontWeight: '700',
      '@media (min-width:600px)': {
        fontSize: '2rem',
      },
    },
    titleDashboard: {
      color: colorConstants.primary,
      fontSize: '1.5rem',
      fontWeight: '700',
      '@media (min-width:600px)': {
        fontSize: '2.1rem',
      },
    },
    subtitle: {
      color: 'rgba(0, 0, 0, 0.50)',
      fontSize: '1rem',
      fontWeight: 400,
      '@media (min-width:600px)': {
        fontSize: '16px',
      },
    },
    cardTitle: {
      color: colorConstants.blue,
      fontSize: '1.5rem',
      fontWeight: 700,
      textAlign: 'center',
    },
    cardSubtitle: {
      color: colorConstants.primary,
      fontSize: '1.5rem',
      fontWeight: 700,
    },
    cardCheck: {
      color: colorConstants.greyDark,
      fontSize: '.75rem',
      fontWeight: 400,
      '@media (min-width:600px)': {
        fontSize: '1.12rem',
      },
    },
    textInput: {
      color: colorConstants.blue,
      fontSize: '1rem',
      fontWeight: '500',
      '@media (min-width:600px)': {
        fontSize: '16px',
      },
    },
    titleInputDashboard: {
      fontSize: '.75rem',
      lineHeight: '1.25rem',
      fontWeight: 500,
      color: colorConstants.primary,
    },
    textError: {
      color: 'rgba(255, 5, 0, 1)',
      fontSize: '0.80rem',
      fontWeight: '500',
      '@media (min-width:600px)': {
        fontSize: '1rem',
      },
    },
    titleDashboardDialog: {
      fontSize: '1rem',
      fontWeight: 700,
      lineHeight: '1.5rem',
      color: colorConstants.blue,
      '@media (min-width:600px)': {
        fontSize: '2.12rem',
        lineHeight: '2.5rem',
      },
    },
    titleDialog: {
      fontSize: '1rem',
      fontWeight: 700,
      color: colorConstants.blue,
      '@media (min-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    subtitleDialog: {
      fontSize: '.85rem',
      lineHeight: '1.8rem',
      fontWeight: 400,
      color: colorConstants.greyDark,
      '@media (min-width:600px)': {
        fontSize: '1.12rem',
        lineHeight: '1.8rem',
      },
    },
    caretUp: {
      color: colorConstants.caretUpColor,
      fontSize: '0.68rem',
      fontWeight: 400,
    },
    caretDown: {
      color: colorConstants.caretDownColor,
      fontSize: '0.68rem',
      fontWeight: 400,
    },
    informationCardTitle: {
      color: colorConstants.informationCard,
      fontSize: '0.88rem',
      fontWeight: 400,
      lineHeight: '1.14rem',
    },
    informationCardNumber: {
      color: colorConstants.informationCard,
      fontSize: '2rem',
      fontWeight: 700,
    },
    statsCardTitle: {
      color: colorConstants.primary,
      fontSize: '1.5rem',
      fontWeight: 700,
      lineHeight: '1.87rem',
    },
    statsCardSubtitle: {
      color: colorConstants.greyDarkTable,
      fontSize: '1rem',
      fontWeight: 700,
      lineHeight: '1.87rem',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Silka';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url('../assets/fonts/Silka.ttf') format('truetype');
        }
      `,
    },
  },
})

export default theme
