import * as React from 'react'
import { Grid, Box, Container } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil'
import { selectedProductOptionsAtom } from '../atoms/atoms'
import NotFound from '../components/NotFound'
import Loading from '../components/product/Loading'
import PDPImages from '../components/product/PDPImages'
import PDPInfo from '../components/product/PDPInfo'
const PDP = () => {
  let params = useParams()
  const [product, setProduct] = useRecoilState(selectedProductOptionsAtom)

  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)

  React.useEffect(() => {
    if (product) {
      setLoading(false)
      console.log(product)
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
        <Container maxWidth='xl'>
          <Grid item container sx={{ pt: 6 }} spacing={6}>
            <PDPImages />
            <PDPInfo />
            <Box
              className='background-box left'
              sx={{ backgroundColor: 'primary.main' }}
            />
          </Grid>
        </Container>
      )}
    </>
  )
}

export default PDP
