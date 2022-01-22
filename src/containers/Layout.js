import React from 'react'
import { Grid } from '@mui/material'
import { adminAtom } from '../atoms/atoms'
import { useRecoilValue } from 'recoil'

import Nav from './Nav'
import Footer from './Footer'

const Layout = ({ children, onLogout }) => {
  const isAdmin = useRecoilValue(adminAtom)

  return (
    <Grid
      container
      flexDirection='column'
      justifyContent='space-between'
      sx={{ minHeight: '100vh' }}>
      <Grid item>
        <Nav onLogout={onLogout} />
      </Grid>
      <Grid item container sx={{ pt: 15, flexGrow: 1 }}>
        {children}
      </Grid>
      {!isAdmin && (
        <Grid item container>
          <Footer />
        </Grid>
      )}
    </Grid>
  )
}

export default Layout
