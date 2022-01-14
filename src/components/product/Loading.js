import React from 'react'
import { Grid, Skeleton, Typography, Box, Container } from '@mui/material'
const Loading = () => {
  return (
    <>
      <Container maxWidth='xl'>
        <Grid
          container
          spacing={10}
          alignItems='center'
          justifyContent='center'
          className='hero-container'>
          <Grid item xs={12} md={6} textAlign='center'>
            <Skeleton variant='rectangular' width='100%' height={500}>
              <Box style={{ pt: 3 }} />
            </Skeleton>
          </Grid>

          <Grid
            item
            container
            xs={12}
            md={6}
            flexDirection='column'
            spacing={5}>
            <Grid item xs={12}>
              <Typography variant='h1' className='hero-title'>
                <Skeleton />
              </Typography>
            </Grid>

            <Grid item xs={12} lg={11}>
              <Typography className='text-column'>
                <Skeleton />
              </Typography>
            </Grid>
          </Grid>

          <Box
            className='background-box left'
            sx={{ backgroundColor: 'primary.main' }}
          />
        </Grid>
      </Container>
    </>
  )
}

export default Loading
