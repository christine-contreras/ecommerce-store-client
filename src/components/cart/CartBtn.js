import * as React from 'react'
import { Grid, Button } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import {
  cartItemsAtom,
  checkoutAtom,
  userAtom,
  toggleCartOpenAtom,
  stripeCheckoutAtom,
} from '../../atoms/atoms'
import { useNavigate } from 'react-router-dom'

const CartBtn = ({ loading }) => {
  let navigate = useNavigate()
  const cartItems = useRecoilValue(cartItemsAtom)
  const user = useRecoilValue(userAtom)
  const setCheckout = useSetRecoilState(checkoutAtom)
  const setToggleCart = useSetRecoilState(toggleCartOpenAtom)
  const startCheckout = useSetRecoilState(stripeCheckoutAtom)

  const handleCheckoutClick = () => {
    setCheckout(true)

    if (user) {
      startCheckout()
    } else {
      setToggleCart()
      navigate('/login')
    }
  }

  return (
    <Grid item>
      {cartItems?.length !== 0 ? (
        <LoadingButton
          onClick={handleCheckoutClick}
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
  )
}

export default CartBtn
