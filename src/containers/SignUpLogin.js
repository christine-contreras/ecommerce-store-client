import React from 'react'
import '../style/css/form.css'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import { Grid, Typography, Box } from '@mui/material'

import FormSignup from '../components/signup/FormSignup'
import FormLogin from '../components/signup/FormLogin'
import LoggedInMessage from '../components/signup/LoggedInMessage'

import { userAtom } from '../atoms/atoms'
import { useRecoilValue } from 'recoil'

const SignUpLogin = ({ title, onLogout }) => {
  let location = useLocation()

  const user = useRecoilValue(userAtom)

  return (
    <Grid container flexDirection='column' alignItems='center' spacing={4}>
      <Grid item>
        <Typography variant='h1'>{title}</Typography>
      </Grid>
      <Grid
        item
        container
        flexDirection='column'
        alignItems='center'
        spacing={3}>
        {!user ? (
          location.pathname === '/create-account' ? (
            <>
              <Grid item>
                <FormSignup />
              </Grid>
              <Grid item>
                <Link to='/login' underline='hover'>
                  Already Have An Account? Login Here
                </Link>
              </Grid>
            </>
          ) : (
            <>
              <Grid item>
                <FormLogin />
              </Grid>
              <Grid item>
                <Link to='/create-account' underline='hover'>
                  Don't Have An Account? Sign Up
                </Link>
              </Grid>
            </>
          )
        ) : (
          <LoggedInMessage onLogout={onLogout} />
        )}
      </Grid>

      <Box
        className='background-box right'
        sx={{ backgroundColor: 'primary.main' }}
      />
    </Grid>
  )
}

export default SignUpLogin
