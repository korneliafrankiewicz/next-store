import { createTheme } from '@mui/material/styles';
import { colors } from './_colors';
import { breakpoints } from './_breakpoints';
import { lato } from './_fonts';

const theme = createTheme({
  breakpoints: breakpoints,
  palette: colors,
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            backgroundColor: colors.WHITE,
            color: colors.LIGHT_BROWN,
            '&:hover': {
              backgroundColor: colors.DARK_BROWN,
              color: colors.WHITE
            },
          },
        },
        {
          props: { variant: 'outlined' },
          style: {
            color: colors.DARK_BROWN,
            borderColor: colors.DARK_BROWN,
            '&:hover': {
              backgroundColor: colors.DARK_BROWN,
              borderColor: colors.DARK_BROWN,
              color: colors.WHITE
            },
          },
        },
        {
          props: { variant: 'productItem' },
          style: {
            backgroundColor: colors.WHITE,
            color: colors.LIGHT_BROWN,
            '&:hover': {
              backgroundColor: colors.LIGHT,
              color: colors.DARK_BROWN
            },
          },
        },
      ],
    },
  },
  typography: {
    h1: {
      fontFamily: lato.style.fontFamily,
      fontSize: 80,
      textTransform: 'uppercase',
      fontWeight: 'bold',
      letterSpacing: '5px',
      color: colors.WHITE,
      ['@media (max-width:992px)']: {
        fontSize: 30,
      },
    },
    h3: {
      fontFamily: lato.style.fontFamily,
      fontSize: 30,
      textTransform: 'uppercase',
      fontWeight: 'bold',
      letterSpacing: '3px',
      color: colors.WHITE,
    },
    body1: {
      fontFamily: lato.style.fontFamily,
      fontWeight: 500,
    },
    body3: {
      fontFamily: lato.style.fontFamily,
      fontSize: 16,
      color: colors.WHITE,
    },
    body4: {
      fontFamily: lato.style.fontFamily,
      fontSize: 12,
      color: colors.WHITE,
    },
    h5Italic: {
      fontFamily: lato.style.fontFamily,
      fontStyle: 'italic',
      color: colors.WHITE,
    },
  },
});

export default theme;
