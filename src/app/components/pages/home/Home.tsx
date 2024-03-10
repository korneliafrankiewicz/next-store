import Menu from '../../Menu/Menu';
import Header from '../../Header/Header';
import Login from '../../Login/Login';
import Box from '@mui/material/Box';
import image from '../../../assets/wood_image.jpg';
import Paper from '@mui/material/Paper';
import ActionCards from '../../ActionCards/ActionCards';

const mainBox = (theme: any) => ({
  backgroundColor: `${theme.palette.BEIGE}`,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '30px',
  borderRadius: '12px',
});

const wrapper = {
  position: 'relative',
  width: '100vw',
  height: '100vh',
  overflow: 'hidden',
  backgroundImage: `url(${image.src})`,
};

export const Home = () => {
  return (
    <Box sx={wrapper}>
      <Menu />
      <Login />
      <Paper sx={mainBox} elevation={3}>
        <Header />
        <ActionCards />
      </Paper>
    </Box>
  );
};

export default Home;
