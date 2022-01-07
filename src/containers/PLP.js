import * as React from 'react'
import '../style/css/category.css'
import { Grid } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { categoriesAtom } from '../atoms/atoms'
import HeroCategory from '../components/category/HeroCategory'
import CategoryProducts from '../components/category/CategoryProducts'
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
      const selectedCategory = categories.filter(
        (cat) => cat.id === parseInt(params.id)
      )
      setCategory(selectedCategory ? selectedCategory[0] : null)
    }
  }, [categories, params])
  return (
    <>
      {loading ? (
        <Loading />
      ) : !category ? (
        <NotFound />
      ) : (
        <>
          <Grid item sx={{ p: 4 }}>
            <HeroCategory
              name={category.name}
              description={category.description}
            />
          </Grid>
          <Grid item container>
            <CategoryProducts
              products={category.products}
              name={category.name}
            />
          </Grid>
        </>
      )}
    </>
  )
}

export default PLP
