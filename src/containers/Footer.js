import React from 'react'
import { Grid } from '@mui/material'
import ContactInfo from '../components/footer/ContactInfo'
import Menu from '../components/footer/Menu'
import Social from '../components/footer/Social'
import BottomLinks from '../components/footer/BottomLinks'

const Footer = () => {
  return (
    <Grid
      container
      flexDirection='column'
      sx={{ backgroundColor: 'secondary.dark', p: 5 }}>
      {/* top of footer */}
      <Grid item container spacing={1}>
        <Grid item xs={12} md={6}>
          <ContactInfo />
        </Grid>

        <Grid item container xs={12} md={6} spacing={2}>
          <Grid item xs={6} md={4}>
            <Menu />
          </Grid>
          <Grid item xs={6} md={4}>
            <Social />
          </Grid>
        </Grid>
      </Grid>

      {/* bottom of footer */}
      <Grid item>
        <hr />
      </Grid>

      <BottomLinks />
    </Grid>
  )
}

export default Footer
