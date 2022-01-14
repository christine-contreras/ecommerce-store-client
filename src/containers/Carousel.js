import React from 'react'
import { Box, Grid, Typography, Container } from '@mui/material'
const Carousel = () => {
  return (
    <Grid
      item
      container
      sx={{ backgroundColor: 'primary.dark', p: 5 }}
      className='carousel'>
      <Container maxWidth='xl'>
        <Grid container flexDirection='column' spacing={3} alignItems='center'>
          <Grid item xs={12}>
            <Typography variant='h2' component='h2'>
              Best Sellers
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  )
}

export default Carousel
