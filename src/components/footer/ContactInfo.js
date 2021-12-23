import React from 'react'
import { Typography, Grid, Link } from '@mui/material'
const ContactInfo = () => {
  return (
    <Grid item container spacing={2} flexDirection='column'>
      <Grid item>
        <Typography component='p' variant='h4'>
          Contact Us
        </Typography>
      </Grid>

      <Grid item container spacing={2}>
        <Grid item container flexDirection='column' xs={6} md={12} spacing={2}>
          <Grid item>
            <Link href='#' color='inherit'>
              support@freespirit.com
            </Link>
          </Grid>
          <Grid item>
            Call:{' '}
            <Link href='#' color='inherit' underline='hover'>
              1-800-123-1234
            </Link>
          </Grid>
        </Grid>

        <Grid item xs={6} md={12}>
          <Typography sx={{ fontWeight: 500 }}>Monday - Friday</Typography>
          <Typography component='p'>8pm - 7pm CST</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ContactInfo
