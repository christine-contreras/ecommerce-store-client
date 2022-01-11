import * as React from 'react'
import { Grid, Container, Typography } from '@mui/material'
import ProductPreview from '../product/ProductPreview'
import CategoryNav from './CategoryNav'
import CategoryFilter from './CategoryFilter'
import { useRecoilValue } from 'recoil'
import {
  selectedCategoryProductsCountAtom,
  plpFilteredProducts,
} from '../../atoms/atoms'
const CategoryProducts = () => {
  const count = useRecoilValue(selectedCategoryProductsCountAtom)
  const products = useRecoilValue(plpFilteredProducts)
  console.log(products)
  return (
    <Grid
      container
      sx={{ backgroundColor: '#fff', pt: 5, pb: 5, borderTop: '1px solid' }}>
      <Container maxWidth='xl'>
        <Grid item container spacing={6} flexDirection='column'>
          <Grid
            item
            container
            spacing={2}
            alignItems='flex-end'
            justifyContent='space-between'>
            <Grid item container xs={12} sm='auto' justifyContent='center'>
              <CategoryNav />
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={2}>
              <CategoryFilter />
            </Grid>
          </Grid>

          {count === 0 ? (
            <Grid item>
              <Typography variant='h1' textAlign='center'>
                No Products
              </Typography>
            </Grid>
          ) : (
            <Grid item container spacing={5}>
              {products.map((product) => (
                <ProductPreview
                  key={`product-preview-category-${product.id}`}
                  product={product}
                />
              ))}
            </Grid>
          )}
        </Grid>
      </Container>
    </Grid>
  )
}

export default CategoryProducts
