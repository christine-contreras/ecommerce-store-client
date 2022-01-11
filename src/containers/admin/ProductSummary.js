import * as React from 'react'
import { Grid } from '@mui/material'
import FormProduct from '../../components/dashboard/FormProduct'
import {
  selectedProductAtom,
  selectedProductImageUrlAtom,
} from '../../atoms/atoms'
import { useRecoilValue } from 'recoil'
const ProductSummary = () => {
  const imgURL = useRecoilValue(selectedProductImageUrlAtom)
  const product = useRecoilValue(selectedProductAtom)

  return (
    <Grid container item>
      <Grid item xs={12} md={6}>
        <FormProduct />
      </Grid>
      <Grid item xs={12} md={6}>
        {imgURL && (
          <img src={imgURL} alt={product.title} className='img-responsive' />
        )}
      </Grid>
    </Grid>
  )
}

export default ProductSummary
