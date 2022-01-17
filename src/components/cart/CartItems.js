import React from 'react'
import { Grid } from '@mui/material'
import { useRecoilValue } from 'recoil'
import { cartItemsAtom } from '../../atoms/atoms'
import ProductCart from '../product/ProductCart'
const CartItems = ({ setLoading }) => {
  const items = useRecoilValue(cartItemsAtom)
  return (
    <Grid item container flexDirection='column' sx={{ p: 2 }} spacing={5}>
      {items.map((item) => (
        <ProductCart
          key={`cart-product-${item.id}`}
          item={item}
          setLoading={setLoading}
        />
      ))}
    </Grid>
  )
}

export default CartItems
