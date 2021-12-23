import * as React from 'react'
import { Button } from '@mui/material'

import CategoryDropdownMenu from './CategoryDropdownMenu'

const SiteLinks = () => {
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
    <>
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
    </>
  )
}

export default SiteLinks
