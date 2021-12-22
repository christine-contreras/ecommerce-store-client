import React from 'react'
import { Container, Grid } from '@mui/material'
import Nav from './Nav'

const Layout = ({ children }) => {
  return (
    <Grid container flexDirection='column'>
      <Grid item>
        <Nav />
      </Grid>
      <Grid item container sx={{ pt: 15 }}>
        {children}
      </Grid>
    </Grid>
  )
}

export default Layout
