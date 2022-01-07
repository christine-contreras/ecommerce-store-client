import React from 'react'
import '../../style/css/product.css'
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardActions,
  CardContent,
  Typography,
  Button,
} from '@mui/material'
import ProductPlaceHolder from '../../style/images/product-placeholder.jpg'
const ProductPreview = ({ product }) => {
  return (
    <Grid item xs={6} md={4} lg={3}>
      <Card className='product-card' elevation={0} square={true}>
        <CardActionArea>
          <CardMedia
            component='img'
            // height="140"
            image={ProductPlaceHolder}
            alt={product.title}
          />
          <CardContent>
            <Grid
              container
              spacing={1}
              alignItems='center'
              justifyContent='space-between'>
              <Grid item xs={12} md='auto' textAlign='center'>
                <Typography>{product.title}</Typography>
              </Grid>
              <Grid item xs={12} md='auto' textAlign='center'>
                <Typography>$ {parseInt(product.skus[0].price)}</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}

export default ProductPreview
