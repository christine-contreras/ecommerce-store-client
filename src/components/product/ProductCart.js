import * as React from 'react'
import { Grid, Typography, IconButton } from '@mui/material'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import ProductQuantity from './ProductQuantity'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { cartAtom } from '../../atoms/atoms'
const ProductCart = ({ item, setLoading }) => {
  const [cart, setCart] = useRecoilState(cartAtom)
  console.log(cart)
  const [quantity, setQuantity] = React.useState(0)

  React.useEffect(() => {
    if (item) {
      setQuantity(item.quantity)
    }
  }, [item, cart])

  const handleDeleteItemFromCart = () => {
    setLoading(true)
    fetch(`/api/carts/${cart.id}/delete-item`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        selected_item_id: item.id,
      }),
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          setCart(data)
          setLoading(false)
        })
      } else {
        response.json().then((err) => {
          console.log(err)
          setLoading(false)
        })
      }
    })
  }

  const handleChangeItemQuantity = (qty) => {
    setLoading(true)
    setQuantity(qty)
    fetch(`/api/carts/${cart.id}/update-item-qty/${qty}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        selected_item_id: item.id,
      }),
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          setCart(data)
          setLoading(false)
        })
      } else {
        response.json().then((err) => {
          console.log(err)
          setLoading(false)
        })
      }
    })
  }

  return (
    <Grid item container spacing={2}>
      <Grid item xs={4}>
        <img
          src={item?.sku.image_url}
          alt={item?.sku.product.title}
          title={item?.sku.product.title}
          className='img-responsive'
        />
      </Grid>
      <Grid item container xs={8} spacing={2} flexDirection='column'>
        <Grid item container justifyContent='space-between'>
          <Grid item container xs='auto'>
            <Grid item container flexDirection='column' spacing={1}>
              <Grid item>
                <Typography variant='subtitle2'>
                  {item?.sku.product.title}
                </Typography>
              </Grid>
              <Grid item container spacing={3}>
                <Grid item>
                  <Typography className='small'>
                    Color: {item?.sku.color}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography className='small'>
                    Size: {item?.sku.size}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs='auto'>
            <IconButton
              aria-label='delete'
              color='info'
              size='small'
              onClick={handleDeleteItemFromCart}>
              <HighlightOffIcon />
            </IconButton>
          </Grid>
        </Grid>

        <Grid
          item
          container
          justifyContent='space-between'
          alignItems='flex-end'>
          <Grid item xs={6}>
            <ProductQuantity
              quantity={quantity}
              setQuantity={handleChangeItemQuantity}
              max={item?.sku?.quantity}
            />
          </Grid>
          <Grid item>
            <Typography>$ {parseInt(item?.price)}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ProductCart
