import React from 'react'
import { Grid, Typography, Button, Container } from '@mui/material'
import { useNavigate } from 'react-router-dom'
const FeaturedTwoColumn = ({ categories }) => {
  let navigate = useNavigate()
  return (
    <Container maxWidth='lg' sx={{ pb: 8, pt: 6 }}>
      <Grid container spacing={10}>
        {categories &&
          categories.map((item) => (
            <Grid
              item
              container
              key={`featured-category-${item.category}`}
              flexDirection='column'
              alignItems='center'
              xs={12}
              md={6}
              spacing={2}>
              <Grid item>
                <img
                  className='img-responsive img-shadow light'
                  src={item.image}
                  role='presentation'
                />
              </Grid>
              <Grid item>
                <Typography variant='h4' component='h2'>
                  {item.title}
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  variant='outlined'
                  className='btn btn-lg'
                  color='info'
                  onClick={() => navigate(item.url)}>
                  Shop Now
                </Button>
              </Grid>
            </Grid>
          ))}
      </Grid>
    </Container>
  )
}

export default FeaturedTwoColumn
