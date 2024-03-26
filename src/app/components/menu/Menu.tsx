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

const menuIconStyles = (theme: any) => ({
  color: `${theme.palette.WHITE}`,
});

const Menu = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const menuList = [
    {
      name: 'Shop',
      icon: <ShoppingCartIcon />,
    },
    {
      name: 'Our projects',
      icon: <WidgetsIcon />,
    },
    {
      name: 'Individual pricing',
      icon: <MonetizationOnIcon />,
    },
    {
      name: 'Contact',
      icon: <MailIcon />,
    },
  ];

  const DrawerList = (
    <Box sx={{ width: 250 }} role='presentation' onClick={toggleDrawer(false)}>
      <List>
        {menuList?.map((tab, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>{tab.icon}</ListItemIcon>
              <ListItemText primary={tab.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon fontSize='large' sx={menuIconStyles} />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default Menu;
