import * as React from 'react'
import {
  Grid,
  Alert,
  Stack,
  Button,
  FormControl,
  InputLabel,
  Input,
  Select,
  MenuItem,
  Typography,
} from '@mui/material'
import { selectedProductAtom, selectedProductSkusAtom } from '../../atoms/atoms'
import { useRecoilValue } from 'recoil'
const FormSku = ({ sku, closeModal, updateProducts }) => {
  const sizes = ['one size', '4', '5', '6', '7', '8', '9']
  const colors = ['Gold', 'Silver', 'Rose Gold']

  const skus = useRecoilValue(selectedProductSkusAtom)
  const product = useRecoilValue(selectedProductAtom)
  const [price, setPrice] = React.useState(1)
  const [size, setSize] = React.useState(sizes[0])
  const [color, setColor] = React.useState(colors[0])
  const [quantity, setQuantity] = React.useState(1)
  const [image, setImage] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const [updated, setUpdated] = React.useState(false)
  const [errors, setErrors] = React.useState([])

  React.useEffect(() => {
    if (sku) {
      setPrice(sku.price)
      setSize(sku.size)
      setColor(sku.color)
      setQuantity(sku.quantity)
    }
  }, [sku, product])

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors([])
    setLoading(true)
    setUpdated(false)

    const newSku = new FormData()
    newSku.append('price', price)
    newSku.append('color', color)
    newSku.append('size', size)
    newSku.append('quantity', quantity)
    newSku.append('product_id', product.id)

    if (image) {
      newSku.append('image', image)
    }

    if (sku) {
      updateSku(newSku)
    } else {
      createSkus(newSku)
    }
  }

  const createSkus = (newSku) => {
    fetch('/api/skus', {
      method: 'POST',
      body: newSku,
    }).then((response) => {
      setLoading(false)
      if (response.ok) {
        response.json().then((data) => {
          sku = data
          const newSkusList = [...skus, data]
          updateProducts(newSkusList)
          setUpdated(true)
          closeModal()
        })
      } else {
        response.json().then((err) => {
          setErrors(err.errors)
        })
      }
    })
  }

  const updateSku = (newSku) => {
    fetch(`/api/skus/${sku.id}`, {
      method: 'PATCH',
      body: newSku,
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false)
        const newSkusList = skus.map((s) => (s.id === data.id ? data : s))
        updateProducts(newSkusList)
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
      flexWrap='nowrap'
      className='modal-body b-radius-sm'
      spacing={2}>
      <Grid item xs='auto'>
        <Typography component='h2' variant='h4' align='center' paddingTop>
          {sku ? 'Update' : 'Create'} SKU
        </Typography>
      </Grid>
      <form onSubmit={handleSubmit} className='form'>
        <Grid item container spacing={2}>
          <Grid item xs={6}>
            <FormControl color='info' variant='outlined'>
              <InputLabel htmlFor='sku-price'>Price</InputLabel>
              <Input
                required
                id='sku-price'
                aria-describedby='sku-price'
                type='number'
                value={price}
                onChange={(e) => setPrice(parseInt(e.target.value))}
                inputProps={{ min: '1' }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl color='info' variant='outlined'>
              <InputLabel htmlFor='sku-quantity'>Quantity</InputLabel>
              <Input
                required
                id='sku-quantity'
                aria-describedby='sku-quantity'
                type='number'
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                inputProps={{ min: '1' }}
              />
            </FormControl>
          </Grid>
        </Grid>

        <Grid item container spacing={2}>
          <Grid item xs={6}>
            <FormControl color='info'>
              <InputLabel id='size-options'>Size</InputLabel>
              <Select
                labelId='size-options'
                onChange={(e) => setSize(e.target.value)}
                value={size}>
                {sizes.map((s) => (
                  <MenuItem value={s} key={`size-option-${s}`}>
                    {s}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl color='info'>
              <InputLabel id='color-options'>Color</InputLabel>
              <Select
                labelId='color-options'
                onChange={(e) => setColor(e.target.value)}
                value={color}>
                {colors.map((c) => (
                  <MenuItem value={c} key={`color-option-${c}`}>
                    {c}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid item container flexDirection='column' spacing={2} sx={{ pb: 3 }}>
          {image ? (
            <Grid item>
              <img src={URL.createObjectURL(image)} style={{ maxWidth: 200 }} />
            </Grid>
          ) : (
            sku &&
            sku.image_url && (
              <Grid item>
                <img src={sku.image_url} style={{ maxWidth: 200 }} />
              </Grid>
            )
          )}

          <Grid item>
            <Button variant='contained' component='label' color='inherit'>
              {(sku && sku.image_url) || image
                ? 'Upload New Image'
                : 'Upload Image'}
              <input
                type='file'
                hidden
                accept='image/*'
                onChange={(e) => setImage(e.target.files[0])}
              />
            </Button>
          </Grid>
        </Grid>

        <Button
          type='submit'
          variant='contained'
          className='btn btn-lg'
          color='info'>
          {sku ? 'Update' : 'Create'} SKU
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
              {sku ? 'Editing' : 'Creating'} SKU... Do Not Refresh Page
            </Alert>
          )}

          {updated && (
            <Alert severity='success' variant='filled'>
              SKU {sku ? 'Updated' : 'Created'}
            </Alert>
          )}
        </Stack>
      </Grid>
    </Grid>
  )
}

export default FormSku
