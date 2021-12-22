import * as React from 'react'
import { Menu, MenuItem, Typography } from '@mui/material'
import { useNavigate } from 'react-router'

const CategoryDropdownMenu = ({
  moreAnchorEl,
  isMenuOpen,
  handleMenuClose,
}) => {
  let navigate = useNavigate()

  const pages = [
    'New Arrivals',
    'Best Sellers',
    'Necklaces',
    'Earrings',
    'Rings',
    'Bracelets',
    'View All',
  ]
  return (
    <Menu
      className='menu'
      elevation={1}
      anchorEl={moreAnchorEl}
      id='menu-options'
      keepMounted
      open={isMenuOpen}
      onClose={handleMenuClose}
      sx={{
        '& .MuiPaper-root': {
          backgroundColor: 'secondary',
        },
      }}>
      <Typography variant='subtitle2' component='p'>
        Categories
      </Typography>
      {pages.map((page) => (
        <MenuItem
          onClick={() => navigate(`/`)}
          key={`category-menu-item-${page}`}>
          {page}
        </MenuItem>
      ))}
    </Menu>
  )
}
export default CategoryDropdownMenu
