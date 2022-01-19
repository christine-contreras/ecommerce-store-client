import * as React from 'react'
import { Grid, Button, TextField, Alert, Stack } from '@mui/material'
import { useNavigate } from 'react-router'
import { userAtom, checkoutAtom, stripeCheckoutAtom } from '../../atoms/atoms'
import { useRecoilValue, useSetRecoilState } from 'recoil'

const FormLogin = () => {
  let navigate = useNavigate()

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [errors, setErrors] = React.useState([])
  const setUser = useSetRecoilState(userAtom)
  const checkout = useRecoilValue(checkoutAtom)
  const startCheckout = useSetRecoilState(stripeCheckoutAtom)

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors([])
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        password,
        email,
      }),
    }).then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          setUser(user)
          user?.isAdmin
            ? navigate('/admin-dashboard/products')
            : checkout
            ? startCheckout()
            : navigate('/')
        })
      } else {
        response.json().then((err) => setErrors(err.errors))
      }
    })
  }

  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      className='form-login'>
      <Grid item>
        <form onSubmit={handleSubmit} className='form'>
          <TextField
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            label='Email'
            variant='outlined'
            color='info'
            fullWidth
          />

          <TextField
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            label='Password'
            variant='outlined'
            type='password'
            color='info'
            fullWidth
          />

          <Button
            type='submit'
            variant='contained'
            className='btn btn-lg'
            color='info'>
            Log In
          </Button>
        </form>
      </Grid>

      <Grid item sx={{ width: '70%' }}>
        <Stack sx={{ width: '100%' }} spacing={2} className='padding-top'>
          {errors.map((error) => (
            <Alert severity='error' variant='filled' key={error}>
              {error}
            </Alert>
          ))}
        </Stack>
      </Grid>
    </Grid>
  )
}

export default FormLogin
