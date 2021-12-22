import React from 'react'
import '../style/css/nav.css'
import { Grid, Toolbar, AppBar } from '@mui/material'
import { useScrollTrigger } from '@mui/material'

import SiteLinks from '../components/nav/SiteLinks'
import UserLinks from '../components/nav/UserLinks'
import Logo from '../components/nav/Logo'

function AppbarScroll(props) {
  const { children } = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    color: trigger ? 'secondary' : 'transparent',
  })
}

const Nav = (props) => {
  return (
    <AppbarScroll {...props}>
      <AppBar
        position='fixed'
        color='transparent'
        sx={{ color: 'text.primary' }}>
        <Toolbar>
          <Grid container spacing={2} alignItems='flex-end'>
            <SiteLinks />

            <Logo />

            <UserLinks />
          </Grid>
        </Toolbar>
      </AppBar>
    </AppbarScroll>
  )
}

export default Nav
