import React from 'react'
import { Grid, Typography, ButtonGroup, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const NoProfileMessage = () => {
  let navigate = useNavigate()

  return (
    <Grid
      container
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      sx={{ pt: 5 }}>
      <Typography variant='subtitle1' align='center'>
        No Profile
      </Typography>
      <Typography component='p' align='center'>
        If you would like to view a profile please login.
      </Typography>
      <Grid item className='padding-top'>
        <ButtonGroup variant='contained' color='info'>
          <Button className='btn' onClick={() => navigate(`/`)}>
            Go To Homepage
          </Button>
          <Button className='btn' onClick={() => navigate(`/login`)}>
            Log In
          </Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  )
}

export default NoProfileMessage
