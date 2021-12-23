import React from 'react'
import '../style/css/nav.css'
import { adminAtom } from '../atoms/atoms'
import { useRecoilValue } from 'recoil'

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

const Nav = ({ props, onLogout }) => {
  const isAdmin = useRecoilValue(adminAtom)

  return (
    <AppbarScroll {...props}>
      <AppBar
        position='fixed'
        color='transparent'
        sx={{ color: 'text.primary' }}>
        <Toolbar>
          <Grid container spacing={2} alignItems='flex-end'>
            <Grid
              item
              xs={4}
              md={5}
              sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
              {!isAdmin && <SiteLinks />}
            </Grid>
            <Logo />

            <UserLinks onLogout={onLogout} />
          </Grid>
        </Toolbar>
      </AppBar>
    </AppbarScroll>
  )
}

export default Nav
