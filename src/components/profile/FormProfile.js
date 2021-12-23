import * as React from 'react'
import '../../style/css/form.css'
import {
  Grid,
  Button,
  TextField,
  Alert,
  Stack,
  Typography,
} from '@mui/material'
import { userAtom } from '../../atoms/atoms'
import { useRecoilState } from 'recoil'

const FormProfile = () => {
  const [user, setUser] = useRecoilState(userAtom)
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [passwordConfirmation, setPasswordConfirmation] = React.useState('')
  const [errors, setErrors] = React.useState([])
  const [updated, setUpdated] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [togglePassword, setTogglePassword] = React.useState(false)

  React.useEffect(() => {
    if (user) {
      setFirstName(user.first_name)
      setLastName(user.last_name)
    }
  }, [user])

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors([])
    setUpdated(false)
    setLoading(true)

    let updatedUser
    togglePassword
      ? (updatedUser = {
          first_name: firstName,
          last_name: lastName,
          password,
          password_confirmation: passwordConfirmation,
        })
      : (updatedUser = {
          first_name: firstName,
          last_name: lastName,
        })

    fetch(`/api/users/${user.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(updatedUser),
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

  const handlePasswordChangeClick = () => {
    setTogglePassword((prevToggle) => !prevToggle)
  }

  return (
    <Grid
      container
      flexDirection='column'
      justifyContent='center'
      alignItems='center'>
      <Grid item>
        <Typography>
          Email: <strong>{user.email}</strong>
        </Typography>
      </Grid>
      <Grid item>
        <form onSubmit={handleSubmit} className='form'>
          <TextField
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            label='First Name'
            variant='outlined'
            color='info'
            fullWidth
          />

          <TextField
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            label='Last Name'
            variant='outlined'
            color='info'
            fullWidth
          />

          <div className={!togglePassword ? 'hidden' : null}>
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              label='Password'
              variant='outlined'
              type='password'
              color='info'
              fullWidth
            />

            <TextField
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              value={passwordConfirmation}
              label='Confirm Password'
              variant='outlined'
              type='password'
              color='info'
              fullWidth
            />
          </div>

          <Button
            variant='text'
            className='btn btn-lg'
            color='info'
            onClick={handlePasswordChangeClick}>
            Change Password?
          </Button>

          <Button
            type='submit'
            variant='contained'
            className='btn btn-lg'
            color='info'>
            Save Profile
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

export default FormProfile
