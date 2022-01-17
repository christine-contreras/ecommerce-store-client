import React from 'react'
import { Grid, Button, Typography } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import {
  cartAtom,
  cartItemsAtom,
  checkoutAtom,
  userAtom,
  toggleCartOpenAtom,
} from '../../atoms/atoms'
import { useNavigate } from 'react-router-dom'
const CartTotal = ({ loading }) => {
  let navigate = useNavigate()
  const cart = useRecoilValue(cartAtom)
  const cartItems = useRecoilValue(cartItemsAtom)
  const user = useRecoilValue(userAtom)
  const setCheckout = useSetRecoilState(checkoutAtom)
  const setToggleCart = useSetRecoilState(toggleCartOpenAtom)

  const handleAddToCart = () => {
    setCheckout(true)
    setToggleCart()
    if (user) {
      navigate('/checkout')
    } else {
      navigate('/login')
    }
  }
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
          {cartItems?.length !== 0 ? (
            <LoadingButton
              onClick={handleAddToCart}
              loading={loading}
              variant='contained'
              className='btn btn-lg btn-100'
              color='info'>
              Continue To Checkout
            </LoadingButton>
          ) : (
            <Button
              variant='contained'
              className='btn btn-lg btn-100'
              color='info'
              disabled>
              Add Items To Cart
            </Button>
          )}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default CartTotal
