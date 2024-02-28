import React from 'react';
import { Typography } from '@mui/material';
import ButtonComponent from '../buttonComponent/ButtonComponent';
import { css } from '@emotion/css';

const header = css`
  padding-left: 20%;
  padding-top: 5%;
`;

const headerWrapper = css`
  display: flex;
`;

const subheader = css`
  padding-left: 200px;
`;

const Header = () => {
  return (
    <>
      <div className={headerWrapper}>
        <div className={header}>
          <Typography variant='h1'>Stoliki</Typography>
          <Typography variant='h1'>dębowe</Typography>
          <Typography className={subheader} variant='h5Italic'>
            Ręcznie robione
          </Typography>
        </div>
        <ButtonComponent />
      </div>
    </>
  );
};

export default Header;
