import * as React from 'react'
import '../../style/css/product.css'
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material'
import ProductPlaceHolder from '../../style/images/product-placeholder.jpg'
import ProductColors from './ProductColors'
import { useNavigate } from 'react-router-dom'
import { selectedProductAtom } from '../../atoms/atoms'
import { useSetRecoilState } from 'recoil'
const ProductPreview = ({ product, carousel }) => {
  let navigate = useNavigate()
  const setProduct = useSetRecoilState(selectedProductAtom)
  const [productOptions, setProductOptions] = React.useState([])
  const [option, setOption] = React.useState(0)
  React.useEffect(() => {
    if (product) {
      setProductOptions(product.options)
    }
  }, [product])

  const handleProductClick = () => {
    setProduct(product)
    navigate(`/product/${product.id}`)
  }
  return (
    <Grid
      item
      xs={carousel ? 12 : 6}
      md={carousel ? 12 : 4}
      lg={carousel ? 12 : 3}
      className={
        carousel ? 'carousel-card-container' : 'product-card-container'
      }>
      <Card
        className={carousel ? 'carousel-card' : 'product-card'}
        elevation={0}
        square={true}>
        <CardActionArea onClick={handleProductClick}>
          <CardMedia
            component='img'
            image={productOptions[option]?.image_url ?? ProductPlaceHolder}
            alt={product.title}
          />
          <CardContent>
            <Grid
              container
              spacing={1}
              wrap='nowrap'
              alignItems='center'
              justifyContent='space-between'>
              <Grid item xs={12} md={10}>
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
          options={productOptions}
          option={option}
          setOption={setOption}
          product={product.title}
        />
      </Card>
    </Grid>
  )
}

export default ProductPreview
