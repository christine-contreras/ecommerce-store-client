import * as React from 'react'
import '../../style/css/form.css'
import {
  Grid,
  Button,
  TextField,
  Alert,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material'
import { states, countries } from '../../helpers'
import { userAtom, addressAtom } from '../../atoms/atoms'
import { useRecoilState, useRecoilValue } from 'recoil'

const FormShipping = () => {
  const [user, setUser] = useRecoilState(userAtom)
  const address = useRecoilValue(addressAtom)
  const [city, setCity] = React.useState('')
  const [country, setCountry] = React.useState('US')
  const [line1, setLine1] = React.useState('')
  const [line2, setLine2] = React.useState('')
  const [postalCode, setPostalCode] = React.useState('')
  const [state, setState] = React.useState('')
  const [errors, setErrors] = React.useState([])
  const [updated, setUpdated] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    if (address) {
      setCity(address.city)
      setCountry(address.country)
      setLine1(address.line1)
      setLine2(address.line2)
      setPostalCode(address.postal_code)
      setState(address.state)
    }
  }, [address])

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors([])
    setUpdated(false)
    setLoading(true)

    const updatedShipping = {
      city,
      country,
      line1,
      line2,
      postal_code: postalCode,
      state,
    }

    fetch(`/api/users/${user.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        address: updatedShipping,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        setLoading(false)
        setUser(user)
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
      justifyContent='center'
      alignItems='center'>
      <Grid item>
        <form onSubmit={handleSubmit} className='form'>
          <TextField
            onChange={(e) => setLine1(e.target.value)}
            value={line1}
            label='Address'
            variant='outlined'
            color='info'
            fullWidth
            required
          />

          <TextField
            onChange={(e) => setLine2(e.target.value)}
            value={line2}
            label='Address 2'
            variant='outlined'
            color='info'
            placeholder='Apt. Suite #'
            fullWidth
          />

          <TextField
            onChange={(e) => setCity(e.target.value)}
            value={city}
            label='City'
            variant='outlined'
            color='info'
            fullWidth
            required
          />

          <Grid item container spacing={1}>
            <Grid item xs={12} md={4}>
              <FormControl variant='outlined' color='info'>
                <InputLabel id='select-country'>Country</InputLabel>
                <Select
                  labelId='select-country'
                  name='country'
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}>
                  {countries.map((c) => (
                    <MenuItem value={c.code} key={`form-item-${c.name}`}>
                      {c.name}
                    </MenuItem>
                  ))}
                  <MenuItem>One</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} md={4}>
              <FormControl variant='outlined' color='info'>
                <InputLabel id='select-state'>State</InputLabel>
                <Select
                  labelId='select-state'
                  name='state'
                  value={state.code}
                  onChange={(e) => setState(e.target.value)}>
                  {states.map((s) => (
                    <MenuItem value={s.code} key={`form-item-${s.name}`}>
                      {s.code}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} md={4}>
              <TextField
                onChange={(e) => setPostalCode(e.target.value)}
                value={postalCode}
                label='ZIP Code'
                variant='outlined'
                color='info'
                fullWidth
                required
              />
            </Grid>
          </Grid>

          <Button
            type='submit'
            variant='contained'
            className='btn btn-lg'
            color='info'>
            Save Shipping
          </Button>
        </form>
      </Grid>

      <Grid item sx={{ width: '100%', margin: 'auto' }}>
        <Stack
          sx={{ width: '50%', margin: 'auto' }}
          spacing={2}
          className='padding-top'>
          {errors.map((error) => (
            <Alert severity='error' variant='filled' key={error}>
              {error}
            </Alert>
          ))}
          {loading && (
            <Alert severity='info' variant='filled'>
              Updating... Do Not Refresh Page
            </Alert>
          )}

          {updated && (
            <Alert severity='success' variant='filled'>
              Profile Updated
            </Alert>
          )}
        </Stack>
      </Grid>
    </Grid>
  )
}

export default FormShipping
