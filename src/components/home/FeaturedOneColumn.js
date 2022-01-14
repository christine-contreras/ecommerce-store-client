import React from 'react'
import { Grid, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const FeaturedOneColumn = ({ category }) => {
  let navigate = useNavigate()
  return (
    <Grid
      container
      spacing={2}
      alignItems='center'
      justifyContent='space-around'
      className='hero-container'>
      <Grid
        item
        container
        xs={12}
        md={7}
        alignItems='center'
        justifyContent='center'>
        <div className='img-stack'>
          <img
            className='img-responsive'
            src={category.background}
            role='presentation'
          />
          <img
            className='img-responsive'
            src={category.image}
            role='presentation'
          />
        </div>
      </Grid>

      <Grid item container xs={12} md={5} flexDirection='column' spacing={5}>
        <Grid item xs={12} lg={11}>
          <Typography variant='h2' className='hero-title'>
            {category.title}
          </Typography>
        </Grid>

        <Grid item container flexDirection='column'>
          <Grid item xs={12} lg={8}>
            <Typography>{category.text}</Typography>
          </Grid>
        </Grid>

        <Grid item>
          <Button
            variant='outlined'
            className='btn btn-lg'
            color='info'
            onClick={() => navigate(category.url)}>
            Shop Now
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default FeaturedOneColumn
