import * as React from 'react'
import {
  Grid,
  Typography,
  Alert,
  Stack,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@mui/material'
import {
  categoriesAtom,
  selectedProductCategoriesAtom,
} from '../../atoms/atoms'
import { useRecoilValue } from 'recoil'
const FormProductCategories = ({ product }) => {
  const categories = useRecoilValue(categoriesAtom)
  const productCategories = useRecoilValue(selectedProductCategoriesAtom)
  const [checkboxes, setCheckboxes] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [updated, setUpdated] = React.useState(false)
  const [errors, setErrors] = React.useState([])

  React.useEffect(() => {
    if (categories) {
      const choices = categories.map((cat) => {
        const container = {}
        const checked = productCategories.find((c) => c.id === cat.id)
        container.checked = checked ? true : false
        container.id = cat.id
        container.name = cat.name
        return container
      })
      setCheckboxes(choices)
    }
  }, [categories])

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors([])
    setLoading(true)
    setUpdated(false)
  }

  const handleCheckboxChange = (e) => {
    setCheckboxes((prevCategories) =>
      prevCategories.map((cat) =>
        cat.name === e.target.name ? { ...cat, checked: e.target.checked } : cat
      )
    )
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='form'>
        <Grid container alignItems='center' flexDirection='column' spacing={2}>
          <Grid item>
            <FormGroup>
              {checkboxes.map((category) => (
                <FormControlLabel
                  key={`product-category-option=${category.name}`}
                  label={category.name}
                  control={
                    <Checkbox
                      color='info'
                      checked={category.checked}
                      onChange={handleCheckboxChange}
                      name={category.name}
                    />
                  }
                />
              ))}
            </FormGroup>
          </Grid>
          <Grid item>
            <Button
              type='submit'
              variant='contained'
              className='btn btn-lg'
              color='info'>
              Save Categories
            </Button>
          </Grid>
        </Grid>
      </form>

      <Grid item>
        <Stack sx={{ width: '100%' }} spacing={2} className='padding-top'>
          {errors.map((error) => (
            <Alert severity='error' key={error} variant='filled'>
              {error}
            </Alert>
          ))}
          {loading && (
            <Alert severity='info' variant='filled'>
              {product ? 'Editing' : 'Creating'} Product... Do Not Refresh Page
            </Alert>
          )}

          {updated && (
            <Alert severity='success' variant='filled'>
              Product {product ? 'Updated' : 'Created'}
            </Alert>
          )}
        </Stack>
      </Grid>
    </>
  )
}

export default FormProductCategories
