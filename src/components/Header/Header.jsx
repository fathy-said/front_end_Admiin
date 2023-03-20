import { AppBar, Avatar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography, } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import "./Header.css"
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const Header = ({ drawerWidth, handleDrawerToggle, i18n }) => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          mr: i18n.language === 'ar' && { sm: `${drawerWidth}px` },
          ml: i18n.language !== 'ar' && { sm: `${drawerWidth}px` },

        }}
        className="header"
      >
        <div className="container">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon sx={{ color: '#000' }} />
            </IconButton>

          </Toolbar>

          <Box className='box-left' >

            {

              i18n.language === 'ar' ? (
                <Button variant="contained" color="primary" sx={{ width: '35px', height: '35px', minWidth: '35px', }} className='  rounded-circle  !bg-slate-400 !ml-3' onClick={() => {
                  i18n.changeLanguage('en')
                }}>
                  en
                </Button>
              ) : (
                <Button variant='contained' sx={{ width: '35px', height: '35px', minWidth: '35px', }} className=' rounded-circle !bg-slate-400 !mr-3' onClick={() => {
                  i18n.changeLanguage('ar')
                }}>
                  ar
                </Button>

              )


            }


            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>


          </Box>
        </div>


      </AppBar>
    </>
  );
}

export default Header;
