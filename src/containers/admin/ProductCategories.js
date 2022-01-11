import * as React from 'react'
import { Grid, Typography } from '@mui/material'
import FormProductCategories from '../../components/dashboard/FormProductCategories'
import { productsAtom, selectedProductAtom } from '../../atoms/atoms'
import { useRecoilState, useSetRecoilState } from 'recoil'

const ProductCategories = () => {
  const setProducts = useSetRecoilState(productsAtom)
  const [product, setProduct] = useRecoilState(selectedProductAtom)

  const updateProductListNewCategories = (newCategoryList) => {
    const updatedproduct = {
      ...product,
      categories: newCategoryList,
      isSlotted: 'yes',
    }
    setProduct(updatedproduct)
    setProducts((prevProducts) =>
      prevProducts.map((p) => (p.id === updatedproduct.id ? updatedproduct : p))
    )
  }

  return (
    <Grid
      item
      container
      flexDirection='column'
      spacing={2}
      justifyContent='center'>
      <Grid item>
        <Typography component='h1' variant='h5' align='center' paddingTop>
          Slot Product to Categories
        </Typography>
      </Grid>

      <FormProductCategories updateProducts={updateProductListNewCategories} />
    </Grid>
  )
}

export default ProductCategories
