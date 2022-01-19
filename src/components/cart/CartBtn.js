import * as React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Grid, Button } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import {
  cartItemsAtom,
  checkoutAtom,
  userAtom,
  toggleCartOpenAtom,
  cartAtom,
} from '../../atoms/atoms'
import { useNavigate } from 'react-router-dom'

const CartBtn = ({ loading }) => {
  let navigate = useNavigate()
  const cart = useRecoilValue(cartAtom)
  const cartItems = useRecoilValue(cartItemsAtom)
  const user = useRecoilValue(userAtom)
  const setCheckout = useSetRecoilState(checkoutAtom)
  const setToggleCart = useSetRecoilState(toggleCartOpenAtom)

  const handleCheckoutClick = () => {
    setCheckout(true)

    if (user) {
      handleStripeCheckout()
    } else {
      setToggleCart()
      navigate('/login')
    }
  }

  const handleStripeCheckout = () => {
    const items = handleCheckoutItems()
    fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items,
        shipping: cart.shipping,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setToggleCart()
        window.location = data.url
      })
      .catch((err) => console.log(err))
  }

  const handleCheckoutItems = () => {
    return cartItems?.map((item) => {
      return item.id
    })
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
