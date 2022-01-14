import * as React from 'react'
import '../style/css/category.css'
import { Grid } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { categoriesAtom, selectedCategoryAtom } from '../atoms/atoms'
import HeroCategory from '../components/category/HeroCategory'
import CategoryProducts from '../components/category/CategoryProducts'
import Loading from '../components/category/Loading'
import NotFound from '../components/NotFound'
const PLP = () => {
  let params = useParams()

  const categories = useRecoilValue(categoriesAtom)
  const setCategory = useSetRecoilState(selectedCategoryAtom)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)

  React.useEffect(() => {
    if (categories.length !== 0) {
      const selectedCategory = categories.find(
        (cat) => cat.id === parseInt(params.id)
      )
      selectedCategory ? setCategory(selectedCategory) : setError(true)
      setLoading(false)
    } else {
      fetchCategory()
    }
  }, [categories, params])

  const fetchCategory = () => {
    setLoading(true)
    setError(false)
    fetch(`/api/categories/${params.id}`)
      .then((res) => res.json())
      .then((data) => setCategory(data))
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
          <Grid item container sx={{ p: 4 }}>
            <HeroCategory />
          </Grid>
          <Grid item container>
            <CategoryProducts />
          </Grid>
        </>
      )}
    </>
  )
}

export default PLP
