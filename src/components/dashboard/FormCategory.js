import * as React from 'react'
import {
  Typography,
  TextField,
  FormControlLabel,
  Switch,
  Grid,
  Alert,
  Stack,
  Button,
  FormGroup,
} from '@mui/material'
import { categoriesAtom } from '../../atoms/atoms'
import { useRecoilState } from 'recoil'

const FormCategory = ({ category, closeModal }) => {
  const [categories, setCategories] = useRecoilState(categoriesAtom)
  const [name, setName] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [active, setActive] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [updated, setUpdated] = React.useState(false)
  const [errors, setErrors] = React.useState([])

  React.useEffect(() => {
    if (category) {
      setName(category.name)
      setDescription(category.description)
      setActive(category.isActive)
    }
  }, [category])

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors([])
    setLoading(true)
    setUpdated(false)

    const newCategory = {
      name,
      description,
      isActive: active,
    }

    if (category) {
      updateCategory(newCategory)
    } else {
      createCategory(newCategory)
    }
  }

  const createCategory = (newCategory) => {
    fetch('/api/categories', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCategory),
    }).then((response) => {
      setLoading(false)
      if (response.ok) {
        response.json().then((data) => {
          setCategories((prevCategories) => [...prevCategories, data])
          closeModal()
          setUpdated(true)
        })
      } else {
        response.json().then((err) => {
          setErrors(err.errors)
        })
      }
    })
  }

  const updateCategory = (newCategory) => {
    fetch(`/api/categories/${category.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(newCategory),
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false)
        const newCategoryList = categories.map((c) =>
          c.id === data.id ? data : c
        )
        setCategories(newCategoryList)
        setUpdated(true)
      })
      .catch((err) => {
        setLoading(false)
        setErrors(err.errors)
      })
  }

  return (
    <Grid
      container
      flexDirection='column'
      className='modal-body b-radius-sm'
      sx={{ top: '40%' }}
      spacing={2}>
      <Grid item>
        <Typography
          component='h1'
          variant='h4'
          align='center'
          paddingTop
          paddingBottom>
          {category ? 'Edit Category' : 'Create Category'}
        </Typography>
      </Grid>

      <form onSubmit={handleSubmit} className='form'>
        <Grid container justifyContent='flex-end'>
          <Grid item>
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    checked={active}
                    color='success'
                    onChange={(e) => setActive(e.target.checked)}
                  />
                }
                label='Active'
              />
            </FormGroup>
          </Grid>
        </Grid>

        <TextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          label='Name'
          variant='outlined'
          color='info'
          fullWidth
        />

        <TextField
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          label='Description'
          variant='outlined'
          color='info'
          fullWidth
          multiline
          rows={3}
        />

        <Button
          type='submit'
          variant='contained'
          className='btn btn-lg'
          color='info'>
          Submit
        </Button>
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
              {category ? 'Edit' : 'Creating'} Category... Do Not Refresh Page
            </Alert>
          )}

          {updated && (
            <Alert severity='success' variant='filled'>
              Category {category ? 'Updated' : 'Created'}
            </Alert>
          )}
        </Stack>
      </Grid>
    </Grid>
  )
}

export default FormCategory
