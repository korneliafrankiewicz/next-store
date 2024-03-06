import { createTheme } from '@mui/material/styles';
import { colors } from './_colors';
import { breakpoints } from './_breakpoints';
import { roboto, lato } from './_fonts';

const theme = createTheme({
  breakpoints: breakpoints,
  palette: colors,
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            backgroundColor: colors.white,
            color: colors.bgDove,
            '&:hover': {
              backgroundColor: colors.bgDove,
              color: colors.white
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
      color: colors.white,
    },
    body1: {
      fontFamily: lato.style.fontFamily,
      fontWeight: 500,
    },
    h5Italic: {
      fontFamily: lato.style.fontFamily,
      fontStyle: 'italic',
      color: colors.white,
    },
  },
});

export default theme;
