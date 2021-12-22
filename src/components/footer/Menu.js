import React from 'react'
import { MenuList, MenuItem, Typography } from '@mui/material'
import { categoriesAtom } from '../../atoms/atoms'
import { useNavigate } from 'react-router'
import { useRecoilValue } from 'recoil'

const Menu = () => {
  let navigate = useNavigate()

  const categories = useRecoilValue(categoriesAtom)
  return (
    <MenuList className='menu'>
      <Typography variant='subtitle2' component='p'>
        Categories
      </Typography>
      {categories.map((page) => (
        <MenuItem
          onClick={() => navigate(`/`)}
          key={`footer-menu-item-${page}`}>
          {page}
        </MenuItem>
      ))}
    </MenuList>
  )
}

export default Menu
