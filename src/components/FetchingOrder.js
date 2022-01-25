import React from 'react'
import { Grid, Container, Box, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router'
const FetchingOrder = () => {
  let navigate = useNavigate()

  return (
    <Container maxWidth='xl' sx={{ pt: 6 }}>
      <Grid
        item
        container
        xs={12}
        flexDirection='column'
        spacing={5}
        alignItems='center'
        justifyContent='center'>
        <Grid item xs={12} flexDirection='column' spacing={3}>
          <Grid item xs={12}>
            <Typography variant='h1' textAlign='center'>
              Fetching Order... One Moment
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Button
            variant='contained'
            className='btn btn-lg'
            color='info'
            onClick={() => navigate(`/`)}>
            Keep Browsing
          </Button>
        </Grid>
      </Grid>
      <Box
        className='background-box right'
        sx={{ backgroundColor: 'primary.main' }}
      />
    </Container>
  )
}

export default FetchingOrder
