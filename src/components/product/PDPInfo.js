import React from 'react'
import { Grid } from '@mui/material'
import PDPTitle from './PDPTitle'
import PDPDescription from './PDPDescription'
import PDPOptions from './PDPOptions'
const PDPInfo = () => {
  return (
    <Grid
      item
      container
      xs={12}
      md={6}
      flexDirection='column'
      spacing={2}
      className='pdp-info'>
      <Grid
        item
        container
        spacing={1}
        alignItems='center'
        justifyContent='space-between'>
        <PDPTitle />
      </Grid>
      <Grid
        item
        container
        spacing={1}
        flexDirection='column'
        alignItems='center'
        justifyContent='center'>
        <PDPOptions />
      </Grid>

      <Grid item>
        <PDPDescription />
      </Grid>
    </Grid>
  )
}

export default PDPInfo
