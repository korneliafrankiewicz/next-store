import React, { useState } from 'react';
import {
  Box,
  Drawer,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SxProps,
  Theme,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import WidgetsIcon from '@mui/icons-material/Widgets';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import Link from 'next/link';
import { css } from '@emotion/css';

const Colors = {
  palette: {
    DARK_BROWN: '#492D29',
    WHITE: '#FFFFFF',
  },
};

type MyTheme = typeof Colors & Theme;

const styles = {
  menuIcon: (theme: MyTheme) => ({
    color: `${theme.palette.WHITE}`,
  }),
  icon: (theme: MyTheme) => ({
    color: `${theme.palette.DARK_BROWN}`,
  }),
  text: (theme: MyTheme) => ({
    color: `${theme.palette.DARK_BROWN}`,
    textDecoration: 'none',
  }),
};

const linkStyles = css`
  text-decoration: none;
`;

const Menu = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const menuList = [
    {
      name: 'Shop',
      icon: <ShoppingCartIcon />,
      link: '/shop',
    },
    {
      name: 'Our projects',
      icon: <WidgetsIcon />,
      link: '/our-projects',
    },
    {
      name: 'Individual pricing',
      icon: <MonetizationOnIcon />,
      link: '/pricing',
    },
    {
      name: 'Contact',
      icon: <MailIcon />,
      link: '/contact',
    },
    {
      name: 'Home',
      icon: <HomeIcon />,
      link: '/',
    },
  ];

  const DrawerList = (
    <Box sx={{ width: 250 }} role='presentation' onClick={toggleDrawer(false)}>
      <List>
        {menuList?.map((tab, index) => (
          <Link href={tab.link} className={linkStyles} key={index}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon sx={styles.icon as SxProps<Theme>}>
                  {tab.icon}
                </ListItemIcon>
                <ListItemText
                  sx={styles.text as SxProps<Theme>}
                  primary={tab.name}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon fontSize='large' sx={styles.menuIcon as SxProps<Theme>} />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default Menu;
