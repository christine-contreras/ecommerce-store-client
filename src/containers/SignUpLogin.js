import React from 'react'
import PropTypes from 'prop-types'
import '../style/css/form.css'
import { useLocation, useNavigate } from 'react-router'
import { Grid, Typography, Box, Container, Button } from '@mui/material'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined'
import FormSignup from '../components/signup/FormSignup'
import FormLogin from '../components/signup/FormLogin'
import LoggedInMessage from '../components/signup/LoggedInMessage'

import { userAtom } from '../atoms/atoms'
import { useRecoilValue } from 'recoil'

const SignUpLogin = ({ title, onLogout, handleCheckout }) => {
  let location = useLocation()
  let navigate = useNavigate()

  const user = useRecoilValue(userAtom)

  return (
    <Container maxWidth='xl' sx={{ pt: 3, pb: 3 }}>
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
                  <FormSignup handleCheckout={handleCheckout} />
                </Grid>
                <Grid item>
                  <Button
                    onClick={() => navigate('/login')}
                    variant='outlined'
                    color='info'
                    size='large'
                    endIcon={<ArrowCircleRightOutlinedIcon />}>
                    <strong>Already Have An Account? Login Here</strong>
                  </Button>
                </Grid>
              </>
            ) : (
              <>
                <Grid item>
                  <FormLogin handleCheckout={handleCheckout} />
                </Grid>
                <Grid item>
                  <Button
                    onClick={() => navigate('/create-account')}
                    variant='outlined'
                    color='info'
                    size='large'
                    endIcon={<ArrowCircleRightOutlinedIcon />}>
                    <strong>Don&apos;t Have An Account? Sign Up</strong>
                  </Button>
                </Grid>
              </>
            )
          ) : (
            <LoggedInMessage onLogout={onLogout} />
          )}
        </Grid>
      </Grid>
      <Box
        className='background-box right'
        sx={{ backgroundColor: 'primary.main' }}
      />
    </Container>
  )
}

export default SignUpLogin

SignUpLogin.propTypes = {
  title: PropTypes.string,
  onLogout: PropTypes.func,
  handleCheckout: PropTypes.func,
}
