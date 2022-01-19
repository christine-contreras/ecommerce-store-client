import React from 'react'
import { Grid, Skeleton, Typography, Box, Container } from '@mui/material'
import { LoadingButton } from '@mui/lab'
const Loading = () => {
  return (
    <Grid item container sx={{ backgroundColor: 'secondary.main' }}>
      <Container maxWidth='sm' sx={{ pt: 4, pb: 4 }}>
        <Grid item container spacing={5} flexDirection='column'>
          <Grid item xs={12}>
            <Typography variant='h1'>
              <Skeleton />
            </Typography>
          </Grid>

          <Grid item xs={12} textAlign='center'>
            <Skeleton variant='rectangular' width='100%' height={600}>
              <Box style={{ pt: 3 }} />
            </Skeleton>
          </Grid>

          <Grid
            item
            container
            xs={12}
            justifyContent='center'
            textAlign='center'>
            <Grid item>
              <LoadingButton
                loading={true}
                variant='contained'
                className='btn btn-lg btn-100'
                color='info'>
                Continue Shopping
              </LoadingButton>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  )
}

export default Loading
