import React from 'react'
import '../style/css/home.css'
import image1 from '../style/images/home-bracelets.jpg'
import image2 from '../style/images/home-background.jpg'
import image3 from '../style/images/home-rings.jpg'
import image4 from '../style/images/home-necklace-model.jpg'
import { Container } from '@mui/material'
import Hero from '../components/home/Hero'
import Carousel from './Carousel'
import FeaturedOneColumn from '../components/home/FeaturedOneColumn'
import FeaturedTwoColumn from '../components/home/FeaturedTwoColumn'
const Home = () => {
  const categoryOneColumn = {
    image: image1,
    background: image2,
    title: 'Every piece is crafted by hand',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.',
    url: '/category/8',
  }

  const categoriesTwoColumns = [
    {
      image: image3,
      title: 'One Of-A-Kind Rings',
      category: 'rings',
      url: '/category/3',
    },
    {
      image: image4,
      title: 'Ethereal Necklaces',
      category: 'necklaces',
      url: '/category/4',
    },
  ]
  return (
    <>
      <Container maxWidth='xl'>
        <Hero />
      </Container>
      <Carousel />
      <Container maxWidth='xl'>
        <FeaturedOneColumn category={categoryOneColumn} />
        <FeaturedTwoColumn categories={categoriesTwoColumns} />
      </Container>
    </>
  )
}

export default Home
