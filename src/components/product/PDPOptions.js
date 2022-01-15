import React from 'react'
import { Grid, Typography, Button } from '@mui/material'
import { useRecoilState, useRecoilValue } from 'recoil'
import {
  selectedOptionIndexAtom,
  selectedProductAtom,
  selectedProductOptionsAtom,
} from '../../atoms/atoms'
import ProductColors from './ProductColors'
import ProductSizes from './ProductSizes'
import ProductQuantity from './ProductQuantity'
const PDPOptions = () => {
  const { title } = useRecoilValue(selectedProductAtom)
  const options = useRecoilValue(selectedProductOptionsAtom)
  const [selectedOption, setSelectedOption] = useRecoilState(
    selectedOptionIndexAtom
  )
  const [sizes, setSizes] = React.useState(options[selectedOption].sizes)
  const [selectedSize, setSelectedSize] = React.useState(0)
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
          />
        </Grid>
        <Grid item xs={6} md='auto'>
          <Button
            variant='contained'
            className='btn btn-lg btn-checkout'
            color='info'>
            Add To Cart
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default PDPOptions
