import { Box, Typography } from '@mui/material';
import React from 'react';
import CopyrightIcon from '@mui/icons-material/Copyright';

const styles = {
  footer: (theme: any) => ({
    display: 'flex',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '40px',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: `${theme.palette.BEIGE}`,
    position: 'relative',
  }),
  iconStyles: (theme: any) => ({
    color: `${theme.palette.WHITE}`,
  }),
  footerText: {
    paddingLeft: '10px',
  },
};

const Footer: React.FC = () => {
  return (
    <Box sx={styles.footer}>
      <CopyrightIcon fontSize='small' sx={styles.iconStyles} />
      <Typography sx={styles.footerText} variant='body3'>
        Footer
      </Typography>
    </Box>
  );
};

export default Footer;
