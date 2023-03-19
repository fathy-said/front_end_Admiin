import React, { useMemo } from 'react';
import "./SidBar.css"
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { NavLink, useNavigate } from 'react-router-dom';
import { BrandingWatermark, KeyboardDoubleArrowLeft } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';
const SidBar = ({ drawerWidth, container, mobileOpen, handleDrawerToggle, i18n }) => {
  let navigate = useNavigate()
  let drawer = useMemo(() => {
    return (
      <>
        <Divider />
        <List>
          {/* <NavLink to={'/admin/shop'} className='w-100 text-decoration-none'>
            </NavLink> */}
          <ListItem disablePadding   >
            <NavLink to={'/admin/'} className='w-100 text-decoration-none'>
              <ListItemButton sx={{ color: '#fff' }}  >
                <ListItemIcon >
                  <InboxIcon sx={{ color: '#fff' }} />
                </ListItemIcon>
                <ListItemText primary={'Dash'} />
              </ListItemButton>
            </NavLink>

          </ListItem>
          {/* ================================================= */}

          <ListItem disablePadding   >

            <NavLink to={'/admin/shop'} className='w-100 text-decoration-none'>
              <ListItemButton sx={{ color: '#fff' }} >
                <ListItemIcon>
                  <AddShoppingCartIcon sx={{ color: '#fff' }} />
                </ListItemIcon>
                <ListItemText primary={'My Shop'} />
              </ListItemButton>
            </NavLink>

          </ListItem>
          {/* ================================================= */}
          <ListItem disablePadding   >
            <NavLink to={'/admin/brand'} className='w-100 text-decoration-none'>
              <ListItemButton sx={{ color: '#fff' }} >
                <ListItemIcon>
                  <BrandingWatermark sx={{ color: '#fff' }} />
                </ListItemIcon>
                <ListItemText primary={'Brand'} />
              </ListItemButton>
            </NavLink>
          </ListItem>
        </List>
        {/* <Divider /> */}
      </>
    );

  }, []);

  return (
    <>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
        className='sidbar'
      >

        {/*  drawer in responsive */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box', paddingX: '15px', width: drawerWidth, backgroundColor: '#031d54', right: i18n.language === 'ar' && '0', left: i18n.language === 'ar' ? 'auto' : '0'
            },
          }}

        >
          <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton variant="contained" color="primary" onClick={handleDrawerToggle}>
              <KeyboardDoubleArrowLeft sx={{ color: '#fff' }} />
            </IconButton>
          </Toolbar>
          {drawer}
        </Drawer>
        {/*  drawer in dk */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box', width: drawerWidth, paddingX: '15px', backgroundColor: '#031d54', left: i18n.language === 'ar' ? 'auto' : '0'
            },
          }}
          open

        >
          <Toolbar />

          {drawer}
        </Drawer>
      </Box>
    </>
  );
}

export default SidBar;
