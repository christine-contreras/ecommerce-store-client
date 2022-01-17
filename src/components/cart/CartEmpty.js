import React from 'react'
import { Grid, Typography } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
const CartEmpty = () => {
  return (
    <Grid item sx={{ height: '100%' }}>
      <Grid
        item
        container
        spacing={2}
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        sx={{ height: '100%' }}>
        <Grid item>
          <ShoppingCartIcon
            sx={{ fontSize: '6rem', color: 'secondary.dark' }}
          />
        </Grid>
        <Grid item>
          <Typography
            variant='h5'
            sx={{ color: 'secondary.dark', fontWeight: 'bold' }}>
            Cart Empty
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default CartEmpty
