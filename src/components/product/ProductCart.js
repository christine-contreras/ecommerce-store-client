import * as React from 'react'
import { Grid, Typography, IconButton } from '@mui/material'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import ProductQuantity from './ProductQuantity'
const ProductCart = ({ item }) => {
  const [quantity, setQuantity] = React.useState(0)

  React.useEffect(() => {
    if (item) {
      setQuantity(item.quantity)
    }
  }, [item])
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
            <IconButton aria-label='delete' color='info' size='small'>
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
              setQuantity={setQuantity}
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
