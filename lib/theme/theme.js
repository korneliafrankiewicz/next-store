import { createTheme } from '@mui/material/styles';
import { colors } from './_colors';
import { breakpoints } from './_breakpoints';

const theme = createTheme({
  breakpoints: breakpoints,
  palette: colors,
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            backgroundColor: colors.txtWhite,
            color: colors.bgDove,
            '&:hover': {
              backgroundColor: colors.bgDove,
              color: colors.txtWhite
            },
          },
        },
      ],
    },
  },
  typography: {
    h1: {
      fontSize: 80,
      textTransform: 'uppercase',
      fontWeight: 'bold',
      color: colors.txtWhite,
    },
    body1: {
      fontWeight: 500,
    },
    h5Italic: {
      fontStyle: 'italic',
      fontWeight: 'bold',
      color: colors.txtWhite,
    },
  },
});

export default theme;
