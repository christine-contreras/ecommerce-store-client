import React from 'react'
import '../style/css/cart.css'
import { Modal, Grid, Collapse } from '@mui/material'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { cartOpenAtom, toggleCartOpenAtom } from '../atoms/atoms'
import CartHeader from '../components/cart/CartHeader'
import CartTotal from '../components/cart/CartTotal'
import CartItems from '../components/cart/CartItems'

const Cart = () => {
  const modalOpen = useRecoilValue(cartOpenAtom)
  const setToggleCart = useSetRecoilState(toggleCartOpenAtom)
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
          <Grid item flexGrow={1}>
            <CartItems />
          </Grid>
          <Grid item>
            <CartTotal />
          </Grid>
        </Grid>
      </Collapse>
    </Modal>
  )
}

export default Cart
