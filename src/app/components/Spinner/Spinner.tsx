import { Box, SxProps, Theme, Typography } from '@mui/material';
import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const Colors = {
  palette: {
    WHITE: '#FFFFFF',
  },
};

type ColorsInfered = typeof Colors;

const styles = {
  spinnerWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: (theme: ColorsInfered) => ({
    color: `${theme.palette.WHITE}`,
  }),
  text: {
    paddingLeft: '20px',
  },
};

const Spinner = () => {
  return (
    <Box sx={styles.spinnerWrapper}>
      <CircularProgress sx={styles.loader as SxProps<Theme>} />
      <Typography sx={styles.text} variant='body3'>
        Loading...
      </Typography>
    </Box>
  );
};

export default Spinner;
