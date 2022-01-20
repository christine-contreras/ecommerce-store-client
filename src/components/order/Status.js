import React from 'react'
import { Grid, Typography } from '@mui/material'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import RunningWithErrorsIcon from '@mui/icons-material/RunningWithErrors'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb'
const Status = ({ status }) => {
  return (
    <Grid item container spacing={1}>
      <Grid item>
        {status === 'Pending' && (
          <ErrorOutlineIcon fontSize='medium' sx={{ color: 'primary.dark' }} />
        )}

        {status === 'Processing' && (
          <RunningWithErrorsIcon
            fontSize='medium'
            sx={{ color: 'primary.dark' }}
          />
        )}

        {status === 'Shipped' && (
          <LocalShippingIcon fontSize='medium' sx={{ color: 'primary.dark' }} />
        )}

        {status === 'Completed' && (
          <CheckCircleIcon fontSize='medium' color='success' />
        )}

        {status === 'Cancelled' && (
          <DoNotDisturbIcon fontSize='medium' color='error' />
        )}
      </Grid>
      <Grid item>
        {status === 'Completed' ? (
          <Typography sx={{ color: 'success.main' }}>{status}</Typography>
        ) : status === 'Cancelled' ? (
          <Typography sx={{ color: 'error.main' }}>{status}</Typography>
        ) : (
          <Typography sx={{ color: 'primary.dark' }}>{status}</Typography>
        )}
      </Grid>
    </Grid>
  )
}

export default Status
