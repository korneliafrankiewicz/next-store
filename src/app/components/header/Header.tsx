import React from 'react';
import { Typography } from '@mui/material';
import ButtonElement from '../Button/Button';
import { css } from '@emotion/css';

const headerWrapper = css`
  display: flex;
  justify-content: space-between;
`;

const subheader = {
  display: 'block',
  textAlign: 'right',
};

const Header = () => {
  return (
    <>
      <div className={headerWrapper}>
        <div>
          <Typography variant='h1'>Stoliki</Typography>
          <Typography variant='h1'>dębowe</Typography>
          <Typography sx={subheader} variant='h5Italic'>
            Ręcznie robione
          </Typography>
        </div>
        <ButtonElement />
      </div>
    </>
  );
};

export default Header;
