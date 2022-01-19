import React from 'react'
import { Grid, Typography } from '@mui/material'
const ProductOrder = ({ item }) => {
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
      <Grid item container xs={8} spacing={1} flexDirection='column'>
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
        <Grid item>
          <Typography className='small'>Quantity: {item?.quantity}</Typography>
        </Grid>
        <Grid item>
          <Typography className='small'>
            Price: ${parseInt(item?.price)}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ProductOrder
