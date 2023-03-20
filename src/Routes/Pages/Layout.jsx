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
  //handle language
  let { t, i18n } = useTranslation()
  useEffect(() => {
    if (i18n.language === 'ar') {
      document.querySelector('html').lang = 'ar'
      document.querySelector('html').dir = 'rtl'

    }
    else {
      document.querySelector('html').lang = 'en'
      document.querySelector('html').dir = 'ltr'

    }

  }, [i18n.language]);
  //handle language
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
          sx={{ mt: '20px', width: { xs: '100%', sm: `calc(100% - ${drawerWidth}px)` }, overflow: "hidden" }}
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
