import * as React from 'react'
import { Grid } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { categoriesAtom } from '../atoms/atoms'
import Hero from '../components/category/Hero'
import Loading from '../components/category/Loading'
import NotFound from '../components/NotFound'
const PLP = () => {
  let params = useParams()

  const categories = useRecoilValue(categoriesAtom)
  const [category, setCategory] = React.useState(null)
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    if (categories) {
      setLoading(false)
      //   const selectedCategory = categories.filter((cat) => cat.id === params.id)
      //   if (selectedCategory) {
      //     setCategory(selectedCategory)
      //   }
    }
  })
  return (
    <>
      {loading ? (
        <Loading />
      ) : !category ? (
        <NotFound />
      ) : (
        <Grid item>
          <Hero />
        </Grid>
      )}
    </>
  )
}

export default PLP
