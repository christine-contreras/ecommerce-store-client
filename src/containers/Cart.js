import React from 'react'
import '../style/css/cart.css'
import { Modal, Grid, Collapse } from '@mui/material'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { cartOpenAtom, toggleCartOpenAtom } from '../atoms/atoms'
import CartHeader from '../components/cart/CartHeader'

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
        <Grid container flexDirection='column' className='cart-container'>
          <Grid item>
            <CartHeader />
          </Grid>
        </Grid>
      </Collapse>
    </Modal>
  )
}

export default Cart
