import React from 'react'
import { Grid, Button, Typography } from '@mui/material'
import { useRecoilValue } from 'recoil'
import { cartAtom } from '../../atoms/atoms'
const CartTotal = () => {
  const { total, shipping } = useRecoilValue(cartAtom)
  return (
    <Grid item container sx={{ borderTop: '1px solid' }}>
      <Grid item container flexDirection='column' spacing={2} sx={{ p: 2 }}>
        <Grid
          item
          container
          alignItems='center'
          justifyContent='space-between'
          spacing={2}>
          <Grid item>
            <Typography>Subtotal</Typography>
          </Grid>
          <Grid item>
            <Typography>$ {parseInt(total)}</Typography>
          </Grid>
        </Grid>

        <Grid item container alignItems='center' justifyContent='space-between'>
          <Grid item>
            <Typography>Estimated Shipping</Typography>
          </Grid>
          <Grid item>
            <Typography>$ {parseInt(shipping)}</Typography>
          </Grid>
        </Grid>

        <Grid item container alignItems='center' justifyContent='space-between'>
          <Grid item>
            <Typography>
              <strong>Estimated Total</strong>
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              <strong>$ {parseInt(total) + parseInt(shipping)}</strong>
            </Typography>
          </Grid>
        </Grid>

        <Grid item>
          <Button
            variant='contained'
            className='btn btn-lg btn-100'
            color='info'>
            Continue To Checkout
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default CartTotal
