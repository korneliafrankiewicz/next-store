import React from 'react';
import { Typography } from '@mui/material';
import ButtonComponent from '../buttonComponent/ButtonComponent';
const Header = () => {
  return (
    <>
    <div style={{display: 'flex'}}>
    <div className='headerWrapper' style={{ paddingLeft: '20%', paddingTop: '5%'}}>
      <Typography variant='h1'>Stoliki</Typography>
      <Typography variant='h1'>dębowe</Typography>
      <Typography style={{paddingLeft: '200px',}} variant='h5Italic'>Made by Kiciuś</Typography>
    </div>
  <ButtonComponent />

    </div>

    </>

  );
};

export default Header;
