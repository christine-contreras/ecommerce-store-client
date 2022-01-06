import React from 'react'
import { Grid, Skeleton, Typography, Box, Container } from '@mui/material'
const Loading = () => {
  const boxes = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <>
      <Container maxWidth='xl'>
        <Grid
          container
          spacing={2}
          alignItems='center'
          justifyContent='center'
          className='hero-container'>
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

          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            sx={{ order: { xs: -1, md: 1 } }}
            textAlign='center'>
            <Skeleton variant='rectangular' width='100%' height={300}>
              <Box style={{ pt: 6 }} />
            </Skeleton>
          </Grid>

          <Box
            className='background-box right'
            sx={{ backgroundColor: 'primary.main' }}
          />
        </Grid>
      </Container>
      <Grid item sx={{ backgroundColor: '#fff', p: 5 }}>
        <Container maxWidth='xl'>
          <Grid item container spacing={5}>
            {boxes.map((box) => (
              <Grid
                item
                xs={6}
                md={4}
                lg={3}
                key={`loading-box-${box}`}
                container
                flexDirection='column'
                spacing={2}>
                <Grid item>
                  <Skeleton variant='rectangular' width='100%' height={200} />
                </Grid>
                <Grid item>
                  <Skeleton
                    variant='rectangular'
                    width='50%'
                    height={20}
                    sx={{ margin: 'auto' }}
                  />
                </Grid>
                <Grid item>
                  <Typography variant='h5'>
                    <Skeleton />
                  </Typography>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Grid>
    </>
  )
}

export default Loading
