import * as React from 'react'
import { Grid, Button, TextField, Alert, Stack } from '@mui/material'
import { useNavigate } from 'react-router'
import { checkoutAtom, userAtom, stripeCheckoutAtom } from '../../atoms/atoms'
import { useRecoilValue, useSetRecoilState } from 'recoil'

const FormSignup = () => {
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [passwordConfirmation, setPasswordConfirmation] = React.useState('')
  const [errors, setErrors] = React.useState([])
  const setUser = useSetRecoilState(userAtom)
  const checkout = useRecoilValue(checkoutAtom)
  const startCheckout = useSetRecoilState(stripeCheckoutAtom)
  let navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors([])
    fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        password,
        password_confirmation: passwordConfirmation,
        email,
      }),
    }).then((response) => {
      if (response.ok) {
        response
          .json()
          .then((user) => setUser(user))
          .then(checkout ? startCheckout() : navigate('/'))
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
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            label='First Name'
            variant='outlined'
            color='info'
            fullWidth
          />

          <TextField
            required
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            label='Last Name'
            variant='outlined'
            color='info'
            fullWidth
          />

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

          <TextField
            required
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            value={passwordConfirmation}
            label='Confirm Password'
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
            Create Account
          </Button>
        </form>
      </Grid>

      <Grid item sx={{ width: '70%' }}>
        <Stack sx={{ width: '100%' }} spacing={2} className='padding-bottom'>
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

export default FormSignup
