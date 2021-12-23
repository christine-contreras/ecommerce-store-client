import React from 'react'
import { Grid, Typography } from '@mui/material'
import { useLocation } from 'react-router'
import MyInfo from './MyInfo'
const Main = ({ title }) => {
  let location = useLocation()
  return (
    <>
      <Grid item>
        <Typography component='h1' variant='h4' align='center' paddingTop>
          {title}
        </Typography>
      </Grid>

      {location.pathname.includes('my-info') && <MyInfo />}
    </>
  )
}

export default Main
