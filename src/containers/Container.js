import * as React from 'react'
import { Outlet } from 'react-router'
import { Grid } from '@mui/material'

const Container = () => {
  return (
    <Grid container flexDirection='column'>
      <Outlet />
    </Grid>
  )
}

export default Container
