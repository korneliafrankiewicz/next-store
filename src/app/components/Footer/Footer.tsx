import { Box, Typography } from '@mui/material';
import React from 'react';

const styles = {
  footer: (theme: any) => ({
    display: 'flex',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '50px',
    backgroundColor: `${theme.palette.LIGHT_CREME}`,
  }),
};

const Footer: React.FC = () => {
  return (
    <Box sx={styles.footer}>
      <Typography>Footer</Typography>
    </Box>
  );
};

export default Footer;
