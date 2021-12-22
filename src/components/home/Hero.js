import React from 'react'
import { Grid, Typography, Box } from '@mui/material'
import HeroImage from '../../style/images/hero2.png'
const Hero = () => {
  return (
    <Grid
      container
      spacing={2}
      alignItems='center'
      justifyContent='center'
      className='hero-container'>
      <Grid item container xs={12} md={6} flexDirection='column' spacing={5}>
        <Grid item xs={12}>
          <Typography variant='h1' className='hero-title'>
            Jewlery for all free spirits
          </Typography>
        </Grid>

        <Grid item container flexDirection='column'>
          <Grid item>
            <Typography variant='subtitle1' component='p' paddingBottom>
              about us
            </Typography>
          </Grid>
          <Grid item xs={12} lg={11}>
            <Typography className='text-column'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
              sit.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        lg={4}
        sx={{ order: { xs: -1, md: 1 } }}
        textAlign='center'>
        <img
          class='img-arc img-responsive'
          src={HeroImage}
          role='presentation'
          style={{ maxWidth: 700 }}
        />
      </Grid>

      <Box
        className='background-box right'
        sx={{ backgroundColor: 'primary.light' }}
      />
    </Grid>
  )
}

export default Hero
