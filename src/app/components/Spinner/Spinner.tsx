import { Box, Typography } from '@mui/material';
import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const styles = {
  spinnerWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: (theme: any) => ({
    color: `${theme.palette.WHITE}`,
  }),
  text: {
    paddingLeft: '20px',
  },
};

const Spinner = () => {
  return (
    <Box sx={styles.spinnerWrapper}>
      <CircularProgress sx={styles.loader} />
      <Typography sx={styles.text} variant='body3'>
        Loading...
      </Typography>
    </Box>
  );
};

export default Spinner;
