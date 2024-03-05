import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import WidgetsIcon from '@mui/icons-material/Widgets';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

const Menu = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const {
    data: tabs,
    isLoading,
    isError: error,
  } = useSWR(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/tabs`, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  if (error) {
    return <p>Failed to fetch</p>;
  }

  if (isLoading) {
    return <p>Loading tabs...</p>;
  }

  const icons = [
    <ShoppingCartIcon />,
    <WidgetsIcon />,
    <MonetizationOnIcon />,
    <MailIcon />,
  ];

  const DrawerList = (
    <Box sx={{ width: 250 }} role='presentation' onClick={toggleDrawer(false)}>
      <List>
        {tabs?.data.map((tab, index) => (
          <ListItem key={tab.attributes.Text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {icons.map((icon, index) => {
                  return icon[index];
                })}
              </ListItemIcon>
              <ListItemText primary={tab.attributes.Text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon fontSize='large' style={{ color: '#fff' }} />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default Menu;
