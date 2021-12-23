import React from 'react'
import { Grid, Link } from '@mui/material'
const BottomLinks = () => {
  return (
    <Grid item container spacing={2}>
      <Grid
        item
        xs={6}
        md={4}
        container
        sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}>
        <Link href='#' color='inherit' underline='hover' className='link-sm'>
          Sitemap
        </Link>
      </Grid>
      <Grid item xs={6} md={4} textAlign='center'>
        <Link href='#' color='inherit' underline='hover' className='link-sm'>
          Privacy Policy
        </Link>
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
        container
        sx={{ justifyContent: { xs: 'center', md: 'flex-end' } }}>
        <Link href='#' color='inherit' underline='hover' className='link-sm'>
          Website Created By: Christine Contreras
        </Link>
      </Grid>
    </Grid>
  )
}

export default BottomLinks
