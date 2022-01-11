import * as React from 'react'
import '../../style/css/product.css'
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Radio,
} from '@mui/material'
import ProductPlaceHolder from '../../style/images/product-placeholder.jpg'
import ProductColors from './ProductColors'
const ProductPreview = ({ product }) => {
  const [productOptions, setProductOptions] = React.useState([])
  const [option, setOption] = React.useState(0)
  React.useEffect(() => {
    if (product) {
      setProductOptions(product.options)
    }
  }, [product])
  return (
    <Grid item xs={6} md={4} lg={3}>
      <Card className='product-card' elevation={0} square={true}>
        <CardActionArea>
          <CardMedia
            component='img'
            image={productOptions[option]?.image_url ?? ProductPlaceHolder}
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
                <Typography>
                  $ {parseInt(productOptions[option]?.price)}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
        <ProductColors
          productOptions={productOptions}
          option={option}
          setOption={setOption}
        />
      </Card>
    </Grid>
  )
}

export default ProductPreview