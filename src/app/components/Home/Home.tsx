import HomeHeader from './HomeHeader';
import image from '../../assets/wood_image.jpg';
import ActionCards from '../ActionCards/ActionCards';
import BaseLayout from '../BaseLayout/BaseLayout';
import { Paper, Box, SxProps, Theme } from '@mui/material';
import React from 'react';

const ThemeValues = {
  palette: {
    BEIGE: '#D7AC85',
  },
  values: {
    md: '992px',
  },
};

type MyTheme = typeof ThemeValues & Theme;

const mainBox = (theme: MyTheme) => ({
  backgroundColor: `${theme.palette.BEIGE}`,
  position: 'absolute',
  top: '350px',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '30px',
  borderRadius: '12px',
  width: '80%',
  display: 'flex',
  flexDirection: 'column',
  [`@media screen and (min-width: ${theme.breakpoints.values.md})`]: {
    top: '350px',
    flexDirection: 'row',
    width: 'auto',
  },
});

const wrapper = {
  position: 'relative',
  width: '100vw',
  height: '100vh',
  overflowX: 'hidden',
  backgroundImage: `url(${image.src})`,
};

export const Home = () => {
  return (
    <Box sx={wrapper}>
      <BaseLayout>
        <Paper sx={mainBox as SxProps<Theme>} elevation={3}>
          <HomeHeader />
          <ActionCards />
        </Paper>
      </BaseLayout>
    </Box>
  );
};

export default Home;
