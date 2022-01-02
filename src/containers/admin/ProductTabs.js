import React from 'react'
import { Grid, Tab, Typography } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'

const ProductTabs = ({ product }) => {
  return (
    <Grid
      container
      flexDirection='column'
      className='modal-body b-radius-sm'
      sx={{ top: '40%' }}
      spacing={2}>
      <Grid item>
        <Typography
          component='h1'
          variant='h4'
          align='center'
          paddingTop
          paddingBottom>
          Hello
        </Typography>
      </Grid>
    </Grid>
  )
}

export default ProductTabs
