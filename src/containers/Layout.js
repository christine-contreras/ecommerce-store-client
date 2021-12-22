import React from 'react'
import { Grid } from '@mui/material'
import Nav from './Nav'
import Footer from './Footer'
const Layout = ({ children }) => {
  return (
    <Grid
      container
      flexDirection='column'
      justifyContent='space-between'
      sx={{ minHeight: '100vh' }}>
      <Grid item>
        <Nav />
      </Grid>
      <Grid item container sx={{ pt: 15, flexGrow: 1 }}>
        {children}
      </Grid>
      <Grid item container>
        <Footer />
      </Grid>
    </Grid>
  )
}

export default Layout
