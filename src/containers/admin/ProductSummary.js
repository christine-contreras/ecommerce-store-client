import * as React from 'react'
import { Grid } from '@mui/material'
import FormProduct from '../../components/dashboard/FormProduct'
const ProductSummary = ({ product }) => {
  const [imgURL, setImageURL] = React.useState(null)

  React.useEffect(() => {
    if (product.skus.length !== 0) {
      setImageURL(product.skus[0].image.url)
    }
  }, [product])
  return (
    <Grid container item>
      <Grid item xs={12} md={6}>
        <FormProduct product={product} />
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
