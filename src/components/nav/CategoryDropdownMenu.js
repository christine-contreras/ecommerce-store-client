import * as React from 'react'
import { Menu, MenuItem, Typography } from '@mui/material'
import { categoriesAtom } from '../../atoms/atoms'

import { useNavigate } from 'react-router'
import { useRecoilValue } from 'recoil'

const CategoryDropdownMenu = ({
  moreAnchorEl,
  isMenuOpen,
  handleMenuClose,
}) => {
  let navigate = useNavigate()

  const categories = useRecoilValue(categoriesAtom)

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
      {categories.map((page) => (
        <MenuItem
          onClick={() => navigate(`/`)}
          key={`category-menu-item-${page.name}`}>
          {page.name}
        </MenuItem>
      ))}
    </Menu>
  )
}
export default CategoryDropdownMenu
