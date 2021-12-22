import React from 'react'
import '../style/css/nav.css'
import { Grid, Toolbar, AppBar } from '@mui/material'

import SiteLinks from '../components/nav/SiteLinks'
import UserLinks from '../components/nav/UserLinks'
import Logo from '../components/nav/Logo'
const Nav = () => {
  return (
    <AppBar
      position='fixed'
      color='transparent'
      elevation={1}
      sx={{ color: 'text.primary' }}>
      <Toolbar>
        <Grid container spacing={2} alignItems='flex-end'>
          <SiteLinks />

          <Logo />

          <UserLinks />
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Nav
