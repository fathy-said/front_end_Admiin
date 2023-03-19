import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Header, SidBar } from '../../components/';

const drawerWidth = 240;

const Layout = (props) => {
  // const location = useLocation();
  let { t, i18n } = useTranslation()
  console.log(i18n)
  // useEffect(() => {
  //   document.querySelector('html').style.scrollBehavior = 'auto'
  //   window.scroll({ top: 0 })
  //   document.querySelector('html').style.scrollBehavior = ''
  // }, [location.pathname]); // triggered on route change
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <>

      <Box sx={{ display: 'flex', minHeight: '100vh', direction: i18n.language === 'ar' ? 'rtl' : 'ltr' }}>
        {/* <CssBaseline /> */}
        <Header {...{ handleDrawerToggle, i18n, drawerWidth }} />

        <SidBar {...{ drawerWidth, container, i18n, mobileOpen, handleDrawerToggle }} />


        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >

          <Toolbar />
          <Outlet />
        </Box>
      </Box>


    </>
  );
}
Layout.propTypes = {

  window: PropTypes.func,
};
export default Layout;
