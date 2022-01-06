import React from 'react'
import { Grid, Container } from '@mui/material'
const CategoryProducts = () => {
  return (
    <Grid container sx={{ backgroundColor: '#fff', p: 5 }}>
      <Container maxWidth='xl'>
        <Grid item container spacing={3} flexDirection='column'></Grid>
      </Container>
    </Grid>
  )
}

export default CategoryProducts
