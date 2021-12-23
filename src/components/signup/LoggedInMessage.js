import React from 'react'
import { useNavigate } from 'react-router'
import { Typography, Button, ButtonGroup } from '@mui/material'

const LoggedInMessage = ({ onLogout }) => {
  let navigate = useNavigate()

  return (
    <>
      <Typography variant='subtitle1' align='center'>
        You're Already Logged In
      </Typography>
      <Typography component='p' align='center'>
        If you would like to create a new account please logout.
      </Typography>
      <div className='padding-top'>
        <ButtonGroup variant='contained' color='info'>
          <Button className='btn' onClick={() => navigate(`/`)}>
            Go To Homepage
          </Button>
          <Button className='btn' onClick={onLogout}>
            Sign Out
          </Button>
        </ButtonGroup>
      </div>
    </>
  )
}

export default LoggedInMessage
