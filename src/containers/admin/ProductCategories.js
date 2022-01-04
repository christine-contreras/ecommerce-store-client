import * as React from 'react'
import { Grid, Typography } from '@mui/material'
import FormProductCategories from '../../components/dashboard/FormProductCategories'
import { selectedProductCategoriesAtom, productsAtom } from '../../atoms/atoms'
import { useRecoilState, useSetRecoilState } from 'recoil'

const ProductCategories = ({ product }) => {
  const [productCategories, setProductCategories] = useRecoilState(
    selectedProductCategoriesAtom
  )
  const setProducts = useSetRecoilState(productsAtom)
  React.useEffect(() => {
    if (product) {
      setProductCategories(product.categories)
    }
  }, [product])

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

      <FormProductCategories />
    </Grid>
  )
}

export default ProductCategories
