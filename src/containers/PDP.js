import * as React from 'react'
import { Grid, Box, Container, Button } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { selectedProductAtom } from '../atoms/atoms'
import NotFound from '../components/NotFound'
import Loading from '../components/product/Loading'
import PDPImages from '../components/product/PDPImages'
import PDPInfo from '../components/product/PDPInfo'
import Carousel from './Carousel'
const PDP = () => {
  let params = useParams()
  let navigate = useNavigate()
  const [product, setProduct] = useRecoilState(selectedProductAtom)

  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)

  React.useEffect(() => {
    if (product) {
      if (product.skus.length === 0 || product.isActive === false) {
        setError(true)
      }
      setLoading(false)
    } else {
      fetchProduct()
    }
  }, [product, params])

  const fetchProduct = () => {
    setLoading(true)
    setError(false)
    fetch(`/api/products/${params.id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => {
        setError(true)
        setLoading(false)
      })
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <NotFound />
      ) : (
        <>
          <Container maxWidth='xl' sx={{ pt: 6, pb: 6 }}>
            <Button
              variant='text'
              color='info'
              startIcon={<ArrowBackIosIcon />}
              onClick={() => navigate(-1)}>
              Go Back
            </Button>
            <Grid item container sx={{ pt: 2 }} spacing={6}>
              <PDPImages />
              <PDPInfo />
              <Box
                className='background-box left'
                sx={{ backgroundColor: 'primary.main' }}
              />
            </Grid>
          </Container>
          <Carousel title='You Might Also Like' />
        </>
      )}
    </>
  )
}

export default PDP
