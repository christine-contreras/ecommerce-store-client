import * as React from 'react'
import {
  TextField,
  Grid,
  Alert,
  Stack,
  Button,
  Typography,
  FormGroup,
  FormControlLabel,
  Switch,
} from '@mui/material'
import { productsAtom, selectedProductAtom } from '../../atoms/atoms'
import { useRecoilState } from 'recoil'

const FormProduct = () => {
  const [products, setProducts] = useRecoilState(productsAtom)
  const [product, setProduct] = useRecoilState(selectedProductAtom)
  const [title, setTitle] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [active, setActive] = React.useState(false)

  const [loading, setLoading] = React.useState(false)
  const [updated, setUpdated] = React.useState(false)
  const [errors, setErrors] = React.useState([])

  React.useEffect(() => {
    if (product) {
      setTitle(product.title)
      setDescription(product.description)
      setActive(product.isActive)
    }
  }, [product])

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors([])
    setLoading(true)
    setUpdated(false)

    const newProduct = {
      title,
      description,
      isActive: active,
    }

    if (product) {
      updateProduct(newProduct)
    } else {
      createProduct(newProduct)
    }
  }

  const createProduct = (newProduct) => {
    fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    }).then((response) => {
      setLoading(false)
      if (response.ok) {
        response.json().then((data) => {
          setProduct(data)
          setProducts((prevProducts) => [...prevProducts, data])

          setUpdated(true)
        })
      } else {
        response.json().then((err) => {
          setErrors(err.errors)
        })
      }
    })
  }

  const updateProduct = (newProduct) => {
    fetch(`/api/products/${product.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false)
        const newList = products.map((p) => (p.id === data.id ? data : p))
        setProducts(newList)
        setUpdated(true)
      })
      .catch((err) => {
        setLoading(false)
        setErrors(err.errors)
      })
  }

  return (
    <Grid item container flexDirection='column' spacing={2}>
      <Grid item>
        <Typography component='h1' variant='h5' align='center' paddingTop>
          Product Summary
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
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          label='Product Name'
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
          rows={5}
        />

        <Button
          type='submit'
          variant='contained'
          className='btn btn-lg'
          color='info'>
          Save Summary
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
    </Grid>
  )
}

export default FormProduct
