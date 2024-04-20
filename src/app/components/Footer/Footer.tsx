import { Box, SxProps, Theme, Typography } from '@mui/material';
import React from 'react';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Colors = {
  palette: {
    BEIGE: '#D7AC85',
    WHITE: '#FFFFFF',
  },
};

type MyTheme = typeof Colors & Theme;

const styles = {
  footer: (theme: MyTheme) => ({
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
  iconStyles: (theme: MyTheme) => ({
    color: `${theme.palette.WHITE}`,
  }),
  footerText: {
    paddingLeft: '10px',
  },
};

const Footer: React.FC = () => {
  return (
    <Box sx={styles.footer as SxProps<Theme>}>
      <CopyrightIcon
        fontSize='small'
        sx={styles.iconStyles as SxProps<Theme>}
      />
      <Typography sx={styles.footerText} variant='body3'>
        Footer
      </Typography>
    </Box>
  );
};

export default Footer;
