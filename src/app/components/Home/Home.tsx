import HomeHeader from './HomeHeader';
import image from '../../assets/wood_image.jpg';
import ActionCards from '../ActionCards/ActionCards';
import BaseLayout from '../BaseLayout/BaseLayout';
import { Paper, Box, SxProps, Theme } from '@mui/material';

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
  top: '90%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '30px',
  borderRadius: '12px',
  [`@media screen and (min-width: ${theme.breakpoints.values.md})`]: {
    top: '50%',
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
