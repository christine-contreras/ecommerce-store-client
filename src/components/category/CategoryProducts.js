import * as React from 'react'
import { Grid, Container, Typography } from '@mui/material'
import ProductPreview from '../product/ProductPreview'
import CategoryNav from './CategoryNav'
const CategoryProducts = ({ products, name }) => {
  const [productCount, setProductCount] = React.useState(0)

  React.useEffect(() => {
    if (products) {
      setProductCount(products.length)
    }
  }, [products])

  return (
    <Grid
      container
      sx={{ backgroundColor: '#fff', p: 5, borderTop: '1px solid' }}>
      <Container maxWidth='xl'>
        <Grid item container spacing={6} flexDirection='column'>
          <CategoryNav name={name} productCount={productCount} />

          {productCount === 0 ? (
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
