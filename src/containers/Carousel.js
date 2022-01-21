import * as React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../style/css/carousel.css'
import { Grid, Typography, Container } from '@mui/material'
import Slider from 'react-slick'
import { useRecoilValue } from 'recoil'
import { categoriesAtom } from '../atoms/atoms'

import ProductPreview from '../components/product/ProductPreview'
const Carousel = ({ title }) => {
  const categories = useRecoilValue(categoriesAtom)
  const [carouselCategory, setCarouselCategory] = React.useState(null)

  React.useEffect(() => {
    if (categories) {
      const category = categories.find((cat) => cat.name === 'Best Sellers')
      category && setCarouselCategory(category)
    }
  }, [categories])

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <Grid
      item
      container
      sx={{ backgroundColor: 'primary.dark', pt: 5, pb: 5 }}
      className='carousel'>
      <Container maxWidth='xl' sx={{ p: 0 }}>
        <Grid container flexDirection='column' spacing={3} alignItems='center'>
          <Grid item xs={12}>
            <Typography variant='h2' component='h2'>
              {title}
            </Typography>
          </Grid>
          <Grid item container sx={{ overflow: 'unset' }}>
            <Slider {...settings}>
              {carouselCategory?.products.map((product) => (
                <ProductPreview
                  product={product}
                  carousel={true}
                  key={`carousel-item-product.title`}
                />
              ))}
            </Slider>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  )
}

export default Carousel
