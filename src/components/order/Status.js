import React from 'react'
import { Grid, Typography } from '@mui/material'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
const Status = ({ status }) => {
  return (
    <Grid item container spacing={1}>
      <Grid item>
        {status === 'Pending' && (
          <ErrorOutlineIcon fontSize='medium' sx={{ color: 'primary.dark' }} />
        )}
      </Grid>
      <Grid item>
        <Typography sx={{ color: 'primary.dark' }}>{status}</Typography>
      </Grid>
    </Grid>
  )
}

export default Status
