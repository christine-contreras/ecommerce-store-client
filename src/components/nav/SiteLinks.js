import * as React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Grid, Menu, MenuItem, Divider, Button } from '@mui/material'

import CategoryDropdownMenu from './CategoryDropdownMenu'

const SiteLinks = () => {
  let navigate = useNavigate()

  //user menu to see more options
  const [moreAnchorEl, setMoreAnchorEl] = React.useState(null)
  const isMenuOpen = Boolean(moreAnchorEl)
  const handleMenuOpen = (event) => {
    setMoreAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setMoreAnchorEl(null)
  }
  return (
    <Grid item xs={4} md={5} sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
      <Button
        variant='text'
        sx={{ color: 'text.primary', marginRight: 2 }}
        onClick={handleMenuOpen}>
        Shop
      </Button>

      <CategoryDropdownMenu
        moreAnchorEl={moreAnchorEl}
        isMenuOpen={isMenuOpen}
        handleMenuClose={handleMenuClose}
      />
    </Grid>
  )
}

export default SiteLinks
