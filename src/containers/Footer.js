import React from 'react'
import { Grid, Container } from '@mui/material'
import ContactInfo from '../components/footer/ContactInfo'
import Menu from '../components/footer/Menu'
import Social from '../components/footer/Social'
import BottomLinks from '../components/footer/BottomLinks'

const Footer = () => {
  return (
    <Grid
      item
      container
      sx={{ backgroundColor: 'secondary.dark', p: { xs: 2, md: 5 } }}>
      <Container maxWidth='xl'>
        <Grid container flexDirection='column'>
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
      </Container>
    </Grid>
  )
}

export default Footer
