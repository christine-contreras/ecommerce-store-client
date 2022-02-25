import * as React from 'react'
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
import { useRecoilValue } from 'recoil'
import { categoriesAtom } from '../atoms/atoms'
const Home = () => {
  const categories = useRecoilValue(categoriesAtom)
  const [cat1, setCat1] = React.useState(null)
  const [cat2, setCat2] = React.useState(null)
  const [cat3, setCat3] = React.useState(null)

  React.useEffect(() => {
    if (categories.length !== 0) {
      setCat1(categories.find((cat) => cat.name === 'View All'))
      setCat2(categories.find((cat) => cat.name === 'Rings'))
      setCat3(categories.find((cat) => cat.name === 'Necklaces'))
    }
  }, [categories])

  const categoryOneColumn = {
    image: image1,
    background: image2,
    title: 'Every piece is crafted by hand',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.',
    url: `/category/${cat1?.id}`,
  }

  const categoriesTwoColumns = [
    {
      image: image3,
      title: 'One Of-A-Kind Rings',
      category: 'rings',
      url: `/category/${cat2?.id}`,
    },
    {
      image: image4,
      title: 'Ethereal Necklaces',
      category: 'necklaces',
      url: `/category/${cat3?.id}`,
    },
  ]

  return (
    <>
      <Container maxWidth='xl'>
        <Hero />
      </Container>
      <Carousel title='Best Sellers' />
      <Container maxWidth='xl'>
        <FeaturedOneColumn category={categoryOneColumn} />
        <FeaturedTwoColumn categories={categoriesTwoColumns} />
      </Container>
    </>
  )
}

export default Home
