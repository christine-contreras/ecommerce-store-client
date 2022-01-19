import * as React from 'react'
import { Grid, Typography, Container, Button } from '@mui/material'
import Loading from '../components/order/Loading'
import NotFound from '../components/NotFound'
import { useRecoilValue, useRecoilState } from 'recoil'
import {
  cartAtom,
  cartItemsAtom,
  userAtom,
  userOrdersAtom,
} from '../atoms/atoms'
import { useNavigate } from 'react-router-dom'
import OrderPreview from '../components/order/OrderPreview'

const OrderConfirmation = () => {
  let navigate = useNavigate()
  const userOrders = useRecoilValue(userOrdersAtom)
  const [user, setUser] = useRecoilState(userAtom)
  const [cart, setCart] = useRecoilState(cartAtom)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)
  const [order, setOrder] = React.useState(null)

  const cartItems = useRecoilValue(cartItemsAtom)

  React.useEffect(() => {
    const search = new URLSearchParams(window.location.search)

    if (search.has('session_id') && cartItems && cartItems?.length !== 0) {
      const session = search.get('session_id')
      const orderExists = userOrders.find(
        (order) => order.session_id === session
      )
      if (orderExists) {
        setOrder(orderExists)
        setLoading(false)
      } else {
        handleFetchStripeOrder(session)
      }
    }
  }, [cartItems])

  const handleFetchStripeOrder = (session_id) => {
    const items = handleCheckoutItems()
    fetch('/api/order-success', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        session_id,
        items,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setOrder(data)
        const newUser = { ...user, orders: [...userOrders, data] }
        setUser(newUser)

        const newCart = {
          ...cart,
          total: '0',
          shipping: '0',
          item_count: 0,
          selected_items: [],
        }
        setCart(newCart)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setError(true)
      })
  }

  const handleCheckoutItems = () => {
    return cartItems?.map((item) => {
      return item.id
    })
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <NotFound />
      ) : (
        <Grid item container sx={{ backgroundColor: 'secondary.main' }}>
          <Container maxWidth='md' sx={{ pt: 4, pb: 4 }}>
            <Grid
              item
              container
              flexDirection='column'
              justifyContent='center'
              spacing={5}>
              <Grid item textAlign='center'>
                <Typography variant='h2' component='h1'>
                  Thank you for your order
                </Typography>
              </Grid>

              <Grid item>
                <OrderPreview order={order} />
              </Grid>

              <Grid item textAlign='center'>
                <Button
                  onClick={() => navigate('/')}
                  variant='contained'
                  className='btn btn-lg'
                  color='info'>
                  Continue Shopping
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      )}
    </>
  )
}

export default OrderConfirmation
