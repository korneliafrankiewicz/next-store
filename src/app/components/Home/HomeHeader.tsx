import React from 'react';
import { Typography } from '@mui/material';
import ButtonElement from '../Button/Button';

const headerWrapper = {
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  maxWidth: 'fit-content',
  paddingRight: '30px',
};

const subheader = {
  display: 'block',
};

const HomeHeader = () => {
  return (
    <>
      <div style={headerWrapper}>
        <div>
          <Typography variant='h1'>Our</Typography>
          <Typography variant='h1'>products</Typography>
          <Typography sx={subheader} variant='h5Italic'>
            Handmade furniture
          </Typography>
        </div>
        <ButtonElement />
      </div>
    </>
  );
};

export default HomeHeader;
