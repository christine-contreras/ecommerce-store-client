import * as React from 'react'
import { Grid, Typography, Button, Stack, Alert } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import {
  cartAtom,
  selectedOptionIndexAtom,
  selectedProductAtom,
  selectedProductOptionsAtom,
  cartOpenAtom,
} from '../../atoms/atoms'
import ProductColors from './ProductColors'
import ProductSizes from './ProductSizes'
import ProductQuantity from './ProductQuantity'

const PDPOptions = () => {
  const [cart, setCart] = useRecoilState(cartAtom)
  const { title, id } = useRecoilValue(selectedProductAtom)
  const options = useRecoilValue(selectedProductOptionsAtom)
  const [selectedOption, setSelectedOption] = useRecoilState(
    selectedOptionIndexAtom
  )

  const sizes = options[selectedOption]?.sizes
  const [selectedSize, setSelectedSize] = React.useState(0)
  const [quantity, setQuantity] = React.useState(1)
  const outOfStock =
    options[selectedOption]?.sizes[selectedSize]?.quantity === 0 ? true : false

  const [loading, setLoading] = React.useState(false)
  const [errors, setErrors] = React.useState([])
  const setCartOpen = useSetRecoilState(cartOpenAtom)

  const handleAddToCart = () => {
    setLoading(true)
    setErrors([])
    const item = {
      quantity,
      product_id: id,
      color: options[selectedOption].color,
      size: options[selectedOption]?.sizes[selectedSize]?.size,
    }

    fetch(`/api/carts/${cart.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(item),
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          setCart(data)
          setCartOpen(true)
        })
        setLoading(false)
      } else {
        response.json().then((err) => {
          setErrors(err.errors)
          setLoading(false)
        })
      }
    })
  }
  return (
    <Grid item container spacing={3} flexDirection='column'>
      <Grid item container spacing={1}>
        <Grid item container spacing={2}>
          <Grid item>
            <Typography>Color:</Typography>
          </Grid>
          <Grid item>
            <Typography variant='subtitle2'>
              {options[selectedOption].color}
            </Typography>
          </Grid>
        </Grid>
        <ProductColors
          options={options}
          option={selectedOption}
          setOption={setSelectedOption}
          product={title}
        />
      </Grid>

      <Grid item container spacing={1}>
        <Grid item container spacing={2}>
          <Grid item>
            <Typography>Size:</Typography>
          </Grid>
          <Grid item>
            <Typography variant='subtitle2'>
              {options[selectedOption]?.sizes[selectedSize]?.size}
            </Typography>
          </Grid>
        </Grid>
        <ProductSizes
          options={sizes}
          option={selectedSize}
          setOption={setSelectedSize}
        />
      </Grid>

      <Grid item container spacing={2}>
        <Grid item xs={6} md={4}>
          <ProductQuantity
            max={options[selectedOption]?.sizes[selectedSize]?.quantity}
            quantity={quantity}
            setQuantity={setQuantity}
          />
        </Grid>
        <Grid item xs={6} md='auto'>
          {outOfStock ? (
            <Button
              variant='contained'
              className='btn btn-lg btn-checkout'
              color='info'
              disabled>
              Out Of Stock
            </Button>
          ) : (
            <LoadingButton
              onClick={handleAddToCart}
              loading={loading}
              variant='contained'
              className='btn btn-lg btn-checkout'
              color='info'>
              Add To Cart
            </LoadingButton>
          )}
        </Grid>
      </Grid>

      <Grid item>
        <Stack sx={{ width: '100%' }} spacing={2} className='padding-top'>
          {errors.map((error) => (
            <Alert severity='error' key={error} variant='filled'>
              {error}
            </Alert>
          ))}
        </Stack>
      </Grid>
    </Grid>
  )
}

export default PDPOptions
