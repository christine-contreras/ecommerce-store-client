import React from 'react'
import { Grid, Button, IconButton, Badge, Icon } from '@mui/material'
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { cartAtom, toggleCartOpenAtom } from '../../atoms/atoms'
import { useRecoilValue, useSetRecoilState } from 'recoil'

const CartHeader = () => {
  const { item_count } = useRecoilValue(cartAtom)
  const setToggleCart = useSetRecoilState(toggleCartOpenAtom)
  return (
    <Grid
      item
      container
      alignItems='center'
      justifyContent='space-between'
      sx={{ backgroundColor: 'secondary.dark', p: 2 }}>
      <Grid item xs='auto'>
        <Button
          variant='text'
          color='info'
          startIcon={<ArrowCircleLeftOutlinedIcon />}
          onClick={setToggleCart}>
          Keep Shopping
        </Button>
      </Grid>
      <Grid item container xs='auto' sx={{ pr: 1 }}>
        <Badge badgeContent={item_count} color='info'>
          <ShoppingCartOutlinedIcon />
        </Badge>
      </Grid>
    </Grid>
  )
}

export default CartHeader
