import React from 'react'
import { Grid, Typography } from '@mui/material'
import { useRecoilValue } from 'recoil'
import { cartAtom } from '../../atoms/atoms'
import CartBtn from './CartBtn'
const CartTotal = ({ loading }) => {
  const cart = useRecoilValue(cartAtom)

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
            <Typography>$ {parseInt(cart?.total)}</Typography>
          </Grid>
        </Grid>

        <Grid item container alignItems='center' justifyContent='space-between'>
          <Grid item>
            <Typography>Estimated Shipping</Typography>
          </Grid>
          <Grid item>
            <Typography>$ {parseInt(cart?.shipping)}</Typography>
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
              <strong>
                $ {parseInt(cart?.total) + parseInt(cart?.shipping)}
              </strong>
            </Typography>
          </Grid>
        </Grid>

        <Grid item>
          <CartBtn loading={loading} />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default CartTotal
