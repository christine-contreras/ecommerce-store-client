import * as React from 'react'
import '../style/css/cart.css'
import { Modal, Grid, Collapse } from '@mui/material'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { cartItemsAtom, cartOpenAtom, toggleCartOpenAtom } from '../atoms/atoms'
import CartHeader from '../components/cart/CartHeader'
import CartShippingGoal from '../components/cart/CartShippingGoal'
import CartTotal from '../components/cart/CartTotal'
import CartItems from '../components/cart/CartItems'
import CartEmpty from '../components/cart/CartEmpty'
const Cart = () => {
  const modalOpen = useRecoilValue(cartOpenAtom)
  const setToggleCart = useSetRecoilState(toggleCartOpenAtom)
  const [loading, setLoading] = React.useState(false)
  const cartItems = useRecoilValue(cartItemsAtom)

  return (
    <Modal
      className='modal'
      open={modalOpen}
      onClose={setToggleCart}
      aria-labelledby='modal-cart'
      aria-describedby='modal-cart'>
      <Collapse in={modalOpen} orientation='horizontal'>
        <Grid
          container
          flexDirection='column'
          justifyContent='space-between'
          className='cart-container'>
          <Grid item>
            <CartHeader />
          </Grid>
          <Grid item>
            <CartShippingGoal />
          </Grid>
          <Grid item flexGrow={1}>
            {cartItems?.length !== 0 ? (
              <CartItems setLoading={setLoading} />
            ) : (
              <CartEmpty />
            )}
          </Grid>
          <Grid item>
            <CartTotal loading={loading} />
          </Grid>
        </Grid>
      </Collapse>
    </Modal>
  )
}

export default Cart
