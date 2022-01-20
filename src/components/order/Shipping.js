import React from 'react'
import { Grid, Typography } from '@mui/material'
const Shipping = ({ address, name }) => {
  return (
    <Grid item container flexDirection='column'>
      <Grid item>
        <Typography>{name}</Typography>
      </Grid>
      <Grid item>
        <Typography>{address?.line1}</Typography>
      </Grid>
      {address?.line2 && (
        <Grid item>
          <Typography>{address?.line2}</Typography>
        </Grid>
      )}
      <Grid item>
        <Typography>{`${address?.city}, ${address?.state}, ${address?.postal_code}`}</Typography>
      </Grid>
    </Grid>
  )
}

export default Shipping
