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
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import WidgetsIcon from '@mui/icons-material/Widgets';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { css } from '@emotion/css';

const styles = {
  menuIconStyles: (theme: any) => ({
    color: `${theme.palette.WHITE}`,
  }),
  icon: (theme: any) => ({
    color: `${theme.palette.DARK_BROWN}`,
  }),
  text: (theme: any) => ({
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
      link: '/store',
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
  ];

  const DrawerList = (
    <Box sx={{ width: 250 }} role='presentation' onClick={toggleDrawer(false)}>
      <List>
        {menuList?.map((tab, index) => (
          <Link href={tab.link} className={linkStyles} key={index}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon sx={styles.icon}>{tab.icon}</ListItemIcon>
                <ListItemText sx={styles.text} primary={tab.name} />
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
        <MenuIcon fontSize='large' sx={styles.menuIconStyles} />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default Menu;
